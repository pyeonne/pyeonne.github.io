import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#cbc7c8",
  600: "#71696b",
  900: "#353132",
  950: "#252324",
};
const gray = {
  100: "#f6f6f8",
  200: "#eeedf1",
  300: "#c2c1c6",
  400: "#8c8a93",
  500: "#59575f",
  700: "#39373f",
  800: "#27252d",
  900: "#18171b",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"'],
        mono: ['"IBM Plex Mono"'],
      },
    },
  },
  plugins: [starlightPlugin()],
};
