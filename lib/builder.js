'use strict';
const EasyWebpack = require('oo-webpack');
const ConfigOption = require('./config/option');
const ConfigPlugin = require('./config/plugin');
const ConfigLoader = require('./config/loader');

class WebpackBuilder extends EasyWebpack.WebpackBuilder {
  constructor(config) {
    super(config, new ConfigOption(config), new ConfigLoader(config), new ConfigPlugin(config))
  }
}
module.exports = WebpackBuilder;
