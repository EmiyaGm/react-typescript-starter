'use strict';

const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'redux-saga',
      'redux-logger'
    ]
  },
  output: {
    path: path.resolve(paths.appBuild, 'vendor'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(paths.appBuild, 'vendor', '[name]-manifest.json'),
      name: '[name]'
    }),
  ]
};
