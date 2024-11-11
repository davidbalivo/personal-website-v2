/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#F9FAFB',
				secondary: '#A7B3C4',
				accent: {
					DEFAULT: '#0296BE',
					light:  '#66C5E3',
				},
				background: '#0A0A0A',
			  },
		},
	},
	plugins: [],
}
