const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // absolue path
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // regex 匹配规则
        // 1. 语法糖
        // loader: "css-loader"

        // 2. 完整写法
        use: [
          // {loader: "css-loader"} //或简写直接
          // 从后往前加载
          "style-loader", // 插入style
          "css-loader", // 加载css文件到页面
          "postcss-loader",  // 加载postcss，有独立配置文件局部需要下面一大串
          // {
          //   loader: "postcss-loader",  // 加载postcss
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require("autoprefixer"),
          //       ],
          //     },
          //   },
          // },
        ]
      },
      {
        test: /\.(less|scss)$/, // 可识别多类型
        use: [
          "style-loader", 
          "css-loader",
          "less-loader" // 转换为css
        ]
      }
    ]
  }
}