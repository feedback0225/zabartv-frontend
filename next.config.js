const withSvgr = require("next-plugin-svgr");
const withPlugins = require('next-compose-plugins');
const i18n = require('next-i18next');

const nextConfig = {
  i18n: {
    locales: ["ru", "be"],
    defaultLocale: "ru",
  },
};

module.exports = withPlugins([
  [withSvgr, {
    svgrOptions: {
        icon: true
    },
}],
], nextConfig)