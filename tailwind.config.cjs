/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: colors.stone,
      // footer was otherwise just `bg-primary-500/10`, using default tailwind colors (stone, defined right above this)
      footer: '#d19f87',
      // bg: '#db9877',
      bg: '#e0b49f',
      // header: '#7ec0cb',
      header: '#a9bbbe',
      button: '#835746'
    },
    fontFamily: {
      sans: ['Palatino', 'sans-serif'],
      header: ['DM Serif Text', 'sans-serif']
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '1xl': ['1.35rem', '2rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
    size: {
      '9': {width: '3rem', height: '3rem' }
    },
  },
};
