import { describe, expect, it } from "bun:test";
import type { VKSchemaProperty } from "../src/schema/types";
import {
	collectEnumAliases,
	schemaToType,
} from "../src/entities/properties";
import type { FieldContext } from "../src/entities/properties";

function makeCtx(
	overrides: Partial<FieldContext> = {},
): FieldContext {
	return {
		objectName: "test_object",
		objectType: "object",
		allDefinitions: new Map(),
		...overrides,
	};
}

describe("schemaToType", () => {
	it("resolves $ref to VK-prefixed type", () => {
		const prop: VKSchemaProperty = {
			$ref: "../users/objects.json#/definitions/users_user_full",
		};
		expect(schemaToType(prop, makeCtx())).toBe("VKUsersUserFull");
	});

	it("resolves $ref with Objects prefix in method context", () => {
		const prop: VKSchemaProperty = {
			$ref: "../users/objects.json#/definitions/users_user_full",
		};
		expect(schemaToType(prop, makeCtx({ objectType: "method" }))).toBe(
			"Objects.VKUsersUserFull",
		);
	});

	it("handles string type", () => {
		expect(schemaToType({ type: "string" }, makeCtx())).toBe("string");
	});

	it("handles integer type", () => {
		expect(schemaToType({ type: "integer" }, makeCtx())).toBe("number");
	});

	it("handles number type", () => {
		expect(schemaToType({ type: "number" }, makeCtx())).toBe("number");
	});

	it("handles boolean type", () => {
		expect(schemaToType({ type: "boolean" }, makeCtx())).toBe("boolean");
	});

	it("handles array type with items", () => {
		const prop: VKSchemaProperty = {
			type: "array",
			items: { type: "string" },
		};
		expect(schemaToType(prop, makeCtx())).toBe("(string)[]");
	});

	it("handles array without items", () => {
		expect(schemaToType({ type: "array" }, makeCtx())).toBe("unknown[]");
	});

	it("handles object type with properties", () => {
		const prop: VKSchemaProperty = {
			type: "object",
			properties: {
				id: { type: "integer", required: true },
				name: { type: "string" },
			},
		};
		const result = schemaToType(prop, makeCtx());
		expect(result).toContain("id: number");
		expect(result).toContain("name?: string");
	});

	it("handles object type without properties", () => {
		expect(schemaToType({ type: "object" }, makeCtx())).toBe(
			"Record<string, unknown>",
		);
	});

	it("handles multi-type array", () => {
		const prop: VKSchemaProperty = {
			type: ["integer", "string"],
		};
		expect(schemaToType(prop, makeCtx())).toBe("number | string");
	});

	it("handles oneOf as union", () => {
		const prop: VKSchemaProperty = {
			oneOf: [{ type: "string" }, { type: "integer" }],
		};
		expect(schemaToType(prop, makeCtx())).toBe("string | number");
	});

	it("handles enum with fieldName → named type", () => {
		const prop: VKSchemaProperty = {
			type: "string",
			enum: ["male", "female"],
		};
		expect(schemaToType(prop, makeCtx(), "sex")).toBe("VKTestObjectSex");
	});

	it("handles enum in method context → no VK prefix", () => {
		const prop: VKSchemaProperty = {
			type: "string",
			enum: ["asc", "desc"],
		};
		expect(
			schemaToType(prop, makeCtx({ objectType: "method" }), "order"),
		).toBe("TestObjectOrder");
	});

	it("returns unknown for empty prop", () => {
		expect(schemaToType({}, makeCtx())).toBe("unknown");
	});

	it("handles additionalProperties", () => {
		const prop: VKSchemaProperty = {
			type: "object",
			additionalProperties: { type: "string" },
		};
		expect(schemaToType(prop, makeCtx())).toBe("Record<string, string>");
	});
});

describe("collectEnumAliases", () => {
	it("collects string enum alias", () => {
		const props: Record<string, VKSchemaProperty> = {
			status: {
				type: "string",
				enum: ["active", "banned"],
			},
		};
		const lines = collectEnumAliases(props, "test_object", "object");
		expect(lines.join("\n")).toContain("VKTestObjectStatus");
		expect(lines.join("\n")).toContain('"active"');
		expect(lines.join("\n")).toContain('"banned"');
	});

	it("collects numeric enum alias", () => {
		const props: Record<string, VKSchemaProperty> = {
			sex: {
				type: "integer",
				enum: [0, 1, 2],
			},
		};
		const lines = collectEnumAliases(props, "test_object", "object");
		expect(lines.join("\n")).toContain("VKTestObjectSex");
		expect(lines.join("\n")).toContain("0 | 1 | 2");
	});

	it("collects enum from array items", () => {
		const props: Record<string, VKSchemaProperty> = {
			fields: {
				type: "array",
				items: {
					type: "string",
					enum: ["name", "photo"],
				},
			},
		};
		const lines = collectEnumAliases(props, "test_object", "object");
		expect(lines.join("\n")).toContain("VKTestObjectFields");
	});

	it("adds JSDoc with enumNames", () => {
		const props: Record<string, VKSchemaProperty> = {
			sex: {
				type: "integer",
				enum: [0, 1, 2],
				enumNames: ["unknown", "female", "male"],
			},
		};
		const lines = collectEnumAliases(props, "user", "object");
		const text = lines.join("\n");
		expect(text).toContain("female");
		expect(text).toContain("male");
	});
});
