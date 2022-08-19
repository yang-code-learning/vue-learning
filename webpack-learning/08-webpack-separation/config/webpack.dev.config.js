const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: true,
    hot: true,
    host: "localhost",
    port: 3000,
    open: true,
    // compress: true,
    proxy: {
      "/api": {
          target: "http://localhost:8888",
          pathRwrite: {
              "^/api": ""
          },
          secure: false,
          changeOrigin: true,
      }
    }
  },
});