'use strict';
const EasyWebpack = require('easywebpack');

module.exports = app => {
  const config = {};
  config.webpackvue = EasyWebpack.getConfig({
    baseDir: app.baseDir
  });

  return config;
};
