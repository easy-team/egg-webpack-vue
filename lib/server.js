'use strict';
const EasyWebpack = require('easywebpack');
const baseConfig = require('./config');
class WebpackServerBuilder extends EasyWebpack.WebpackServerBuilder {
  constructor(config, options) {
    super(config, options);
    this.setOption(baseConfig.initServer());
    this.setConfigLoader(baseConfig.getLoader(this.config));
  }
}
module.exports = WebpackServerBuilder;
