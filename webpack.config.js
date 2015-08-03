'use strict';

var webpack = require ('webpack');
var path    = require ('path');

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './starter/App.jsx'
  ],
  output: {
    publicPath: 'http://localhost:3000/',
    path: path.resolve ('./starter/'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      e:        path.resolve ('./e/index.js'),
      electrum: path.resolve ('./electrum'),
      arc:      path.resolve ('./electrum-arc'),
      presentation: path.resolve ('./presentation/index.js')
    }
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /electrum.*\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader']},
      {test: /\.png$/, loader: 'url-loader?limit=100000&mimetype=image/png'},
      {test: /\.(ttf|eot|svg|woff)/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NoErrorsPlugin ()
  ]
};
