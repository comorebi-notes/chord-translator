module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
    module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0"]
        }
      }
    ]
  }
}
