const path = require("path");
const fs = require("fs");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction =
  process.argv[process.argv.indexOf("--mode") + 1] === "production";
const config = {
  entry: ["./src/index.css"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${isProduction ? "rene.min.css" : "rene.css"}`,
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          () => {
            fs.unlinkSync(path.resolve(__dirname, "dist/main.js"));
          },
        ],
      },
    }),
  ],
};

module.exports = config;
