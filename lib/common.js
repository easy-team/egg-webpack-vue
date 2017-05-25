'use strict';
const EasyWebpack = require('easywebpack');

class WebpackCommonBuilder {
  constructor(builder) {
    this.builder = builder;
    this.builder.addLoader(/\.vue$/, 'vue-loader', () => {
      const styleConfig = {
        styleLoaderName: 'vue-style-loader',
        extractCss: this.builder.extractCss
      };
      return {
        options: EasyWebpack.Loader.getStyleLoaderOption(styleConfig)
      };
    });
    this.builder.addLoader(/\.html$/, 'vue-html-loader');
  }
}
module.exports = WebpackCommonBuilder;
