const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "index.html",
})

module.exports = {
  performance: {
    maxEntrypointSize: 700000,
    maxAssetSize: 700000,
  },
  entry: __dirname + "/src/index.tsx", //ビルドするファイル
  output: {
    path: __dirname + '/dist', //ビルドしたファイルを吐き出す場所
    filename: 'bundle.js' //ビルドした後のファイル名
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,         // 拡張子 .ts のファイルを
        use: 'ts-loader',         // ts-loaderでトランスパイルする
        exclude: /node_modules/,  // ただし外部ライブラリは除く
      },
      {
        test: /\.ts$/,         // 拡張子 .ts のファイルを
        use: 'ts-loader',         // ts-loaderでトランスパイルする
        exclude: /node_modules/,  // ただし外部ライブラリは除く
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      }
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: [
      '.tsx', '.js', '.ts'
    ]
  },
  mode: 'development',
  //   module: {
  //   loaders: [
  //           //loader
  //     ]
  // }
  devServer: {
    // webpack-dev-serverの公開フォルダ
    // contentBase: __dirname+'/dist',
    open: true,//ブラウザ立ち上げを自動化
    static: {
      directory: __dirname + '/public',
    },

    host: 'localhost',
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
  },
  plugins: [
    // new HtmlWebpackPlugin()
    htmlPlugin
  ],
  //   const htmlPlugin = new HtmlWebpackPlugin({
  //     template: "./public/index.html",
  //     filename: "index.html",
  // })
};