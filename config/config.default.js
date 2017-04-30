'use strict';
const path = require('path');
/**
 * webpack-vue default config
 * @member Config#webpack-vue
 * @property {String} SOME_KEY - some description
 */
exports.webpackvue = {
  baseDir: __dirname,
  build: {
    path: 'public',
    publicPath: '/public/',
    prefix: 'static',
    entry: [path.join(__dirname, 'build')],
    commonsChunk: ['vendor']
  },
  webpack: {
    styleLoader: 'style-loader',
    loaderOption: {
      sass: {
        includePaths: [path.resolve(__dirname, 'app/web/asset/style')]
      }
    },
    pluginOption: {
      ExtractTextPlugin: {
        extract: true
      }
    }
  }
};
