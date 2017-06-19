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

support vue server rendering file memory read for [egg-webpack](https://github.com/hubcarl/egg-webpack) and [egg-view-vue](https://github.com/eggjs/egg-view-vue). when the local development, wepback memory read the way to cover the local file read logic.

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

see [config/config.default.js](config/config.default.js) for more detail.


## Questions & Suggestions

Please open an issue [here](https://github.com/hubcarl/egg-webpack).

## License

[MIT](LICENSE)
