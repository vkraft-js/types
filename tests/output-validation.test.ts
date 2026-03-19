import { describe, expect, it } from "bun:test";
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

describe("generated output validation", () => {
	it("all expected output files exist", () => {
		const expectedFiles = [
			"out/objects.d.ts",
			"out/responses.d.ts",
			"out/params.d.ts",
			"out/methods.d.ts",
			"out/errors.d.ts",
			"out/index.d.ts",
			"out/utils.d.ts",
		];
		for (const file of expectedFiles) {
			expect(existsSync(file)).toBe(true);
		}
	});

	it("generated types compile cleanly with tsc", () => {
		const result = execSync("npx tsc --noEmit out/index.d.ts 2>&1", {
			encoding: "utf-8",
		});
		expect(result.trim()).toBe("");
	});

	it("objects.d.ts contains VK-prefixed types", () => {
		const content = readFileSync("out/objects.d.ts", "utf-8");
		expect(content).toContain("export interface VK");
		expect(content).toContain("export type VK");
	});

	it("methods.d.ts contains APIMethods interface", () => {
		const content = readFileSync("out/methods.d.ts", "utf-8");
		expect(content).toContain("export interface APIMethods");
		expect(content).toContain('"users.get"');
	});

	it("params.d.ts contains Params interfaces", () => {
		const content = readFileSync("out/params.d.ts", "utf-8");
		expect(content).toContain("Params");
	});

	it("responses.d.ts contains response types", () => {
		const content = readFileSync("out/responses.d.ts", "utf-8");
		expect(content.length).toBeGreaterThan(100);
	});

	it("errors.d.ts contains VKErrorCode and VKError", () => {
		const content = readFileSync("out/errors.d.ts", "utf-8");
		expect(content).toContain("VKErrorCode");
		expect(content).toContain("VKError");
	});

	it("no duplicate export type names in objects", () => {
		const content = readFileSync("out/objects.d.ts", "utf-8");
		const exportMatches = content.match(
			/export (?:interface|type) (\w+)/g,
		);
		if (!exportMatches) return;

		const names = exportMatches.map((m) => m.replace(/^export (?:interface|type) /, ""));
		const dupes = names.filter(
			(name, i) => names.indexOf(name) !== i,
		);
		expect(dupes).toEqual([]);
	});

	it("no leaked 'any' types in output", () => {
		const files = [
			"out/objects.d.ts",
			"out/methods.d.ts",
			"out/params.d.ts",
			"out/responses.d.ts",
		];
		for (const file of files) {
			const content = readFileSync(file, "utf-8");
			// Check for standalone 'any' type (not in comments or strings)
			const lines = content.split("\n");
			for (const line of lines) {
				if (line.trimStart().startsWith("*") || line.trimStart().startsWith("//"))
					continue;
				expect(line).not.toMatch(/:\s*any\b/);
			}
		}
	});
});
