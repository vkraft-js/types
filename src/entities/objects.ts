import { OBJECTS_PREFIX } from "../config";
import { CodeGenerator, TextEditor } from "../helpers";
import { flattenAllOf } from "../schema/allof-merger";
import { defNameToPascal, parseRef } from "../schema/resolver";
import type { VKSchemaProperty } from "../schema/types";
import { Properties, collectEnumAliases, schemaToType } from "./properties";

export class Objects {
	static generateMany(
		objects: Map<string, VKSchemaProperty>,
		allDefinitions: Map<string, VKSchemaProperty>,
	): string[] {
		const lines: string[] = [];
		for (const [defName, def] of objects) {
			lines.push(...Objects.generate(defName, def, allDefinitions));
		}
		return lines;
	}

	static generate(
		defName: string,
		def: VKSchemaProperty,
		allDefinitions: Map<string, VKSchemaProperty>,
	): string[] {
		const typeName = OBJECTS_PREFIX + defNameToPascal(defName);
		const ctx = {
			objectName: defName,
			objectType: "object" as const,
			allDefinitions,
		};

		const doc = def.description ?? "";

		// ── Pure enum (has enum, no properties) ────────────────────────────
		if (def.enum && !def.properties && !def.allOf && !def.oneOf) {
			const isNumeric = def.type === "integer" || def.type === "number";

			const commentLines: string[] = [doc];
			if (def.enumNames && def.enumNames.length === def.enum.length) {
				commentLines.push(
					"",
					...def.enum.map((val, i) => `- \`${val}\` — ${def.enumNames![i]}`),
				);
			}

			return [
				"",
				...CodeGenerator.generateComment(commentLines),
				CodeGenerator.generateUnionType(
					typeName,
					def.enum,
					isNumeric ? "number" : "string",
				),
				"",
			];
		}

		// ── $ref only (type alias) ──────────────────────────────────────────
		if (def.$ref && !def.properties && !def.allOf && !def.oneOf) {
			const target = schemaToType(def, ctx);
			return [
				"",
				...CodeGenerator.generateComment(doc),
				`export type ${typeName} = ${target}`,
				"",
			];
		}

		// ── allOf (inheritance) ─────────────────────────────────────────────
		if (def.allOf) {
			const flat = flattenAllOf(def, allDefinitions);
			const entries = Object.entries(flat.properties);

			if (entries.length === 0) {
				return [
					"",
					...CodeGenerator.generateComment(doc),
					`export interface ${typeName} {}`,
					"",
				];
			}

			const enumAliases = collectEnumAliases(
				flat.properties,
				defName,
				"object",
			);

			return [
				...enumAliases,
				"",
				...CodeGenerator.generateComment(doc),
				`export interface ${typeName} {`,
				...Properties.convertMany(flat.properties, flat.required, ctx).flat(),
				"}",
				"",
			];
		}

		// ── oneOf with discriminator ────────────────────────────────────────
		if (def.oneOf && def.discriminator) {
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

		// ── oneOf (plain union) ─────────────────────────────────────────────
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

		// ── Object with properties ──────────────────────────────────────────
		if (def.properties) {
			const reqSet = new Set(Array.isArray(def.required) ? def.required : []);

			const enumAliases = collectEnumAliases(def.properties, defName, "object");

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

		// ── Empty definition ────────────────────────────────────────────────
		return [
			"",
			...CodeGenerator.generateComment(doc),
			`export interface ${typeName} {}`,
			"",
		];
	}
}
