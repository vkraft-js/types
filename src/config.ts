import type { Options } from "prettier";

export const OUTPUT_PATH = "./out";

export const OBJECTS_PREFIX = "VK";

export const VK_API_DOCS = "https://dev.vk.com/method";

export const PRETTIER_OPTIONS: Options = {
	tabWidth: 4,
	parser: "typescript",
	endOfLine: "auto",
	semi: false,
};
