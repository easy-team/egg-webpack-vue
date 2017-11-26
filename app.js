'use strict';
const path = require('path');
module.exports = app => {
  if (app.view) {
    app.view.resolve = async function (name) {
      return name;
    };
  }

  if (app.vue) {
    const render = app.vue.render;
    app.vue.bundleCache = false;
    app.vue.render = async (name, context, options) => {
      const filePath = path.isAbsolute(name) ? name : path.join(app.config.view.root[0], name);
      const content = await app.webpack.fileSystem.readWebpackMemoryFile(filePath, name);
      if (!content) {
        return Promise.reject(new Error(`read webpack memory file[${filePath}] content is empty, please check if the file exists`));
      }
      return render.bind(app.vue)(content, context, options);
    };
  }
};
