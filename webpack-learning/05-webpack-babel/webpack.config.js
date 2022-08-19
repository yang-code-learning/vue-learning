const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader", 
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader", 
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          }
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader", // 配置了babel config就不用写下面一坨了
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     // plugins: [
        //     //   "@babel/plugin-transform-arrow-functions",
        //     //   "@babel/plugin-transform-block-scoping",
        //     // ]
        //     preset: [
        //       "@babel/preset-env",
        //     ]
        //   }
        // }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "./public", 
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ] 
          }
        }
      ]
    }),
  ]
}