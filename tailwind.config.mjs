/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    {
      pattern: /^(md:)?(p|px|py|pt|pb|pl|pr)-\d+$/,
    },
  ],
  theme: {
    screens: {
      custom: '995px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#F9FAFB',
        secondary: '#868D97',
        accent: {
          DEFAULT: '#0296BE',
          light: '#66C5E3',
        },
        background: '#0A0A0A',
      },
    },
  },
  plugins: [],
};
