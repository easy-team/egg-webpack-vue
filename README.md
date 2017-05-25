# egg-webpack-vue

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-webpack-vue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-webpack-vue
[travis-image]: https://img.shields.io/travis/eggjs/egg-webpack-vue.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-webpack-vue
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-webpack-vue.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-webpack-vue?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-webpack-vue.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-webpack-vue
[snyk-image]: https://snyk.io/test/npm/egg-webpack-vue/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-webpack-vue
[download-image]: https://img.shields.io/npm/dm/egg-webpack-vue.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-webpack-vue

egg webpack building solution for vue

## Install

```bash
$ npm i egg-webpack-vue --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.webpackvue = {
  enable: true,
  package: 'egg-webpack-vue',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.webpackvue = {
  baseDir, // project root dir
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

- webpack vue common config `config.js`

```js
const path = require('path');
exports.getOption = config => {
  return {
    entry: {
      vendor: ['vue']
    },
    resolve: {
      alias: {
        asset: path.join(config.baseDir, 'app/web/asset'),
        app: path.join(config.baseDir, 'app/web/framework/vue/app'),
        component: path.join(config.baseDir, 'app/web/component'),
        framework: path.join(config.baseDir, 'app/web/framework'),
        store: path.join(config.baseDir, 'app/web/store')
      }
    }
  };
};
````

- webpack vue client build config `build/client.js`

```js
const EggWebpackVue = require('egg-webpack-vue');
const baseConfig = require('./config');
class ClientBuilder extends EggWebpackVue.WebpackClientBuilder {
  constructor(config, options) {
    super(config, options);
    this.setOption(baseConfig.getOption(config));
    if (!this.prod) {
      this.setOption({
        output: {
          publicPath: EggWebpackVue.EasyWebpack.Utils.getDevPublicPath(config, 2)
        },
        devtool: 'eval-source-map',
        performance: {
          hints: false
        }
      });
    }
  }
}
module.exports = new ClientBuilder(exports.webpackvue).create();
```

- webpack vue server build config `build/server.js`

```js
const path = require('path');
const fs = require('fs');
const EggWebpackVue = require('egg-webpack-vue');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const webpackConfig = require('../config/webpackConfig');
const baseConfig = require('./config');
class ServerBuilder extends EggWebpackVue.WebpackServerBuilder {
  constructor(config, options) {
    super(config, options);
    this.setOption(baseConfig.getOption(config));
    this.setLoader({
      test: /layout\/standard\/index\.js$/,
      loader: StringReplacePlugin.replace({
        replacements: [
          {
            pattern: /["|'](.*\.html)\?inline["|']/gi,
            replacement(match, p1, offset, string) {
              const filePath = path.join(config.baseDir, p1);
              const content = fs.readFileSync(filePath, 'utf8').replace(/'/g, '"').replace(/[\r\n]/g, '');
              return "'" + content + "'";
            }
          }
        ]
      })
    }, true);
    this.setPlugin(new StringReplacePlugin(), true);
  }
}
module.exports = new ServerBuilder(exports.webpackvue).create();

```

- command config `build/build.js`

```js
const EggWebpackVue = require('egg-webpack-vue');
const clientConfig = require('./client');
const serverConfig = require('./server');
EggWebpackVue.EasyWebpack.build([clientConfig, serverConfig]);
```


- command run `package.json`

```js
"scripts": {
  "build": "NODE_ENV=development node build/build.js",
  "build-prod": "NODE_ENV=production node build/build.js",
  "start": "NODE_ENV=development node index.js",
  "start-prod": "NODE_ENV=production node index.js"
}
```

```bash
npm run build or npm run build-prod
```

- with [egg-webpack](https://github.com/hubcarl/egg-webpack), While developing, while compiling

```js
exports.webpack = {
  port: 8090,
  clientConfig: require(path.join(app.baseDir, 'build/client')),
  serverConfig: require(path.join(app.baseDir, 'build/server')),
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/hubcarl/egg-webpack).

## License

[MIT](LICENSE)
