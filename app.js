'use strict';
const path = require('path');
const co = require('co');
module.exports = app => {
  if (app.view) {
    app.view.resolve = function (name) {
      return Promise.resolve(name);
    };
  }

  if (app.vue) {
    const render = app.vue.render;
    app.vue.bundleCache = false;
    app.vue.render = (name, context, options) => {
      const filePath = path.isAbsolute(name) ? name : path.join(app.config.view.root[0], name);
      const promise = app.webpack.fileSystem.readWebpackMemoryFile(filePath, name);
      return co(function* () {
        const content = yield promise;
        if (!content) {
          throw new Error(`read webpack memory file[${filePath}] content is empty, please check if the file exists`);
        }
        return render.bind(app.vue)(content, context, options);
      });
    };
  }
};
