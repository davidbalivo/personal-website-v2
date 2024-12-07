/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,json}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
