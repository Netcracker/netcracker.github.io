---
name: qubership-apihub-landing-refresh
description: >-
  Refresh the Qubership APIHUB product landing content from the web (GitHub
  releases, docs, wiki). Use when the user asks to update or sync APIHUB landing
  copy, versions, release notes, or stats from public sources.
---

# Qubership APIHUB landing — refresh content from the web

## Scope

This applies to **`sites/apihub/`** in the `netcracker.github.io` monorepo (static Astro site deployed under `https://netcracker.github.io/apihub/`).

## Primary sources (fetch from the network)

1. **Releases:** [qubership-apihub releases](https://github.com/Netcracker/qubership-apihub/releases) — latest tag, dates, release notes.
2. **Docs (links and anchors):** [qubership-apihub `docs/`](https://github.com/Netcracker/qubership-apihub/tree/main/docs) — `installation-guide.md`, `user-guide.md`, `admin-guide.md` (paths in GitHub `blob/main` URLs must stay valid).
3. **Wiki / diagrams (if referenced):** [qubership-apihub wiki](https://github.com/Netcracker/qubership-apihub/wiki) and raw wiki images already referenced in `content.ts` (`WIKI_RAW_BASE`).

Do **not** invent version numbers or dates. If a page cannot be reached, say so and leave values unchanged or mark them explicitly as needing manual check.

## Files to edit (in order of impact)

| Area | File(s) |
|------|---------|
| Nav URLs, stats line (“Latest Release”), feature image paths, pillars, section cards | `sites/apihub/src/data/content.ts` |
| Hero badges / hardcoded version snippets on pages | `sites/apihub/src/pages/index.astro` (and other `src/pages/*.astro` if they duplicate version text) |
| Release timeline body | `sites/apihub/src/content/releases/*.md` |
| Persona / use-case cards | `sites/apihub/src/content/use-cases/*.md` |

When updating internal routes in data, keep using **`withBase(...)`** from `sites/apihub/src/lib/paths.ts` for any path under the APIHUB subsite (do not revert to root-absolute `/...` links).

## Verification

1. From `sites/apihub/`: `npm run build` — must succeed.
2. Spot-check that key **external** links still return success (or open in browser).
3. If you change `base` or `site` in `astro.config.mjs`, stop and ask — that affects all URLs.

## Tone and structure

Keep existing marketing tone, section order, and Tailwind layout patterns. Prefer small, factual edits (versions, dates, bullet highlights) over rewrites.
