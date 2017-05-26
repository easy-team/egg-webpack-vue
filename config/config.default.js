'use strict';
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const defaultWebpackConfig = require('../lib/config');
module.exports = app => {
  const config = {};
  config.webpackvue = EasyWebpack.getConfig(merge({
    baseDir: app.baseDir
  }, defaultWebpackConfig));

  return config;
};
