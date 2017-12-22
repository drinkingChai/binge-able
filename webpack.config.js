const path = require('path'),
      webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        use: {
          loader: 'babel-loader',
          options: { extends: path.join(__dirname, '.babelrc') }
        },
        exclude: /node_modules/,
      }
    ]
  }
}
