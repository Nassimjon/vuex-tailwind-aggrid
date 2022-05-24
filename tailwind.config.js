module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
			transitionProperty: {
				'width': 'width'
			}
		},
  },
  plugins: [],
}
