import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('QIP landing exposes the required static routes and assets', () => {
  const required = [
    'sites/qip/src/pages/index.astro',
    'sites/qip/src/pages/use-cases.astro',
    'sites/qip/src/pages/features.astro',
    'sites/qip/src/pages/capabilities.astro',
    'sites/qip/src/pages/deploy.astro',
    'sites/qip/src/pages/404.astro',
    'sites/qip/public/images/source/graph-original.png',
    'sites/qip/public/images/hero-graph.png',
    'sites/qip/public/images/feature-mapper.png',
    'sites/qip/public/images/feature-services.png',
    'sites/qip/public/images/feature-deployments.png',
    'sites/qip/public/images/feature-sessions.png',
    'sites/qip/public/images/feature-vscode.png',
  ];

  for (const path of required) {
    assert.equal(existsSync(new URL(`../${path}`, import.meta.url)), true, `${path} must exist`);
  }
});

test('QIP content and configuration use QIP URLs and the /qip base path', () => {
  const config = read('sites/qip/astro.config.mjs');
  const content = read('sites/qip/src/data/content.ts');

  assert.match(config, /base:\s*['"]\/qip['"]/);
  assert.match(content, /Netcracker\/qubership-integration-platform/);
  assert.doesNotMatch(content, /qubership-apihub|APIHUB/i);
});

test('Pages workflow and product hub publish the QIP landing', () => {
  const workflow = read('.github/workflows/pages.yml');
  const products = read('sites/hub/src/data/products.ts');

  assert.match(workflow, /sites\/qip\/package-lock\.json/);
  assert.match(workflow, /working-directory:\s*sites\/qip/);
  assert.match(workflow, /_site\/qip/);
  assert.match(products, /id:\s*['"]integration['"][\s\S]*status:\s*['"]live['"]/);
  assert.match(products, /landingHref:\s*['"]\/qip\/['"]/);
});

test('persistent navigation replaces event listeners after Astro page transitions', () => {
  const layout = read('sites/qip/src/layouts/Layout.astro');
  assert.match(layout, /AbortController/);
  assert.match(layout, /\.abort\(\)/);
});
