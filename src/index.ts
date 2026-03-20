import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import prettier from "prettier";
import { OBJECTS_PREFIX, OUTPUT_PATH, PRETTIER_OPTIONS } from "./config";
import { APIMethods, Errors, Objects, Params, Responses } from "./entities";
import { CodeGenerator, generateHeader } from "./helpers";
import { defNameToPascal } from "./schema/resolver";
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Events whose object type should be wrapped with Required (schema marks fields optional but they're always present) */
const REQUIRED_EVENTS = new Set(["message_new"]);

function generateCallbackEventMap(
	objects: Map<string, unknown>,
): string[] {
	const callbackType = schema.objects.get("callback_type") as
		| { enum?: string[] }
		| undefined;
	if (!callbackType?.enum) return [];

	const lines: string[] = [
		"",
		...CodeGenerator.generateComment([
			"Maps VK callback event type strings to their corresponding object types.",
			"",
			"Enables discriminated union narrowing:",
			"```typescript",
			'if (event.type === "message_new") {',
			"    event.object.message; // fully typed",
			"}",
			"```",
		]),
		"export interface VKCallbackEventMap {",
	];

	for (const eventType of callbackType.enum) {
		const defName = `callback_${eventType}`;
		if (!objects.has(defName)) {
			lines.push(`    ${eventType}: Record<string, unknown>`);
			continue;
		}
		const ref = `Objects.${OBJECTS_PREFIX}${defNameToPascal(defName)}`;
		const typeName = REQUIRED_EVENTS.has(eventType) ? `Required<${ref}>` : ref;
		lines.push(`    ${eventType}: ${typeName}`);
	}

	lines.push("}", "");
	return lines;
}

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
					`type UsersGetReturn = Awaited<ReturnType<APIMethods["users"]["get"]>>;`,
					"```",
				],
			),
			[
				`import type { CallAPIWithOptionalParams, CallAPI, CallAPIWithoutParams, WithFields } from "./utils"`,
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
				`export type { APIMethod, APIMethodParams, APIMethodReturn, VKAPINested, VKCallbackEventMap, WithFields } from "./utils"`,
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
				`import type * as Objects from "./objects"`,
				"",
				"export type CallAPI<T, R> = (params: T) => Promise<R>",
				"export type CallAPIWithoutParams<R> = () => Promise<R>",
				"export type CallAPIWithOptionalParams<T, R> = (params?: T) => Promise<R>",
				"",
				...CodeGenerator.generateComment([
					"Resolve a dot-notation method name to its call signature.",
					"",
					"@example",
					"```typescript",
					`type UsersGet = APIMethod<"users.get">;`,
					"```",
				]),
				"export type APIMethod<T extends string> = T extends `${infer Cat}.${infer Method}` ? Cat extends keyof APIMethods ? Method extends keyof APIMethods[Cat] ? APIMethods[Cat][Method] : never : never : never",
				"",
				...CodeGenerator.generateComment([
					"@example",
					"```typescript",
					`type UsersGetParams = APIMethodParams<"users.get">;`,
					"```",
				]),
				"export type APIMethodParams<T extends string> = Parameters<APIMethod<T>>[0]",
				...CodeGenerator.generateComment([
					"@example",
					"```typescript",
					`type UsersGetReturn = APIMethodReturn<"users.get">;`,
					"```",
				]),
				"export type APIMethodReturn<T extends string> = Awaited<ReturnType<APIMethod<T>>>",
				"",
				...CodeGenerator.generateComment([
					"Nested proxy type for `api.users.get()` style access.",
					"",
					"APIMethods is already natively nested, so this is a simple alias.",
					"",
					"@example",
					"```typescript",
					"const api = new Proxy({}, { ... }) as VKAPINested;",
					"await api.users.get({ user_ids: [1] });",
					"```",
				]),
				"export type VKAPINested = APIMethods",
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
				...generateCallbackEventMap(schema.objects),
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
