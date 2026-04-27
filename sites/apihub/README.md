# Qubership APIHUB Landing Page

Static landing site for [Qubership APIHUB](https://github.com/Netcracker/qubership-apihub) — the open source API management platform.

**Stack:** [Astro](https://astro.build/) (static output) + [Tailwind CSS](https://tailwindcss.com/) + [nginx](https://nginx.org/) (production container)

---

## Quick Start

### Local Development

```bash
npm install
npm run dev
# → http://localhost:4321
```

### Build for Production

```bash
npm run build
# Output: ./dist/
```

### Docker (single container)

```bash
# Build and run
docker compose up --build

# Or just run (pulls pre-built image)
docker compose up -d

# Custom port (default: 8090)
PORT=8080 docker compose up -d
```

The site will be available at `http://localhost:8090`.

### Docker: Astro dev server (live reload)

```bash
docker compose --profile dev up dev-server
# → http://localhost:4321
```

---

## Project Structure

```
qubership-apihub-landing/
├── src/
│   ├── data/content.ts          ← Site URLs, nav, shared copy (stats, features list, etc.)
│   ├── layouts/Layout.astro     ← Base layout, header, footer, global styles
│   ├── pages/                   ← One `.astro` file per route (static HTML)
│   └── content/                 ← Astro content collections (Markdown)
│       ├── config.ts
│       ├── releases/            ← Release notes for /releases
│       └── use-cases/           ← Persona cards for /use-cases
├── public/
│   ├── images/                  ← Static images (favicon, hero, feature screenshots, …)
│   └── favicon.svg
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

---

## Editing Content

Everything is in the repository — no CMS. Typical locations:

| What | Where |
|------|--------|
| Links, stats, feature carousel data, wiki image URLs | `src/data/content.ts` |
| Page copy and layout | `src/pages/*.astro` |
| Release timeline | `src/content/releases/*.md` |
| Use-case personas | `src/content/use-cases/*.md` |
| New static assets | `public/images/` (reference as `/images/...` in pages) |

After changes: `npm run build` (or rebuild the Docker image).

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8090` | Host port mapped to the nginx container |
| `VERSION` | `dev` | Docker label for the image |
| `DEV_PORT` | `4321` | Port for the `dev-server` service (`--profile dev`) |

---

## License

Apache 2.0 — same as Qubership APIHUB.
