'use strict';
const merge = require('webpack-merge');
const EasyWebpack = require('oo-webpack');

class ConfigOption extends EasyWebpack.ConfigOption {

  initBase(options) {
    return super.initBase(merge({
      resolve: {
        extensions: ['.vue']
      }
    }, options));
  }

  initClient(options) {
    return super.initClient(merge({
      resolve: {
        alias: {
          vue: 'vue/dist/vue.common.js'
        }
      }
    }, options));
  }

  initServer(options) {
    return super.initServer(merge({
      resolve: {
        alias: {
          vue: 'vue/dist/vue.runtime.common.js'
        }
      }
    }, options));
  }
}

module.exports = ConfigOption;
