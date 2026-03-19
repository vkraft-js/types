import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import prettier from "prettier";
import { OUTPUT_PATH, PRETTIER_OPTIONS } from "./config";
import { APIMethods, Errors, Objects, Params, Responses } from "./entities";
import { CodeGenerator, generateHeader } from "./helpers";
import { fetchVKSchema } from "./schema/fetcher";

export interface IGeneratedFile {
	name: string;
	lines: string[][];
}

// ─── Fetch & parse ────────────────────────────────────────────────────────────

console.log("Fetching VK API schema...");
const schema = await fetchVKSchema();
console.log(
	`Schema v${schema.version}: ${schema.objects.size} objects, ${schema.responses.size} responses, ${schema.methods.length} methods, ${schema.errors.length} errors`,
);

// ─── File generation ──────────────────────────────────────────────────────────

const header = generateHeader(schema.version);

const files: IGeneratedFile[] = [
	{
		name: "objects.d.ts",
		lines: [
			header("This module contains VK API object types with the `VK` prefix", [
				"@example import object",
				"```typescript",
				`import { VKUsersUserFull } from "@vkraft/types/objects";`,
				"```",
			]),
			Objects.generateMany(schema.objects, schema.objects),
		],
	},
	{
		name: "responses.d.ts",
		lines: [
			header("This module contains VK API response types", [
				"@example import response",
				"```typescript",
				`import { UsersGetResponse } from "@vkraft/types/responses";`,
				"```",
			]),
			[`import type * as Objects from "./objects"`, ""],
			Responses.generateMany(
				schema.responses,
				schema.responses,
				schema.objects,
			),
		],
	},
	{
		name: "params.d.ts",
		lines: [
			header(
				"This module contains params for VK API methods with the `Params` postfix",
				[
					"@example import params",
					"```typescript",
					`import { UsersGetParams } from "@vkraft/types/params";`,
					"```",
				],
			),
			[
				`import type { APIMethods } from "./methods";`,
				`import type * as Objects from "./objects"`,
				"",
			],
			Params.generateMany(schema.methods, schema.objects),
		],
	},
	{
		name: "methods.d.ts",
		lines: [
			header(
				"This module contains VK API method types (functions map with input/output)",
				[
					"@example import API methods map",
					"```typescript",
					`import { APIMethods } from "@vkraft/types/methods";`,
					"",
					`type UsersGetReturn = Awaited<ReturnType<APIMethods["users.get"]>>;`,
					"```",
				],
			),
			[
				`import type { CallAPIWithOptionalParams, CallAPI, CallAPIWithoutParams } from "./utils"`,
				`import type * as Params from "./params"`,
				`import type * as Objects from "./objects"`,
				`import type * as Responses from "./responses"`,
				"",
			],
			APIMethods.generateMany(schema.methods, schema.responses, schema.objects),
		],
	},
	{
		name: "errors.d.ts",
		lines: [
			header("This module contains VK API error types", [
				"@example import errors",
				"```typescript",
				`import { VKError, VKErrorCode } from "@vkraft/types/errors";`,
				"```",
			]),
			Errors.generate(schema.errors),
		],
	},
	{
		name: "index.d.ts",
		lines: [
			header("This module re-exports all VK API type modules", [
				"@example import",
				"```typescript",
				`import { VKUsersUserFull, APIMethods, APIMethodReturn } from "@vkraft/types";`,
				"```",
			]),
			[`export type * from "./methods"`],
			[`export type * from "./params"`],
			[`export type * as VKParams from "./params"`],
			[`export type * from "./objects"`],
			[`export type * as VKObjects from "./objects"`],
			[`export type * from "./responses"`],
			[`export type * as VKResponses from "./responses"`],
			[`export type * from "./errors"`],
			[
				`export type { APIMethodParams, APIMethodReturn, VKAPINested, WithFields } from "./utils"`,
			],
		],
	},
	{
		name: "utils.d.ts",
		lines: [
			header("This module contains type-utils for convenient work", [
				"@example import utils",
				"```typescript",
				`import { APIMethodParams, APIMethodReturn } from "@vkraft/types/utils";`,
				"",
				`type UsersGetReturn = APIMethodReturn<"users.get">;`,
				`type UsersGetParams = APIMethodParams<"users.get">;`,
				"```",
			]),
			[
				`import type { APIMethods } from "./methods"`,
				"",
				"export type CallAPI<T, R> = (params: T) => Promise<R>",
				"export type CallAPIWithoutParams<R> = () => Promise<R>",
				"export type CallAPIWithOptionalParams<T, R> = (params?: T) => Promise<R>",
				"",
				...CodeGenerator.generateComment([
					"@example",
					"```typescript",
					`type UsersGetParams = APIMethodParams<"users.get">;`,
					"```",
				]),
				"export type APIMethodParams<APIMethod extends keyof APIMethods> = Parameters<APIMethods[APIMethod]>[0]",
				...CodeGenerator.generateComment([
					"@example",
					"```typescript",
					`type UsersGetReturn = APIMethodReturn<"users.get">;`,
					"```",
				]),
				"export type APIMethodReturn<APIMethod extends keyof APIMethods> = Awaited<ReturnType<APIMethods[APIMethod]>>",
				"",
				...CodeGenerator.generateComment([
					"Nested proxy type for `api.users.get()` style access.",
					"",
					'Splits flat `APIMethods` keys like `"users.get"` into `{ users: { get: ... } }`.',
					"",
					"@example",
					"```typescript",
					"const api = new Proxy({}, { ... }) as VKAPINested;",
					"await api.users.get({ user_ids: [1] });",
					"```",
				]),
				"type ExtractCategory<T extends string> = T extends `${infer C}.${string}` ? C : never",
				`export type VKAPINested = {
	[Cat in ExtractCategory<keyof APIMethods & string>]: {
		[M in keyof APIMethods as M extends \`\${Cat}.\${infer Method}\` ? Method : never]: APIMethods[M]
	}
}`,
				"",
				...CodeGenerator.generateComment([
					"Make properties whose names match the given fields required.",
					"",
					"Use with VK API objects to narrow types based on requested `fields`.",
					"Fields that don't correspond to property names (composite fields like",
					'`"education"`, `"contacts"`) are safely ignored — those properties stay optional.',
					"",
					"@example",
					"```typescript",
					'import type { WithFields, VKUsersUserFull, VKUsersFields } from "@vkraft/types";',
					"",
					'type MyUser = WithFields<VKUsersUserFull, "photo_100" | "sex" | "city">;',
					"// photo_100, sex, city are now required; everything else stays optional",
					"```",
				]),
				"export type WithFields<T, F extends string> = Omit<T, F & keyof T> & Required<Pick<T, F & keyof T>>",
				"",
			],
		],
	},
];

if (!existsSync(OUTPUT_PATH)) await fs.mkdir(OUTPUT_PATH);

for await (const file of files) {
	console.log(`Writing ${file.name}...`);
	await fs.writeFile(
		`${OUTPUT_PATH}/${file.name}`,
		await prettier.format(file.lines.flat().join("\n"), PRETTIER_OPTIONS),
	);
}

console.log("Done!");
