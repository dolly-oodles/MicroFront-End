const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const { join } = require('path');
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  }
}
