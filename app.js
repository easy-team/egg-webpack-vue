'use strict';
const path = require('path');
const fs = require('fs');
module.exports = app => {
  console.log('app.config.env =', app.config.env);
  if (app.view) {
    app.view.resolve = function* (name) {
      return name;
    };
  }

  if (app.vue) {
    app.vue.readFile = fileName => {
      const filePath = path.isAbsolute(fileName) ? fileName : path.join(app.config.view.root[0], fileName);
      if (/\.html$/.test(fileName)) {
        return app.webpack.fileSystem.readClientFile(filePath, fileName);
      }
      return app.webpack.fileSystem.readServerFile(filePath, fileName);
    };
  }

  app.messenger.on(app.webpack.Constant.EVENT_WEBPACK_CLIENT_BUILD_STATE, data => {
    if (data.state) {
      const filepath = app.config.webpackvue.build.manifest;
      const promise = app.webpack.fileSystem.readClientFile(filepath);
      promise.then(content => {
        fs.writeFileSync(filepath, content, 'utf8');
      });
    }
  });
};
