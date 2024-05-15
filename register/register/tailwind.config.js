module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-prefixer')({
      prefix: 'cr-',
      separator: '-', 
    }),
    require('mini-css-extract-plugin').loader
  ],
};
