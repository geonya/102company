const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: 'Noto Sans KR',
			},
			colors: {
				base: colors.neutral,
			},
			screens: {
				xs: '300px',
			},
		},
	},

	plugins: [],
};

module.exports = config;
