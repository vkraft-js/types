import { describe, expect, it } from "bun:test";
import { flattenAllOf } from "../src/schema/allof-merger";
import type { VKSchemaProperty } from "../src/schema/types";

describe("flattenAllOf", () => {
	it("flattens a simple 2-level chain", () => {
		const defs = new Map<string, VKSchemaProperty>([
			[
				"base_user",
				{
					type: "object",
					properties: {
						id: { type: "integer", required: true },
						name: { type: "string" },
					},
				},
			],
		]);

		const schema: VKSchemaProperty = {
			allOf: [
				{ $ref: "objects.json#/definitions/base_user" },
				{
					properties: {
						email: { type: "string" },
					},
				},
			],
		};

		const result = flattenAllOf(schema, defs);

		expect(Object.keys(result.properties)).toEqual(["id", "name", "email"]);
		expect(result.required.has("id")).toBe(true);
		expect(result.required.has("name")).toBe(false);
		expect(result.required.has("email")).toBe(false);
	});

	it("flattens a deep chain (3 levels)", () => {
		const defs = new Map<string, VKSchemaProperty>([
			[
				"users_user_min",
				{
					type: "object",
					properties: {
						id: { type: "integer", required: true },
					},
				},
			],
			[
				"users_user",
				{
					allOf: [
						{ $ref: "objects.json#/definitions/users_user_min" },
						{
							properties: {
								screen_name: { type: "string" },
							},
						},
					],
				},
			],
		]);

		const schema: VKSchemaProperty = {
			allOf: [
				{ $ref: "objects.json#/definitions/users_user" },
				{
					properties: {
						photo: { type: "string" },
					},
				},
			],
		};

		const result = flattenAllOf(schema, defs);

		expect(Object.keys(result.properties)).toEqual([
			"id",
			"screen_name",
			"photo",
		]);
		expect(result.required.has("id")).toBe(true);
	});

	it("later properties override earlier ones", () => {
		const defs = new Map<string, VKSchemaProperty>([
			[
				"base",
				{
					type: "object",
					properties: {
						name: { type: "string", description: "base name" },
					},
				},
			],
		]);

		const schema: VKSchemaProperty = {
			allOf: [
				{ $ref: "objects.json#/definitions/base" },
				{
					properties: {
						name: { type: "string", description: "overridden name" },
					},
				},
			],
		};

		const result = flattenAllOf(schema, defs);
		expect(result.properties.name.description).toBe("overridden name");
	});

	it("collects required from all levels", () => {
		const defs = new Map<string, VKSchemaProperty>([
			[
				"base",
				{
					type: "object",
					properties: {
						id: { type: "integer", required: true },
					},
					required: ["id"],
				},
			],
		]);

		const schema: VKSchemaProperty = {
			allOf: [
				{ $ref: "objects.json#/definitions/base" },
				{
					properties: {
						name: { type: "string", required: true },
					},
				},
			],
		};

		const result = flattenAllOf(schema, defs);
		expect(result.required.has("id")).toBe(true);
		expect(result.required.has("name")).toBe(true);
	});

	it("handles circular references gracefully", () => {
		const defs = new Map<string, VKSchemaProperty>([
			[
				"circular_a",
				{
					allOf: [{ $ref: "objects.json#/definitions/circular_b" }],
					properties: { a: { type: "string" } },
				},
			],
			[
				"circular_b",
				{
					allOf: [{ $ref: "objects.json#/definitions/circular_a" }],
					properties: { b: { type: "string" } },
				},
			],
		]);

		const schema: VKSchemaProperty = {
			allOf: [{ $ref: "objects.json#/definitions/circular_a" }],
		};

		// Should not hang or throw
		const result = flattenAllOf(schema, defs);
		expect(result.properties.a).toBeDefined();
	});

	it("returns own properties when no allOf", () => {
		const schema: VKSchemaProperty = {
			type: "object",
			properties: {
				id: { type: "integer" },
			},
		};

		const result = flattenAllOf(schema, new Map());
		expect(Object.keys(result.properties)).toEqual(["id"]);
	});
});
