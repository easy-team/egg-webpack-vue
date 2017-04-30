'use strict';
const path = require('path');
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
        return app.webpack.fileSystem.readServerFile(filePath, fileName);
      }
      return app.webpack.fileSystem.readClientFile(filePath, fileName);
    };
  }
};
