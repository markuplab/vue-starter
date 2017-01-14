const config = require('./src/config');

module.exports = (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Vue Boilerplate</title>
    <link rel="stylesheet" href="/assets/core.css">
    ${ config.isRelease ? '<link rel="stylesheet" href="/build/build.css">' : '' }
  </head>
  <body>
    <div id="app"></div>
    
    <script>var CONFIG = ${JSON.stringify(config)};</script>
    <script src="/build/vendor.build.js"></script>
    <script src="/build/build.js"></script>
  </body>
</html>`);
};
