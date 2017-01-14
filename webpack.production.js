const merge = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(base, {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'buble',
        exclude: /\/node_modules\/(?!(?:vuex-signal))/,
      }
    ]
  },

  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css')
    }
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('build.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
});
