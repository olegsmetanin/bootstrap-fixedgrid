'use strict';

var webpack = require('webpack');

module.exports = {
  entry: {
  	app:'./src/js/app.js'
  },
  output: {
    path: __dirname + '/dest/',
    filename: 'app.js'
  },
  devtool: "#source-map",
  plugins: [
  ],
  resolve: {
    extensions: ["", ".jsx", ".js", ".json"],
    modulesDirectories: ['node_modules']
  },
  cache: true,
  module: {
    loaders: [
      { test: require.resolve('bootstrap'), loader: 'imports?jQuery=jquery' }
    ]
  }
};