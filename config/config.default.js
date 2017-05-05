'use strict';
const path = require('path');
module.exports = app => {
  const config = {};
  config.webpackvue = {
    baseDir: app.baseDir,
    build: {
      port: 8090,
      path: path.join(app.baseDir, 'public'),
      publicPath: '/public/',
      prefix: 'static',
      entry: [path.join(app.baseDir, 'app/web/page')],
      commonsChunk: ['vendor'],
      manifest: path.join(app.baseDir, 'config/manifest.json'),
      buildConfig: path.join(app.baseDir, 'config/buildConfig.json')
    },
    webpack: {
      styleLoader: 'vue-style-loader',
      extractCss: true,
      loaderOption: {
        sass: {
          includePaths: [path.join(app.baseDir, 'app/web/asset/style')]
        }
      },
      pluginOption: {}
    }
  };

  return config;
};
