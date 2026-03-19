import { CodeGenerator } from "../helpers";
import { flattenAllOf } from "../schema/allof-merger";
import { defNameToPascal, parseRef } from "../schema/resolver";
import type { VKSchemaProperty } from "../schema/types";
import { Properties, collectEnumAliases, schemaToType } from "./properties";

export class Responses {
	static generateMany(
		responses: Map<string, VKSchemaProperty>,
		allDefinitions: Map<string, VKSchemaProperty>,
		allObjects: Map<string, VKSchemaProperty>,
	): string[] {
		const lines: string[] = [];
		for (const [defName, def] of responses) {
			lines.push(
				...Responses.generate(defName, def, allDefinitions, allObjects),
			);
		}
		return lines;
	}

	static generate(
		defName: string,
		def: VKSchemaProperty,
		allDefinitions: Map<string, VKSchemaProperty>,
		allObjects: Map<string, VKSchemaProperty>,
	): string[] {
		const typeName = defNameToPascal(defName);
		const ctx = {
			objectName: defName,
			objectType: "response" as const,
			allDefinitions: new Map([...allObjects, ...allDefinitions]),
		};

		// VK responses are typically: { properties: { response: { ... } } }
		// We unwrap the outer "response" wrapper.
		const responseProp = def.properties?.response;

		if (!responseProp) {
			// No response wrapper — emit the full definition
			return Responses.generateFromDef(typeName, def, ctx);
		}

		// Unwrap: generate the inner type
		return Responses.generateFromDef(typeName, responseProp, ctx);
	}

	private static generateFromDef(
		typeName: string,
		def: VKSchemaProperty,
		ctx: {
			objectName: string;
			objectType: "response";
			allDefinitions: Map<string, VKSchemaProperty>;
		},
	): string[] {
		const doc = def.description ?? "";

		// $ref only
		if (def.$ref) {
			const target = schemaToType(def, ctx);
			return [
				"",
				...CodeGenerator.generateComment(doc),
				`export type ${typeName} = ${target}`,
				"",
			];
		}

		// allOf
		if (def.allOf) {
			const flat = flattenAllOf(def, ctx.allDefinitions);
			const entries = Object.entries(flat.properties);

			if (entries.length === 0) {
				return [
					"",
					...CodeGenerator.generateComment(doc),
					`export type ${typeName} = unknown`,
					"",
				];
			}

			const enumAliases = collectEnumAliases(
				flat.properties,
				ctx.objectName,
				"response",
			);

			return [
				...enumAliases,
				"",
				...CodeGenerator.generateComment(doc),
				`export interface ${typeName} {`,
				...Properties.convertMany(
					flat.properties,
					flat.required,
					ctx,
				).flat(),
				"}",
				"",
			];
		}

		// oneOf
		if (def.oneOf) {
			const union = def.oneOf
				.map((variant) => schemaToType(variant, ctx))
				.join(" | ");
			return [
				"",
				...CodeGenerator.generateComment(doc),
				`export type ${typeName} = ${union}`,
				"",
			];
		}

		// Object with properties
		if (def.properties) {
			const reqSet = new Set(
				Array.isArray(def.required) ? def.required : [],
			);

			const enumAliases = collectEnumAliases(
				def.properties,
				ctx.objectName,
				"response",
			);

			return [
				...enumAliases,
				"",
				...CodeGenerator.generateComment(doc),
				`export interface ${typeName} {`,
				...Properties.convertMany(def.properties, reqSet, ctx).flat(),
				"}",
				"",
			];
		}

		// Primitive or simple type
		if (def.type) {
			const ts = schemaToType(def, ctx);
			return [
				"",
				...CodeGenerator.generateComment(doc),
				`export type ${typeName} = ${ts}`,
				"",
			];
		}

		// Fallback
		return [
			"",
			...CodeGenerator.generateComment(doc),
			`export type ${typeName} = unknown`,
			"",
		];
	}

	/**
	 * Get the TypeScript return type for a response definition reference.
	 */
	static responseReturnType(
		ref: string,
		responses: Map<string, VKSchemaProperty>,
		allObjects: Map<string, VKSchemaProperty>,
	): string {
		const { definitionName } = parseRef(ref);
		const typeName = defNameToPascal(definitionName);

		// Check if response has an inner "response" wrapper to ensure we reference the right name
		const def = responses.get(definitionName);
		if (!def) return typeName;

		// If the response property is just a $ref to an object, resolve it
		const responseProp = def.properties?.response;
		if (responseProp?.$ref) {
			const parsed = parseRef(responseProp.$ref);
			if (parsed.kind === "object") {
				return "Objects.VK" + defNameToPascal(parsed.definitionName);
			}
		}

		return "Responses." + typeName;
	}
}
