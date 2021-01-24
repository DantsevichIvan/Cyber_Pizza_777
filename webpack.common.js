const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "./client/index.js")],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js",
  },
  watch: false,
  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/public/index.html",
      publicPath: "/",
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ["file-loader"],
      },
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
