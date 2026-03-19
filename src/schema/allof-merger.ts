import { parseRef } from "./resolver";
import type { VKSchemaProperty } from "./types";

export interface FlattenedSchema {
	properties: Record<string, VKSchemaProperty>;
	required: Set<string>;
	description?: string;
}

/**
 * Recursively flatten an `allOf` schema into a single set of properties.
 *
 * Later entries override earlier ones (same key → later wins).
 * Circular references are guarded via a `visited` set.
 */
export function flattenAllOf(
	schema: VKSchemaProperty,
	allDefinitions: Map<string, VKSchemaProperty>,
	visited: Set<string> = new Set(),
): FlattenedSchema {
	const result: FlattenedSchema = {
		properties: {},
		required: new Set(),
		description: schema.description,
	};

	if (!schema.allOf) {
		// No allOf — just return own properties
		if (schema.properties) {
			Object.assign(result.properties, schema.properties);
		}
		collectRequired(schema, result.required);
		return result;
	}

	for (const item of schema.allOf) {
		if (item.$ref) {
			const { definitionName } = parseRef(item.$ref);

			if (visited.has(definitionName)) continue;
			visited.add(definitionName);

			const resolved = allDefinitions.get(definitionName);
			if (!resolved) continue;

			// Recursively flatten the referenced definition
			const nested = flattenAllOf(resolved, allDefinitions, visited);
			Object.assign(result.properties, nested.properties);
			for (const r of nested.required) result.required.add(r);
		} else {
			// Inline schema in allOf
			if (item.allOf) {
				const nested = flattenAllOf(item, allDefinitions, visited);
				Object.assign(result.properties, nested.properties);
				for (const r of nested.required) result.required.add(r);
			}
			if (item.properties) {
				Object.assign(result.properties, item.properties);
			}
			collectRequired(item, result.required);
		}
	}

	// Own properties override inherited ones
	if (schema.properties) {
		Object.assign(result.properties, schema.properties);
	}
	collectRequired(schema, result.required);

	return result;
}

function collectRequired(schema: VKSchemaProperty, target: Set<string>): void {
	if (Array.isArray(schema.required)) {
		for (const r of schema.required) target.add(r);
	}
	// VK schema also uses required: true on individual properties
	if (schema.properties) {
		for (const [key, prop] of Object.entries(schema.properties)) {
			if (prop.required === true) target.add(key);
		}
	}
}
