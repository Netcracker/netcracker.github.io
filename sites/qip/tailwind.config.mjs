/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,ts}'],
  theme: {
    extend: {
      colors: {
        brand: { blue: '#1677ff', violet: '#7c3aed', mint: '#9fdfd2', yellow: '#fff19a' },
        surface: { DEFAULT: '#0a0f1e', card: '#0f172a', border: '#1e293b', hover: '#162032' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
