/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },

      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 3,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "./src/index.html" }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
}
