'use strict';

module.exports = {
  name: 'addepar-toolbox',

  included(app) {
    app.options = app.options || {};
    app.options.sassOptions = app.options.sassOptions || {};

    const sass = require('node-sass');
    const importOnce = require('node-sass-import-once');

    if (!app.options.sassOptions.nodeSass) {

      const sassRender = sass.render;

      sass.render = function(options, callBack) {
        options.importer = importOnce;
        options.importOnce = {
          index: false,
          css: false,
          bower: false
        };

        sassRender(options, callBack);
      }
    }

    app.options.sassOptions.nodeSass = sass;
  }
};
