const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/plantuml.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "plantuml.js",
    library: "RevealPlantUML",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
}