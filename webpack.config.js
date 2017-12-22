module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js"
  },
    module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: `${__dirname}/src/`,
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0"]
        }
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/public`
  }
}
