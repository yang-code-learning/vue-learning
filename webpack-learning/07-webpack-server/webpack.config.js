const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  target: "web", // HMR必要的一项设置
  mode: "development",
  // watch: true
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
  },
  devServer: {
    // contentBase: "./", // 找不到的东西就到该目录访问，已过期
    static: true, // 默认就是true，可不设置
    hot: true, // 开启HMR
    host: "localhost", // 0.0.0.0好像用不了
    port: 3000,
    open: true, // 自动打开浏览器
    compress: true, // 开启gzip压缩，本地一般不开
    proxy: {
      // "/api": "http://localhost:888" // 语法糖，则路径是http://localhost:888/api/XXX
      "/api": {
          target: "http://localhost:8888",
          pathRwrite: {
              "^/api": ""
          },
          secure: false, // 默认就是false
          changeOrigin: true, // 修改发送的信息（disguise）
      }
  }
  },
  resolve: {
    extensions: [".js", ".json", "mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "js": path.resolve(__dirname, "src/js"),
    }
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
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { 
    //       from: "./public", 
    //       to: "./",
    //       globOptions: {
    //         ignore: [
    //           "**/index.html"
    //         ] 
    //       }
    //     }
    //   ]
    // }),
    new VueLoaderPlugin()
  ]
}