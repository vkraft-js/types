import { describe, expect, it } from "bun:test";
import { variantToTriggerParams } from "../src/entities/methods";

const commonParams = [
	"user_id",
	"user_ids",
	"owner_id",
	"count",
	"offset",
	"fields",
	"extended",
	"filter",
	"online_mobile",
	"target_uid",
	"target_uids",
	"chat_ids",
	"need_mutual",
	"section",
];

describe("variantToTriggerParams", () => {
	it("returns empty for base 'response'", () => {
		expect(variantToTriggerParams("response", commonParams)).toEqual([]);
	});

	it("maps extendedResponse → extended", () => {
		expect(variantToTriggerParams("extendedResponse", commonParams)).toEqual([
			"extended",
		]);
	});

	it("maps fieldsResponse → fields", () => {
		expect(variantToTriggerParams("fieldsResponse", commonParams)).toEqual([
			"fields",
		]);
	});

	it("maps userIdsResponse → user_ids", () => {
		expect(variantToTriggerParams("userIdsResponse", commonParams)).toEqual([
			"user_ids",
		]);
	});

	it("maps onlineMobileResponse → online_mobile", () => {
		expect(
			variantToTriggerParams("onlineMobileResponse", commonParams),
		).toEqual(["online_mobile"]);
	});

	it("maps targetUidsResponse → target_uids", () => {
		expect(
			variantToTriggerParams("targetUidsResponse", commonParams),
		).toEqual(["target_uids"]);
	});

	it("maps chatIdsResponse → chat_ids", () => {
		expect(variantToTriggerParams("chatIdsResponse", commonParams)).toEqual([
			"chat_ids",
		]);
	});

	it("maps filterResponse → filter", () => {
		expect(variantToTriggerParams("filterResponse", commonParams)).toEqual([
			"filter",
		]);
	});

	it("maps needMutualResponse → need_mutual", () => {
		expect(
			variantToTriggerParams("needMutualResponse", commonParams),
		).toEqual(["need_mutual"]);
	});

	// Combined variants (underscore-separated)
	it("maps userIds_Extended_Response → user_ids + extended", () => {
		expect(
			variantToTriggerParams("userIds_Extended_Response", commonParams),
		).toEqual(["user_ids", "extended"]);
	});

	it("maps chatIds_Fields_Response → chat_ids + fields", () => {
		expect(
			variantToTriggerParams("chatIds_Fields_Response", commonParams),
		).toEqual(["chat_ids", "fields"]);
	});

	// Combined camelCase
	it("maps onlineMobileExtendedResponse → online_mobile + extended", () => {
		expect(
			variantToTriggerParams("onlineMobileExtendedResponse", commonParams),
		).toEqual(["online_mobile", "extended"]);
	});

	// Unknown variant returns empty
	it("returns empty for unresolvable variant", () => {
		expect(
			variantToTriggerParams("deprecatedResponse", commonParams),
		).toEqual([]);
	});

	it("returns empty for multiResponse when no matching param", () => {
		expect(variantToTriggerParams("multiResponse", commonParams)).toEqual(
			[],
		);
	});
});
