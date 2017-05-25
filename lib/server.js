'use strict';
const EasyWebpack = require('easywebpack');
const webpack = EasyWebpack.webpack;
const CommonBuilder = require('./common');
class WebpackServerBuilder extends EasyWebpack.WebpackServerBuilder {
  constructor(config) {
    super(config);
    new CommonBuilder(this);
    this.setExtensions('.vue');
    this.setAlias('vue', 'vue/dist/vue.runtime.common.js');
    this.addPlugin(webpack.DefinePlugin, { 'process.env.VUE_ENV': '"server"' });
  }
}
module.exports = WebpackServerBuilder;
