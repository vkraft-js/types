import { describe, expect, it } from "bun:test";
import {
	defNameToPascal,
	parseRef,
	refToTypeName,
	resolveRef,
} from "../src/schema/resolver";
import type { VKSchemaProperty } from "../src/schema/types";

describe("parseRef", () => {
	it("parses cross-file object ref", () => {
		const result = parseRef(
			"../users/objects.json#/definitions/users_user_full",
		);
		expect(result).toEqual({
			definitionName: "users_user_full",
			kind: "object",
		});
	});

	it("parses cross-file response ref", () => {
		const result = parseRef(
			"../users/responses.json#/definitions/users_get_response",
		);
		expect(result).toEqual({
			definitionName: "users_get_response",
			kind: "response",
		});
	});

	it("parses same-dir object ref", () => {
		const result = parseRef(
			"objects.json#/definitions/base_bool_int",
		);
		expect(result).toEqual({
			definitionName: "base_bool_int",
			kind: "object",
		});
	});

	it("parses error ref", () => {
		const result = parseRef(
			"../errors.json#/definitions/some_error",
		);
		expect(result).toEqual({
			definitionName: "some_error",
			kind: "error",
		});
	});

	it("throws on invalid ref", () => {
		expect(() => parseRef("invalid")).toThrow("Invalid $ref format");
	});
});

describe("defNameToPascal", () => {
	it("converts snake_case to PascalCase", () => {
		expect(defNameToPascal("users_user_full")).toBe("UsersUserFull");
	});

	it("handles single segment", () => {
		expect(defNameToPascal("user")).toBe("User");
	});
});

describe("refToTypeName", () => {
	it("converts ref to VK-prefixed type name", () => {
		expect(
			refToTypeName("../users/objects.json#/definitions/users_user_full"),
		).toBe("VKUsersUserFull");
	});
});

describe("resolveRef", () => {
	it("resolves object ref", () => {
		const objects = new Map<string, VKSchemaProperty>([
			["users_user_full", { type: "object" }],
		]);
		const responses = new Map<string, VKSchemaProperty>();

		const result = resolveRef(
			"../users/objects.json#/definitions/users_user_full",
			objects,
			responses,
		);
		expect(result).toEqual({ type: "object" });
	});

	it("resolves response ref", () => {
		const objects = new Map<string, VKSchemaProperty>();
		const responses = new Map<string, VKSchemaProperty>([
			["users_get_response", { type: "object" }],
		]);

		const result = resolveRef(
			"../users/responses.json#/definitions/users_get_response",
			objects,
			responses,
		);
		expect(result).toEqual({ type: "object" });
	});

	it("returns undefined for missing ref", () => {
		const result = resolveRef(
			"../users/objects.json#/definitions/nonexistent",
			new Map(),
			new Map(),
		);
		expect(result).toBeUndefined();
	});
});
