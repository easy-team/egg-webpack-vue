'use strict';
const EasyWebpack = require('easywebpack');
const baseConfig = require('./config');
class WebpackServerBuilder extends EasyWebpack.WebpackServerBuilder {
  constructor(config, options) {
    super(config, options);
    this.config.webpack.extractCss = false;
    this.setOption(baseConfig.initServer());
    this.setLoader(baseConfig.getLoader(this.config));
  }
}
module.exports = WebpackServerBuilder;
