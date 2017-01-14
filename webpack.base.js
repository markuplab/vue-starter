const path = require('path');
const autoprefixer = require('autoprefixer');
const svg = require('postcss-inline-svg');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync',
      'vuex-signal'
    ],
    app: [
      './src/app.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue/,
        loader: 'vue-loader'
      }
    ]
  },

  vue: {
    postcss: [
      autoprefixer(),
      svg()
    ],
    cssModules: {
      localIdentName: '[name]__[local]_[hash:base64:5]',
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.build.js')
  ],

  devtool: '#cheap-source-map'
};
