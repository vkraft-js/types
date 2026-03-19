export class CodeGenerator {
	static generateComment(value: string | string[]) {
		const valueLines = typeof value === "string" ? value.split("\n") : value;

		return ["/**", valueLines.map((line) => `* ${line}`).join("\n"), "*/"];
	}

	static generateUnionType(
		name: string,
		enumeration: (string | number)[],
		type: "number" | "string" = "string",
	) {
		return `export type ${name} = ${enumeration
			.map((value) => (type === "number" ? `${value}` : `"${value}"`))
			.join(" | ")}`;
	}
}

export class TextEditor {
	static uppercaseFirstLetter(text: string) {
		return text.at(0)?.toUpperCase() + text.slice(1);
	}

	static fromSnakeToCamelCase(text: string) {
		return text
			.split("_")
			.reduce(
				(prev, current, i) =>
					i === 0 ? current : prev + TextEditor.uppercaseFirstLetter(current),
				"",
			);
	}

	/**
	 * Convert a snake_case definition name to PascalCase.
	 * `"users_user_full"` → `"UsersUserFull"`
	 */
	static snakeToPascalCase(text: string) {
		return text
			.split("_")
			.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
			.join("");
	}

	/**
	 * Convert a VK method name (dot-separated) to PascalCase.
	 * `"users.get"` → `"UsersGet"`
	 */
	static methodToPascalCase(name: string) {
		return name
			.split(".")
			.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
			.join("");
	}
}

export function generateHeader(version: string) {
	return (description: string, additional: string[] = []) => [
		"/**",
		"* @module",
		"* ",
		`* ${description}`,
		"* ",
		...additional.map((x) => `* ${x}`),
		"* ",
		`* Based on VK API v${version}`,
		"* ",
		`* Generated at ${new Date().toLocaleString(
			"ru",
		)} using [types](https://github.com/vkraft/types) generator`,
		"*/",
		"",
		"",
	];
}
