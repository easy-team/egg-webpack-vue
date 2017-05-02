'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const EasyWebpack = require('easywebpack');

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
      },
      plugins: [
        // 配置 vue 的环境变量，告诉 vue 是服务端渲染，就不会做耗性能的 dom-diff 操作了
        new webpack.DefinePlugin({
          'process.env.VUE_ENV': '"server"'
        })
      ]
    }, options));
  }
}

module.exports = ConfigOption;
