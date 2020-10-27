/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const HtmlWebPackPlugin = require("html-webpack-plugin")

const plugins = [
  new HtmlWebPackPlugin({ template: "./src/index.html" }),
  new webpack.EnvironmentPlugin(["NODE_ENV"]),
].concat(process.env.NODE_ENV === "analyze" ? [new BundleAnalyzerPlugin()] : [])

const mode = process.env.NODE_ENV === "dev" ? "development" : "production"

module.exports = {
  mode,
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
              sourceMap: mode === "development",
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/inline",
      },
    ],
  },
  plugins,
  resolve: {
    alias: {
      "~": path.join(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: { path: require.resolve("path-browserify") },
  },
  devServer: {
    port: 8080,
  },
}
