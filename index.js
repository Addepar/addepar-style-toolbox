module.exports = {
  name: '@addepar/style-toolbox',

  treeForStyles() {
    const Funnel = require('broccoli-funnel');
    const writeFile = require('broccoli-file-creator');
    const mergeTrees = require('broccoli-merge-trees');

    let stylesTree = new Funnel(`${this.root}/styles`, {
      destDir: '@addepar/style-toolbox'
    });

    let indexTree = writeFile(
      '@addepar/style-toolbox.scss',
      `@import './style-toolbox/index';`
    );

    return mergeTrees([stylesTree, indexTree]);
  },

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
