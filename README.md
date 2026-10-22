# netcracker.github.io

Monorepo for the [Netcracker organization GitHub Pages](https://netcracker.github.io/) site: a product hub at the root and per-product static landings under subpaths (for example `/qip/`).

The Qubership APIHUB landing moved to the
[`Netcracker/qubership-apihub`](https://github.com/Netcracker/qubership-apihub/tree/develop/sites/landing) monorepo
(`sites/landing/`). It is published at <https://netcracker.github.io/qubership-apihub/landing/>.
The old `/apihub/*` URLs redirect there: the hub serves one redirect page per old route under
`sites/hub/public/apihub/`, and `sites/hub/src/pages/404.astro` forwards any other `/apihub/*` path.

## Layout

| Path | Description |
|------|-------------|
| `sites/hub/` | Root landing (Astro) — domain cards and navigation |
| `sites/qip/` | Qubership Integration Platform landing (Astro), built with `base: /qip` |

## Local development

```bash
cd sites/hub && npm install && npm run dev
# http://localhost:4321

cd sites/apihub && npm install && npm run dev
# http://localhost:4321 — served under /apihub/

cd sites/qip && npm install && npm run dev
# http://localhost:4321 — served under /qip/
```

## Production build (same as CI)

From each site directory: `npm ci && npm run build`. CI merges `sites/hub/dist/` into the publish root and `sites/qip/dist/` into `qip/`, adds `.nojekyll`, and deploys via GitHub Actions.

## GitHub Pages setup (required)

This repo **must** publish using **GitHub Actions**, not the legacy “Deploy from a branch” flow.

1. In the repository: **Settings → Pages → Build and deployment**.
2. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Pushes to `main` should run the workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) (`Deploy GitHub Pages`), which uploads a pre-built `_site` artifact.

If a failed run shows **“Build with Jekyll”** and paths like `Source: /github/workspace/.`, Pages is still (or also) using branch-based publishing. Jekyll only understands Jekyll/Markdown layouts; it cannot build this Astro monorepo. Switching **Source** to **GitHub Actions** removes that job.

First-time deploy: you may need to allow the `github-pages` environment once (**Settings → Environments → github-pages**) if the org requires approval for deployment environments.

## License

See individual sites and the [LICENSE](LICENSE) file.
