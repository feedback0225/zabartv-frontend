const withSvgr = require("next-plugin-svgr");
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  i18n: {
    locales: ["ru", "ce"],
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