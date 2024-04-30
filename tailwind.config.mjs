/** @type {import('tailwindcss').Config} */
module.exports = {
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
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      lg: '1150px',
    },
    extend: {
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
      },
      textColor: {
        heading: 'var(--heading)',
        body: 'var(--text-body)',
        disabled: 'var(--text-disabled)',
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
