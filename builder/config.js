'use strict';
const EasyWebpack = require('easywebpack');
const webpack = EasyWebpack.webpack;
const merge = EasyWebpack.merge;

exports.getLoader = config => {
  return [
    {
      test: /\.vue$/,
      loader: require.resolve('vue-loader'),
      options: EasyWebpack.Loader.getStyleLoaderOption(config)
    },
    {
      test: /\.html$/,
      loader: require.resolve('vue-html-loader')
    }
  ];
};

exports.initBase = options => {
  return merge({
    resolve: {
      extensions: ['.vue']
    }
  }, options);
};

exports.initClient = options => {
  return merge(exports.initBase(options), {
    resolve: {
      alias: {
        vue: 'vue/dist/vue.common.js'
      }
    }
  }, options);
};

exports.initServer = options => {
  return merge(exports.initBase(options), {
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
  }, options);
};
