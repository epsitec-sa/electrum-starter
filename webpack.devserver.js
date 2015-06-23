'use strict';

var webpack          = require ('webpack');
var WebpackDevServer = require ('webpack-dev-server');
var config           = require ('./webpack.config.js');

new WebpackDevServer (webpack (config), {
  contentBase:        config.output.path,
  publicPath:         config.output.publicPath,
  hot:                true,
  historyApiFallback: true
}).listen (3000, 'localhost', function (err) {
  if (err) {
    console.error (err);
  }

  console.log ('WebpackDevServer listening at localhost:3000');
});
