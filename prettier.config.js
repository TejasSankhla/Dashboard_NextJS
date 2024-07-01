const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: ['prettier-plugin-tailwindcss'],
};
