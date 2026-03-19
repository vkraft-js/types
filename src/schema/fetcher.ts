import type { VKError, VKMethod, VKSchema, VKSchemaProperty } from "./types";

const BASE_RAW = "https://raw.githubusercontent.com/VKCOM/vk-api-schema/master";
const API_BASE = "https://api.github.com/repos/VKCOM/vk-api-schema/contents";

interface GHContent {
	name: string;
	type: "file" | "dir";
	path: string;
}

async function fetchJSON<T>(url: string): Promise<T> {
	const headers: Record<string, string> = {
		"User-Agent": "vkraft-types-generator",
	};
	if (process.env.GITHUB_TOKEN) {
		headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
	}
	const res = await fetch(url, { headers });
	if (!res.ok) {
		throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
	}
	return res.json() as Promise<T>;
}

/**
 * List category directories in the VK API schema repo.
 * Each directory may contain `objects.json`, `methods.json`, `responses.json`.
 */
async function listCategories(): Promise<string[]> {
	const contents = await fetchJSON<GHContent[]>(API_BASE);
	return contents
		.filter(
			(entry) =>
				entry.type === "dir" &&
				!entry.name.startsWith(".") &&
				entry.name !== "node_modules",
		)
		.map((entry) => entry.name);
}

async function fetchOptionalJSON<T>(url: string): Promise<T | null> {
	try {
		return await fetchJSON<T>(url);
	} catch {
		return null;
	}
}

interface SchemaFile {
	definitions?: Record<string, VKSchemaProperty>;
}

interface MethodsFile {
	methods?: VKMethod[];
}

interface ErrorsFile {
	definitions?: Record<string, VKSchemaProperty>;
	errors?: Record<string, VKError>;
}

/**
 * Fetch the entire VK API schema from GitHub.
 *
 * Merges all category directories into flat maps of objects, responses, methods, and errors.
 */
export async function fetchVKSchema(): Promise<VKSchema> {
	// Get schema version
	const schemaRoot = await fetchJSON<{ version: string }>(
		`${BASE_RAW}/schema.json`,
	);
	const version = schemaRoot.version ?? "5.199";

	const categories = await listCategories();

	const objects = new Map<string, VKSchemaProperty>();
	const responses = new Map<string, VKSchemaProperty>();
	const methods: VKMethod[] = [];

	// Fetch all categories in parallel
	const results = await Promise.all(
		categories.map(async (cat) => {
			const [objectsFile, methodsFile, responsesFile] = await Promise.all([
				fetchOptionalJSON<SchemaFile>(`${BASE_RAW}/${cat}/objects.json`),
				fetchOptionalJSON<MethodsFile>(`${BASE_RAW}/${cat}/methods.json`),
				fetchOptionalJSON<SchemaFile>(`${BASE_RAW}/${cat}/responses.json`),
			]);
			return { cat, objectsFile, methodsFile, responsesFile };
		}),
	);

	for (const { objectsFile, methodsFile, responsesFile } of results) {
		if (objectsFile?.definitions) {
			for (const [name, def] of Object.entries(objectsFile.definitions)) {
				objects.set(name, def);
			}
		}
		if (methodsFile?.methods) {
			methods.push(...methodsFile.methods);
		}
		if (responsesFile?.definitions) {
			for (const [name, def] of Object.entries(responsesFile.definitions)) {
				responses.set(name, def);
			}
		}
	}

	// Fetch root errors
	const errorsFile = await fetchOptionalJSON<ErrorsFile>(
		`${BASE_RAW}/errors.json`,
	);
	const errors: VKError[] = [];

	if (errorsFile?.errors) {
		for (const err of Object.values(errorsFile.errors)) {
			errors.push(err);
		}
	}

	return { version, objects, responses, methods, errors };
}
