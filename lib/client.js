'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');

class WebpackClientBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setAlias('vue', 'vue/dist/vue.common.js');
    this.setManifest(true);
  }

  create() {
    const webpackConfig = super.create();
    EasyWebpack.Utils.saveBuildConfig(this.config, webpackConfig);
    return webpackConfig;
  }
}
module.exports = WebpackClientBuilder;
