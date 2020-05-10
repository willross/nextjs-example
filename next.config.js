const path = require("path");

module.exports = {
  webpack: (config, options) => {
    // Create an alias for i18n
    config.resolve.alias["i18n"] = path.join(__dirname, "i18n");

    // This reproduces the functionality of the initially provided .babelrc, with the hardcoded locale.
    // However, I haven't been able to make it work for multiple locales.

    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "inline-i18n-messages",
                {
                  locale: "en",
                  extractKeysType: "formatjs",
                  getMessageFile: "./i18n/getMessage.js",
                  addMessagesSource: "i18n/addMessages.js",
                },
              ],
            ],
          },
        },
      ],
    });

    return config;
  },
};
