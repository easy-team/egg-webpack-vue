'use strict';
const merge = require('webpack-merge');
const EasyWebpack = require('easywebpack');
const ConfigOption = require('./config/option');
const ConfigPlugin = require('./config/plugin');
const ConfigLoader = require('./config/loader');

class WebpackBuilder extends EasyWebpack.WebpackBuilder {
  constructor(config, options) {
    config = merge(config, options);
    super(config, options, new ConfigOption(config), new ConfigLoader(config), new ConfigPlugin(config));
  }

  create() {
    const webpackConfig = super.create();
    if (!this.config.isServer) {
      EasyWebpack.Utils.saveBuildConfig(this.config, webpackConfig, this.env);
    }
    return webpackConfig;
  }
}
module.exports = WebpackBuilder;
