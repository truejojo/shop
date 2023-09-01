const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  },
};
