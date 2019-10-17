const path = require("path");

module.exports = {
  entry: {
    "colour": "./src/colour.ts"
  },
  output: {
    filename: "[name].js",
    library: "colour-contrast",
    libraryTarget: "umd",
    path: path.resolve(__dirname),
    globalObject: "this"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [],
  devServer: {
    open: true
  },
  devtool: "source-map"
}