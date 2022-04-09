const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.css",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.css",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
