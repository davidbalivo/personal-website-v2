/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    {
      pattern: /^(p|px|py|pt|pb|pl|pr)-\d+$/,
      pattern: /^size-.+$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9FAFB',
        secondary: '#B0B6C3',
        accent: {
          DEFAULT: '#0296BE',
          light: '#66C5E3',
        },
        background: '#0A0A0A',
      },
      screens: {
        ms: '750px',
        lm: '995px',
      },
    },
  },
  plugins: [],
};
