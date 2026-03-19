import { VK_API_DOCS } from "../config";
import { CodeGenerator, TextEditor } from "../helpers";
import { defNameToPascal, parseRef } from "../schema/resolver";
import type { VKMethod, VKSchemaProperty } from "../schema/types";
import { Responses } from "./responses";

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
			...methods.flatMap((m) =>
				APIMethods.generate(m, responses, allObjects),
			),
			"}",
		];
	}

	static generate(
		method: VKMethod,
		responses: Map<string, VKSchemaProperty>,
		allObjects: Map<string, VKSchemaProperty>,
	): string[] {
		const doc = `${method.description ?? ""}\n\n[Documentation](${VK_API_DOCS}/${method.name})`;
		const methodPascal = TextEditor.methodToPascalCase(method.name);
		const hasParams = method.parameters && method.parameters.length > 0;

		// Collect all response variants
		const responseKeys = Object.keys(method.responses);
		const primaryRef = method.responses.response?.$ref;

		if (responseKeys.length === 0) {
			// No responses defined
			const call = hasParams
				? `(params: Params.${methodPascal}Params) => Promise<unknown>`
				: "() => Promise<unknown>";

			return [
				...CodeGenerator.generateComment(doc),
				`"${method.name}": ${call}`,
			];
		}

		// Single response variant
		if (responseKeys.length === 1 && primaryRef) {
			const returnType = Responses.responseReturnType(
				primaryRef,
				responses,
				allObjects,
			);

			if (!hasParams) {
				return [
					...CodeGenerator.generateComment(doc),
					`"${method.name}": CallAPIWithoutParams<${returnType}>`,
				];
			}

			const allOptional = method.parameters!.every((p) => !p.required);
			const callType = allOptional
				? "CallAPIWithOptionalParams"
				: "CallAPI";

			return [
				...CodeGenerator.generateComment(doc),
				`"${method.name}": ${callType}<Params.${methodPascal}Params, ${returnType}>`,
			];
		}

		// Multiple response variants — generate overloads
		const overloads: string[] = [];
		overloads.push(...CodeGenerator.generateComment(doc));
		overloads.push(`"${method.name}": {`);

		for (const [key, refObj] of Object.entries(method.responses)) {
			if (!refObj.$ref) continue;

			const returnType = Responses.responseReturnType(
				refObj.$ref,
				responses,
				allObjects,
			);

			if (!hasParams) {
				overloads.push(`  (): Promise<${returnType}>`);
			} else {
				overloads.push(
					`  (params: Params.${methodPascal}Params): Promise<${returnType}>`,
				);
			}
		}

		overloads.push("}");
		return overloads;
	}
}
