import { VK_API_DOCS } from "../config";
import { CodeGenerator, TextEditor } from "../helpers";
import type { VKMethod, VKParameter, VKSchemaProperty } from "../schema/types";
import { Responses } from "./responses";

/** Convert camelCase to snake_case: "userIds" → "user_ids" */
function camelToSnake(str: string): string {
	return str
		.replace(/([A-Z])/g, "_$1")
		.toLowerCase()
		.replace(/^_/, "");
}

/**
 * Map a response variant key to the parameter names that trigger it.
 *
 * Conventions in VK schema:
 * - `extendedResponse` → `extended` param
 * - `fieldsResponse` → `fields` param
 * - `userIds_Extended_Response` → `user_ids` + `extended` params
 * - `onlineMobileExtendedResponse` → `online_mobile` + `extended` params
 */
export function variantToTriggerParams(
	variantKey: string,
	availableParams: string[],
): string[] {
	// Remove trailing Response/response
	let prefix = variantKey.replace(/[Rr]esponse$/, "");
	prefix = prefix.replace(/_$/, "");
	if (!prefix) return []; // base "response"

	// Try splitting by underscore (handles userIds_Extended style)
	const underscoreSegments = prefix.split("_").filter(Boolean);
	if (underscoreSegments.length > 1) {
		const triggers: string[] = [];
		for (const seg of underscoreSegments) {
			const snaked = camelToSnake(seg);
			if (availableParams.includes(snaked)) {
				triggers.push(snaked);
			}
		}
		if (triggers.length > 0) return triggers;
	}

	// Treat entire prefix as camelCase and greedily match known params
	const snaked = camelToSnake(prefix);
	const parts = snaked.split("_");
	const triggers: string[] = [];
	let i = 0;
	while (i < parts.length) {
		let matched = false;
		for (let len = parts.length - i; len > 0; len--) {
			const candidate = parts.slice(i, i + len).join("_");
			if (availableParams.includes(candidate)) {
				triggers.push(candidate);
				i += len;
				matched = true;
				break;
			}
		}
		if (!matched) i++;
	}

	return triggers;
}

interface ResolvedVariant {
	returnType: string;
	triggerParams: string[];
}

function buildConstraint(
	triggerParams: string[],
	paramsType: string,
	methodParams: VKParameter[],
): string {
	if (triggerParams.length === 0) return paramsType;

	const constraints: string[] = [];
	for (const paramName of triggerParams) {
		const param = methodParams.find((p) => p.name === paramName);
		const isBool =
			param?.type === "boolean" ||
			(typeof param?.type === "string" && param.type === "boolean");

		if (isBool) {
			constraints.push(`${paramName}: 1 | true`);
		} else {
			constraints.push(
				`${paramName}: Required<Pick<${paramsType}, "${paramName}">>["${paramName}"]`,
			);
		}
	}

	return `${paramsType} & { ${constraints.join("; ")} }`;
}

export class APIMethods {
	static generateMany(
		methods: VKMethod[],
		responses: Map<string, VKSchemaProperty>,
		allObjects: Map<string, VKSchemaProperty>,
	): string[] {
		return [
			...CodeGenerator.generateComment(
				"This object is a map of VK API methods (functions map with input/output)",
			),
			"export interface APIMethods {",
			...methods.flatMap((m) => APIMethods.generate(m, responses, allObjects)),
			"}",
		];
	}

	static generate(
		method: VKMethod,
		responses: Map<string, VKSchemaProperty>,
		allObjects: Map<string, VKSchemaProperty>,
	): string[] {
		const doc = `${
			method.description ?? ""
		}\n\n[Documentation](${VK_API_DOCS}/${method.name})`;
		const methodPascal = TextEditor.methodToPascalCase(method.name);
		const hasParams = method.parameters && method.parameters.length > 0;
		const paramsType = `Params.${methodPascal}Params`;
		const availableParamNames = (method.parameters ?? []).map((p) => p.name);

		// Resolve all response variants
		const variants: ResolvedVariant[] = [];
		let baseReturnType: string | null = null;

		for (const [key, refObj] of Object.entries(method.responses)) {
			if (!refObj.$ref) continue;
			const returnType = Responses.responseReturnType(
				refObj.$ref,
				responses,
				allObjects,
			);

			if (key === "response") {
				baseReturnType = returnType;
			} else {
				const triggerParams = variantToTriggerParams(key, availableParamNames);
				variants.push({ returnType, triggerParams });
			}
		}

		// No responses at all
		if (!baseReturnType && variants.length === 0) {
			const call = hasParams
				? `(params: ${paramsType}) => Promise<unknown>`
				: "() => Promise<unknown>";
			return [
				...CodeGenerator.generateComment(doc),
				`"${method.name}": ${call}`,
			];
		}

		// Single response, no variants
		if (variants.length === 0 && baseReturnType) {
			if (!hasParams) {
				return [
					...CodeGenerator.generateComment(doc),
					`"${method.name}": CallAPIWithoutParams<${baseReturnType}>`,
				];
			}
			const allOptional = method.parameters!.every((p) => !p.required);
			const callType = allOptional ? "CallAPIWithOptionalParams" : "CallAPI";
			return [
				...CodeGenerator.generateComment(doc),
				`"${method.name}": ${callType}<${paramsType}, ${baseReturnType}>`,
			];
		}

		// Multiple response variants — generate overloads
		// Separate variants with resolved triggers from unresolved ones
		const resolved = variants.filter((v) => v.triggerParams.length > 0);
		const unresolved = variants.filter((v) => v.triggerParams.length === 0);

		// If no triggers were resolved, fall back to union return type
		if (resolved.length === 0) {
			const allTypes = [
				baseReturnType,
				...variants.map((v) => v.returnType),
			].filter(Boolean) as string[];
			const uniqueTypes = [...new Set(allTypes)];
			const returnType = uniqueTypes.join(" | ");

			if (!hasParams) {
				return [
					...CodeGenerator.generateComment(doc),
					`"${method.name}": CallAPIWithoutParams<${returnType}>`,
				];
			}
			const allOptional = method.parameters!.every((p) => !p.required);
			const callType = allOptional ? "CallAPIWithOptionalParams" : "CallAPI";
			return [
				...CodeGenerator.generateComment(doc),
				`"${method.name}": ${callType}<${paramsType}, ${returnType}>`,
			];
		}

		// Deduplicate variants with identical trigger sets — merge into union
		const triggerGroups = new Map<string, string[]>();
		for (const v of resolved) {
			const key = [...v.triggerParams].sort().join(",");
			const group = triggerGroups.get(key) ?? [];
			group.push(v.returnType);
			triggerGroups.set(key, group);
		}

		const deduped: ResolvedVariant[] = [];
		for (const [key, types] of triggerGroups) {
			deduped.push({
				triggerParams: key.split(","),
				returnType: [...new Set(types)].join(" | "),
			});
		}

		// Sort: most specific (most triggers) first, base last
		const sorted = deduped.sort(
			(a, b) => b.triggerParams.length - a.triggerParams.length,
		);

		// If there are unresolved variants, merge them into the base return type as union
		const baseTypes = [
			baseReturnType,
			...unresolved.map((v) => v.returnType),
		].filter(Boolean) as string[];
		const baseUnion = [...new Set(baseTypes)].join(" | ") || "unknown";

		const lines: string[] = [];
		lines.push(...CodeGenerator.generateComment(doc));
		lines.push(`"${method.name}": {`);

		for (const variant of sorted) {
			const constraint = buildConstraint(
				variant.triggerParams,
				paramsType,
				method.parameters ?? [],
			);
			lines.push(`(params: ${constraint}): Promise<${variant.returnType}>`);
		}

		// Base overload (fallback)
		if (!hasParams) {
			lines.push(`(): Promise<${baseUnion}>`);
		} else {
			const allOptional = method.parameters!.every((p) => !p.required);
			if (allOptional) {
				lines.push(`(params?: ${paramsType}): Promise<${baseUnion}>`);
			} else {
				lines.push(`(params: ${paramsType}): Promise<${baseUnion}>`);
			}
		}

		lines.push("}");
		return lines;
	}
}
