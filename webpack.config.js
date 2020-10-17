/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
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
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 3,
            },
          },
        ],
      },

      {
        test: /\.scss$/,
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
    alias: {
      "~": path.join(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: { path: require.resolve("path-browserify") },
  },
}
