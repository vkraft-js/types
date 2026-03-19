import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import { EOL } from "node:os";
import { version } from "../package.json";

const VK_SCHEMA_URL =
	"https://raw.githubusercontent.com/VKCOM/vk-api-schema/master/schema.json";

const res = await fetch(VK_SCHEMA_URL);
const schemaRoot = (await res.json()) as { version: string };

const hash = createHash("sha1")
	.update(schemaRoot.version)
	.digest("hex");

const previousHash = await fs.readFile("./hash.txt").then(String).catch(() => "");
if (previousHash === hash) {
	console.log("No changes in VK API Schema");
	process.exit(1);
}

// VK API version is like "5.199" — we use major.minor.patch
const [schemaMajor, schemaMinor] = schemaRoot.version.split(".").map(Number);
const [major, minor] = version.split(".").map(Number);

if (major !== schemaMajor || minor !== schemaMinor) {
	execSync(`npm pkg set version=${schemaMajor}.${schemaMinor}.0`);
} else {
	execSync("npm version patch --no-git-tag-version");
}

await fs.writeFile("./hash.txt", hash);

if (process.env.GITHUB_OUTPUT) {
	const version = String(execSync("npm pkg get version"));

	await fs.appendFile(
		process.env.GITHUB_OUTPUT!,
		`version=${version.replace(/"/gi, "")}${EOL}`,
	);
}
