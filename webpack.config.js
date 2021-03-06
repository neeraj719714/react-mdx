const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const remarkPlugin = require('./custom-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  "devtool": "source-map",
  devServer: {
    // compress: true,
    hot: true,
    open: true,
    watchFiles: ["./src/**/*.js", "./src/**/*.html"],
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.mdx?$/,
        use: ["babel-loader",{
          loader:"@mdx-js/loader",
          options:{
            remarkPlugins: [remarkPlugin],
          }
        }
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
