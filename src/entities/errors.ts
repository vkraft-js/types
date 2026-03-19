import { CodeGenerator } from "../helpers";
import type { VKError } from "../schema/types";

export class Errors {
	static generate(errors: VKError[]): string[] {
		if (errors.length === 0) return [];

		const errorCodes = errors.map((e) => e.code);

		const lines: string[] = [
			...CodeGenerator.generateComment("All known VK API error codes."),
			`export type VKErrorCode = ${errorCodes.join(" | ")}`,
			"",
			...CodeGenerator.generateComment("VK API error response."),
			"export interface VKError {",
			...CodeGenerator.generateComment("Error code"),
			"error_code: VKErrorCode",
			...CodeGenerator.generateComment("Error message"),
			"error_msg: string",
			...CodeGenerator.generateComment(
				"Request parameters that caused the error",
			),
			"request_params: { key: string; value: string }[]",
			"}",
			"",
		];

		// Generate individual error descriptions as a const enum-like map
		lines.push(
			...CodeGenerator.generateComment(
				"Map of VK API error codes to descriptions.",
			),
			"export interface VKErrorDescriptions {",
		);

		for (const error of errors) {
			const desc = error.description.replace(/"/g, '\\"');
			lines.push(
				...CodeGenerator.generateComment(
					`${desc}${error.global ? " (global)" : ""}`,
				),
				`${error.code}: "${desc}"`,
			);
		}

		lines.push("}", "");

		return lines;
	}
}
