'use strict';
const EasyWebpack = require('easywebpack');
const baseConfig = require('./config');
class WebpackClientBuilder extends EasyWebpack.WebpackClientBuilder {
  constructor(config, options) {
    super(config, options);
    this.setOption(baseConfig.initClient());
    this.setLoader(baseConfig.getLoader(config));
  }

  create() {
    const webpackConfig = super.create();
    EasyWebpack.Utils.saveBuildConfig(this.config, webpackConfig);
    return webpackConfig;
  }
}
module.exports = WebpackClientBuilder;
