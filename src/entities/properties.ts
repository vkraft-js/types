import { OBJECTS_PREFIX } from "../config";
import { CodeGenerator, TextEditor } from "../helpers";
import { flattenAllOf } from "../schema/allof-merger";
import { defNameToPascal, parseRef } from "../schema/resolver";
import type { VKSchemaProperty } from "../schema/types";
import type { TObjectType } from "../types";

export type FieldContext = {
	/** Name of the enclosing object or method (used for naming inline enums). */
	objectName: string;
	objectType: TObjectType;
	/** All object definitions for resolving $ref and allOf. */
	allDefinitions: Map<string, VKSchemaProperty>;
};

function objectsPrefix(objectType: TObjectType) {
	return objectType === "object" ? "" : "Objects.";
}

const VK_TYPE_MAP: Record<string, string> = {
	string: "string",
	integer: "number",
	number: "number",
	boolean: "boolean",
};

/**
 * Convert a VK schema property to a TypeScript type string.
 */
export function schemaToType(
	prop: VKSchemaProperty,
	ctx: FieldContext,
	fieldName?: string,
): string {
	// $ref → resolve to VK-prefixed type name
	if (prop.$ref) {
		const parsed = parseRef(prop.$ref);
		if (parsed.kind === "response") {
			return defNameToPascal(parsed.definitionName);
		}
		return (
			objectsPrefix(ctx.objectType) +
			OBJECTS_PREFIX +
			defNameToPascal(parsed.definitionName)
		);
	}

	// allOf → flatten and emit inline object
	if (prop.allOf) {
		const flat = flattenAllOf(prop, ctx.allDefinitions);
		const entries = Object.entries(flat.properties);
		if (entries.length === 0) return "Record<string, unknown>";

		const lines = entries.map(([key, val]) => {
			const optional = !flat.required.has(key) && val.required !== true;
			const type = schemaToType(val, ctx, key);
			return `${safeKey(key)}${optional ? "?" : ""}: ${type}`;
		});
		return `{ ${lines.join("; ")} }`;
	}

	// oneOf → union
	if (prop.oneOf) {
		return prop.oneOf
			.map((variant) => schemaToType(variant, ctx, fieldName))
			.join(" | ");
	}

	// Multi-type: type is an array (e.g. ["integer", "string"])
	if (Array.isArray(prop.type)) {
		return prop.type.map((t) => VK_TYPE_MAP[t] ?? "unknown").join(" | ");
	}

	// enum → named union type alias (reference by name; the alias is emitted elsewhere)
	if (prop.enum && fieldName) {
		const enumTypeName =
			(ctx.objectType === "object" ? OBJECTS_PREFIX : "") +
			TextEditor.snakeToPascalCase(ctx.objectName) +
			TextEditor.snakeToPascalCase(fieldName);
		return enumTypeName;
	}

	// Single primitive type
	if (prop.type) {
		switch (prop.type) {
			case "string":
				return "string";
			case "integer":
			case "number":
				return "number";
			case "boolean":
				return "boolean";

			case "array": {
				if (prop.items) {
					const itemType = schemaToType(prop.items, ctx, fieldName);
					return `(${itemType})[]`;
				}
				return "unknown[]";
			}

			case "object": {
				// Has explicit properties → inline object type
				if (prop.properties) {
					const reqSet = new Set(
						Array.isArray(prop.required) ? prop.required : [],
					);
					const lines = Object.entries(prop.properties).map(([key, val]) => {
						const optional = !reqSet.has(key) && val.required !== true;
						const type = schemaToType(val, ctx, key);
						return `${safeKey(key)}${optional ? "?" : ""}: ${type}`;
					});
					return `{ ${lines.join("; ")} }`;
				}
				// additionalProperties
				if (
					prop.additionalProperties &&
					typeof prop.additionalProperties === "object"
				) {
					const valType = schemaToType(prop.additionalProperties, ctx);
					return `Record<string, ${valType}>`;
				}
				return "Record<string, unknown>";
			}
		}
	}

	return "unknown";
}

/** Quote a property key if it's not a valid JS identifier */
function safeKey(key: string): string {
	return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
}

// ─── Properties helper ────────────────────────────────────────────────────────

export class Properties {
	static convertMany(
		properties: Record<string, VKSchemaProperty>,
		required: Set<string>,
		ctx: FieldContext,
	): string[][] {
		return Object.entries(properties).map(([key, prop]) =>
			Properties.convert(
				key,
				prop,
				required.has(key) || prop.required === true,
				ctx,
			),
		);
	}

	static convert(
		key: string,
		prop: VKSchemaProperty,
		isRequired: boolean,
		ctx: FieldContext,
	): string[] {
		const type = schemaToType(prop, ctx, key);
		const lines: string[] = [];

		if (prop.description) {
			lines.push(...CodeGenerator.generateComment(prop.description));
		}

		lines.push(`${safeKey(key) + (isRequired ? "" : "?")}: ${type}`);
		return lines;
	}
}

/**
 * Collect enum type aliases that need to be emitted before an interface.
 * Returns lines of `export type ...` declarations.
 */
export function collectEnumAliases(
	properties: Record<string, VKSchemaProperty>,
	ownerName: string,
	objectType: TObjectType,
): string[] {
	const lines: string[] = [];

	for (const [key, prop] of Object.entries(properties)) {
		// Check for enum on the property itself OR on items (array of enums)
		const enumSource = prop.enum
			? prop
			: prop.type === "array" && prop.items?.enum
			  ? prop.items
			  : null;

		if (!enumSource?.enum) continue;

		const typeName =
			(objectType === "object" ? OBJECTS_PREFIX : "") +
			TextEditor.snakeToPascalCase(ownerName) +
			TextEditor.snakeToPascalCase(key);

		const isNumeric =
			enumSource.type === "integer" || enumSource.type === "number";

		// Generate JSDoc with enumNames if available
		if (
			enumSource.enumNames &&
			enumSource.enumNames.length === enumSource.enum.length
		) {
			const commentLines = enumSource.enum.map(
				(val, i) => `- \`${val}\` — ${enumSource.enumNames![i]}`,
			);
			lines.push(...CodeGenerator.generateComment(commentLines));
		}

		lines.push(
			CodeGenerator.generateUnionType(
				typeName,
				enumSource.enum,
				isNumeric ? "number" : "string",
			),
		);
	}

	return lines;
}
