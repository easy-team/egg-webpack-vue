'use strict';
const EasyWebpack = require('easywebpack');
const Utils = require('./utils');
const CommonBuilder = require('./common');
class WebpackClientBuilder extends EasyWebpack.WebpackClientBuilder {
  constructor(config) {
    super(config);
    new CommonBuilder(this);
    this.setExtensions('.vue');
    this.setAlias('vue', 'vue/dist/vue.common.js');
    Utils.clearConfig(this.config);
  }

  create() {
    const webpackConfig = super.create();
    EasyWebpack.Utils.saveBuildConfig(this.config, webpackConfig);
    return webpackConfig;
  }
}
module.exports = WebpackClientBuilder;
