'use strict';
const EasyWebpack = require('oo-webpack');
class ConfigLoader extends EasyWebpack.ConfigLoader {
  constructor(config) {
    super(config);
    this.configLoaders = this.configLoaders.concat([
      {
        enable: true,
        client: true,
        server: true,
        env: ['dev', 'test', 'prod'],
        loader: {
          test: /\.vue$/,
          loader: require.resolve('vue-loader'),
          options: EasyWebpack.Loader.getStyleLoaderOption(config)
        }
      },
      {
        enable: true,
        client: true,
        server: true,
        env: ['dev', 'test', 'prod'],
        loader: {
          test: /\.html$/,
          loader: require.resolve('vue-html-loader')
        }
      }
    ]);
  }
}

module.exports = ConfigLoader;

