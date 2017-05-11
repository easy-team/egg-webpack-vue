'use strict';
const EasyWebpack = require('easywebpack');
const baseConfig = require('./config');
const Utils = require('./utils');
class WebpackClientBuilder extends EasyWebpack.WebpackClientBuilder {
  constructor(config, options) {
    super(config, options);
    this.setOption(baseConfig.initClient());
    this.setConfigLoader(baseConfig.getLoader(this.config));
    Utils.clearConfig(this.config);
  }

  create() {
    const webpackConfig = super.create();
    EasyWebpack.Utils.saveBuildConfig(this.config, webpackConfig);
    return webpackConfig;
  }
}
module.exports = WebpackClientBuilder;
