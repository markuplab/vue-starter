const express = require('express');
const webpack = require('webpack');
const compression = require('compression');
const path = require('path');
const config = require('./src/config');
const html = require('./html');

const app = express();

// Development mode
if (!config.isRelease) {
  const dev = require('webpack-dev-middleware');
  const hot = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack.development');
  const compiler = webpack(webpackConfig);

  app.use(dev(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true,
      chunks: false
    }
  }));
  app.use(hot(compiler));
}

app.use(compression());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.get('*', html);

app.listen(process.env.PORT, () => {
  console.log('Application ready');
});
