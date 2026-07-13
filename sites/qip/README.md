# Qubership Integration Platform Landing

Static product landing for [Qubership Integration Platform](https://github.com/Netcracker/qubership-integration-platform), built with Astro and Tailwind CSS.

## Local development

```bash
npm ci
npm run dev
```

Astro serves the site under `/qip/`. Build the production output with `npm run build`; generated files are written to `dist/`.

## Content and screenshots

- Shared product copy, navigation, and external URLs: `src/data/content.ts`
- Page layouts: `src/pages/`
- Production screenshots: `public/images/`
- Unmodified screenshot sources: `public/images/source/`

Product UI images must come from the real QIP application. Cropping, sharpening, and subtle presentation effects are allowed, but UI labels and product behavior must not be reconstructed or altered.
