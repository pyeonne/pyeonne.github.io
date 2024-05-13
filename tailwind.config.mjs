/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      mono: 'var(--font-mono)',
      pixel: 'var(--font-pixel)',
    },

    colors: {
      first: 'var(--first-color)',
      black: 'var(--black-color)',
      'black-light': 'var(--black-color-light)',
      white: 'var(--white-color)',
      title: 'var(--title-color)',
      text: 'var(--text-color)',
      'text-light': 'var(--text-color-light)',
      body: 'var(--body-color)',
      container: 'var(--container-color)',
      transparent: 'transparent',
      gray: {
        50: 'var(--gray-50)',
        75: 'var(--gray-75)',
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)',
      },
      selection: 'var(--selection)',
      border: 'var(--border)',
    },
    extend: {
      textColor: {
        heading: 'var(--heading)',
        body: 'var(--text-body)',
        second: 'var(--text-second)',
        disabled: 'var(--text-disabled)',
      },
      backgroundColor: {
        page: 'var(--page-background)',
      },
      height: {
        header: 'var(--header-height)',
      },
      fontSize: {
        biggest: 'var(--biggest-font-size)',
        h1: 'var(--h1-font-size)',
        h2: 'var(--h2-font-size)',
        h3: 'var(--h3-font-size)',
        normal: 'var(--normal-font-size)',
        small: 'var(--small-font-size)',
      },
      dropShadow: {
        text: 'var(--shadow-text)',
      },
      zIndex: {
        tooltip: 'var(--z-tooltip)',
        fixed: 'var(--z-fixed)',
      },
      transitionProperty: {
        visibility: 'visibility',
        margin: 'margin',
        width: 'width',
        'box-shadow': 'box-shadow',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
