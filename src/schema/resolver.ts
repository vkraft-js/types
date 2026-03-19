import type { VKSchemaProperty } from "./types";

export interface ParsedRef {
	definitionName: string;
	kind: "object" | "response" | "error";
}

/**
 * Parse a `$ref` string into its definition name and kind.
 *
 * VK schema refs look like:
 * - `"../users/objects.json#/definitions/users_user_full"`
 * - `"../users/responses.json#/definitions/users_get_response"`
 * - `"objects.json#/definitions/users_user_full"` (same-dir)
 * - `"responses.json#/definitions/some_response"`
 * - `"../errors.json#/definitions/some_error"`
 */
export function parseRef(ref: string): ParsedRef {
	const hashIdx = ref.indexOf("#/definitions/");
	if (hashIdx === -1) {
		throw new Error(`Invalid $ref format: ${ref}`);
	}

	const definitionName = ref.slice(hashIdx + "#/definitions/".length);
	const filePart = ref.slice(0, hashIdx);

	let kind: ParsedRef["kind"] = "object";
	if (filePart.includes("responses")) {
		kind = "response";
	} else if (filePart.includes("errors")) {
		kind = "error";
	}

	return { definitionName, kind };
}

/**
 * Resolve a `$ref` to the actual definition object from a flat map.
 */
export function resolveRef(
	ref: string,
	objects: Map<string, VKSchemaProperty>,
	responses: Map<string, VKSchemaProperty>,
): VKSchemaProperty | undefined {
	const parsed = parseRef(ref);

	if (parsed.kind === "response") {
		return responses.get(parsed.definitionName);
	}
	return objects.get(parsed.definitionName);
}

/**
 * Convert a definition name to a VK-prefixed PascalCase TypeScript type name.
 *
 * `"users_user_full"` → `"VKUsersUserFull"`
 */
export function refToTypeName(ref: string): string {
	const { definitionName } = parseRef(ref);
	return `VK${defNameToPascal(definitionName)}`;
}

/**
 * Convert a definition name (snake_case) to PascalCase.
 *
 * `"users_user_full"` → `"UsersUserFull"`
 */
export function defNameToPascal(name: string): string {
	return name
		.split("_")
		.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
		.join("");
}
