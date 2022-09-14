const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")


const config = {
  entry: "./src/index.js",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
    favicon: "./public/favicon.ico",
    manifest: "./public/manifest.json"
  })],
  devServer: {
    // eslint-disable-next-line no-undef
    static: path.resolve(__dirname, "build"),
    compress: true,
    port: 3000,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
}
module.exports = config