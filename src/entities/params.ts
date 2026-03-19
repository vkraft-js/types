import { CodeGenerator, TextEditor } from "../helpers";
import type { VKMethod, VKSchemaProperty } from "../schema/types";
import { collectEnumAliases, schemaToType } from "./properties";

export class Params {
	static generateMany(
		methods: VKMethod[],
		allDefinitions: Map<string, VKSchemaProperty>,
	): string[] {
		return methods.flatMap((m) => Params.generate(m, allDefinitions));
	}

	static generate(
		method: VKMethod,
		allDefinitions: Map<string, VKSchemaProperty>,
	): string[] {
		if (!method.parameters || method.parameters.length === 0) return [];

		const methodPascal = TextEditor.methodToPascalCase(method.name);
		const ctx = {
			objectName: method.name.replace(".", "_"),
			objectType: "method" as const,
			allDefinitions,
		};

		// Build a properties map from parameters for enum alias collection
		const propsMap: Record<string, VKSchemaProperty> = {};
		for (const param of method.parameters) {
			propsMap[param.name] = param;
		}

		const enumAliases = collectEnumAliases(
			propsMap,
			method.name.replace(".", "_"),
			"method",
		);

		const lines: string[] = [
			...enumAliases,
			"",
			...CodeGenerator.generateComment(
				`Params for {@link APIMethods["${method.name}"] | ${method.name}} method`,
			),
			`export interface ${methodPascal}Params {`,
		];

		for (const param of method.parameters) {
			const type = schemaToType(param, ctx, param.name);
			if (param.description) {
				lines.push(...CodeGenerator.generateComment(param.description));
			}
			const isRequired = param.required === true;
			lines.push(`${param.name}${isRequired ? "" : "?"}: ${type}`);
		}

		lines.push("}", "");
		return lines;
	}
}
