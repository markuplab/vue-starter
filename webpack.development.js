const merge = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');

base.entry.app = [
  ...base.entry.app,
  './hot'
];

module.exports = merge(base, {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
