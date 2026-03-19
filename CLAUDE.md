# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun generate          # Run the generator — writes to out/
bun lint              # Biome lint check on src/
bun lint:fix          # Auto-fix lint issues
bun cicd              # Hash-check schema, bump version, write GITHUB_OUTPUT (CI use)
bun jsr               # Prepare JSR publish: sync version + copy out/*.d.ts → source/*.ts
bun test              # Run tests
```

## Architecture

This repo generates TypeScript declaration files for the VK API. Nothing is hand-authored in `out/` — every `.d.ts` there is produced by `bun generate`.

### Generator pipeline

```
fetchVKSchema()                 ← fetches from VKCOM/vk-api-schema on GitHub
        │
        ▼
src/index.ts                    ← orchestrates everything
  └─ calls entities/
        ├─ Objects.generateMany()     → out/objects.d.ts
        ├─ Responses.generateMany()   → out/responses.d.ts
        ├─ Params.generateMany()      → out/params.d.ts
        ├─ APIMethods.generateMany()  → out/methods.d.ts
        ├─ Errors.generate()          → out/errors.d.ts
        └─ (header/utils built inline)
```

### Key files

-   **`src/index.ts`** — entry point. Fetches the VK schema, drives file generation.
-   **`src/schema/fetcher.ts`** — fetches the VK API schema from GitHub (VKCOM/vk-api-schema).
-   **`src/schema/types.ts`** — TypeScript interfaces for the raw VK schema structures.
-   **`src/schema/resolver.ts`** — `$ref` parsing and resolution, definition name to PascalCase conversion.
-   **`src/schema/allof-merger.ts`** — flattens `allOf` inheritance chains into merged properties.
-   **`src/entities/properties.ts`** — `schemaToType(prop, ctx)` converts a VK schema property to a TypeScript type string.
-   **`src/entities/objects.ts`** — generates VK object interfaces/types with `VK` prefix.
-   **`src/entities/responses.ts`** — generates response types, unwrapping the `response` wrapper.
-   **`src/entities/methods.ts`** — generates the `APIMethods` interface with overloads for multi-response methods.
-   **`src/entities/params.ts`** — generates `*Params` interfaces for method parameters.
-   **`src/entities/errors.ts`** — generates error code types and error interface.
-   **`src/types.ts`** — `TObjectType = "object" | "method" | "response"` used throughout the entities.

### CI/CD

`scripts/cicd.ts` fetches the VK schema version from GitHub, hashes it, and compares against `hash.txt`. If unchanged, it exits non-zero (no release). If changed, it bumps the package version. The GitHub Actions workflow (`.github/workflows/update-types.yml`) runs hourly.
