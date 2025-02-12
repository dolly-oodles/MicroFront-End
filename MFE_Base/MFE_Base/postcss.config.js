const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}