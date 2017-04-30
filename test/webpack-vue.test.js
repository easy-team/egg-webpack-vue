'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
describe('test/webpack-vue.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/webpack-vue-test'
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, webpack-vue')
      .expect(200);
  });

  it('should webpack dev config test', () => {
    const webpackConfig = require('./build/webpack.client.dev.conf.js')(app.config.webpackvue);
    assert(webpackConfig.module.rules, 'no rule config');
  });
});
