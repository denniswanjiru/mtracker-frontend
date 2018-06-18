const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/app.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    compress: true,
    port: 3000,
    stats: "errors-only",
    open: true
  },
  devtool: "inline-source-map"
};
