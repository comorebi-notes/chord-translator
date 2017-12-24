const webpack = require("webpack")

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: "chordTranslator.js"
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      parallel:   true,
      sourceMap:  false,
      mangle:     false,
      uglifyOptions: {
        mangle:   false
      },
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ],
  devServer: {
    contentBase: `${__dirname}/dist`
  }
}
