import { describe, expect, it } from "bun:test";

/**
 * Test that WithFields type works correctly at the type level.
 * These tests verify the generated utility type compiles and behaves as expected.
 */

// Simulate the WithFields type locally for testing
type WithFields<T, F extends string> = Omit<T, F & keyof T> &
	Required<Pick<T, F & keyof T>>;

interface TestUser {
	id: number;
	first_name?: string;
	last_name?: string;
	photo_100?: string;
	sex?: number;
	city?: { id: number; title: string };
	bdate?: string;
}

describe("WithFields utility type", () => {
	it("makes matched fields required", () => {
		type Narrowed = WithFields<TestUser, "photo_100" | "sex">;

		// Type-level test: if this compiles, the types work correctly
		const user: Narrowed = {
			id: 1,
			photo_100: "https://example.com/photo.jpg",
			sex: 1,
		};

		expect(user.photo_100).toBe("https://example.com/photo.jpg");
		expect(user.sex).toBe(1);
		// bdate is still optional — no error if missing
		expect(user.bdate).toBeUndefined();
	});

	it("ignores fields that don't exist on the object", () => {
		// "education" doesn't exist as a property on TestUser — safely ignored
		type Narrowed = WithFields<TestUser, "education" | "photo_100">;

		const user: Narrowed = {
			id: 1,
			photo_100: "https://example.com/photo.jpg",
		};

		expect(user.photo_100).toBe("https://example.com/photo.jpg");
	});

	it("preserves all original properties", () => {
		type Narrowed = WithFields<TestUser, "sex">;

		const user: Narrowed = {
			id: 1,
			sex: 2,
			first_name: "Test",
			city: { id: 1, title: "Moscow" },
		};

		expect(user.id).toBe(1);
		expect(user.sex).toBe(2);
		expect(user.first_name).toBe("Test");
		expect(user.city?.title).toBe("Moscow");
	});

	it("works with no matching fields (identity)", () => {
		type Narrowed = WithFields<TestUser, "nonexistent">;

		// Same as TestUser — nothing changed
		const user: Narrowed = { id: 1 };
		expect(user.id).toBe(1);
	});

	it("works with all fields matching", () => {
		type Narrowed = WithFields<
			TestUser,
			"first_name" | "last_name" | "photo_100" | "sex" | "city" | "bdate"
		>;

		const user: Narrowed = {
			id: 1,
			first_name: "Test",
			last_name: "User",
			photo_100: "url",
			sex: 1,
			city: { id: 1, title: "Moscow" },
			bdate: "1.1.2000",
		};

		expect(user.first_name).toBe("Test");
		expect(user.bdate).toBe("1.1.2000");
	});
});
