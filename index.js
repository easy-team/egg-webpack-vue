'use strict';
exports.EasyWebpack = require('easywebpack');
exports.WebpackClientBuilder = require('./builder/client');
exports.WebpackServerBuilder = require('./builder/server');
exports.webpack = exports.EasyWebpack.webpack;
exports.merge = exports.EasyWebpack.merge;
