const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // absolue path
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    // assetModuleFilename: "img/[name]_[hash:6].[ext]", // 打包地址的另种写法
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          // "css-loader",
          {
            loader:'css-loader',
            options:{
                esModule:false
            }
          },
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

        // 加载资源方法1：webpack5 中 assest module type 替代下面各种loader
        type: "asset/resource",
        generator: {
          // 注意这里是filename，loader方式是这样写的属性是name
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          }
        },

        // 加载资源方法2、3：
        // use: 
        // {
        //   // "file-loader" 会独立打包资源，url-loader会转为base64，节省并行访问
        //   loader: "url-loader", 
        //   // url-loader默认对所有文件base64编码
        //   // 若不设置limit将不会产生img文件夹
        //   options: {
        //     // outputPath: "img", // 一般采用下面的name属性
        //     name: "img/[name]_[hash:6].[ext]", // place holder
        //     limit: 100 * 1024,
        //   }
        // }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          // 注意这里是filename，loader方式是这样写的属性是name
          filename: "font/[name]_[hash:6][ext]",
        },
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     outputPath: "font", // 也可省略加到下面name
        //     name: "[name]_[hash:6].[ext]",
        //   }
        // }
      }
    ]
  }
}