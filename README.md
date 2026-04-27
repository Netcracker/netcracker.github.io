# netcracker.github.io

Monorepo for the [Netcracker organization GitHub Pages](https://netcracker.github.io/) site: a product hub at the root and per-product static landings under subpaths (for example `/apihub/`).

## Layout

| Path | Description |
|------|-------------|
| `sites/hub/` | Root landing (Astro) — domain cards and navigation |
| `sites/apihub/` | Qubership APIHUB product landing (Astro), built with `base: /apihub` |

## Local development

```bash
cd sites/hub && npm install && npm run dev
# http://localhost:4321

cd sites/apihub && npm install && npm run dev
# http://localhost:4321 — served under /apihub/
```

## Production build (same as CI)

From each site directory: `npm ci && npm run build`. CI merges `sites/hub/dist/` into the publish root and `sites/apihub/dist/` into `apihub/`, adds `.nojekyll`, and deploys via GitHub Actions.

## License

See individual sites; APIHUB landing is Apache 2.0 aligned with [qubership-apihub](https://github.com/Netcracker/qubership-apihub).
