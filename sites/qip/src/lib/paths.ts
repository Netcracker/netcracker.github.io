/** Prefix local paths with the GitHub Pages base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path) return base;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return base + path.replace(/^\/+/, '');
}

export const NETCRACKER_PAGES_ROOT = 'https://netcracker.github.io/';
