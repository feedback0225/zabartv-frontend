const nextConfig = {
  i18n: {
    locales: ["ru", "ce"],
    defaultLocale: "ru",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true
          },
        },
      ],
    });

    return config;
  }
};

module.exports = nextConfig