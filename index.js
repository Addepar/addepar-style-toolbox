module.exports = {
  name: '@addepar/style-toolbox',

  treeForStyles() {
    let Funnel = require('broccoli-funnel');
    let writeFile = require('broccoli-file-creator');
    let mergeTrees = require('broccoli-merge-trees');

    let stylesTree = new Funnel(`${this.root}/styles`, {
      destDir: '@addepar/style-toolbox',
    });

    let indexTree = writeFile('@addepar/style-toolbox.scss', "@import './style-toolbox/index';");

    return mergeTrees([stylesTree, indexTree]);
  },

  included(app) {
    let sass = require('node-sass');
    let importOnce = require('node-sass-import-once');
    let autoprefixer = require('autoprefixer');

    let defaultPostcssOptions = {
      compile: {
        enabled: false,
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {
              browsers: ['last 2 version', 'Safari >= 8'],
            },
          },
        ],
      },
    };

    app.options = app.options || {};
    app.options.sassOptions = app.options.sassOptions || {};
    app.options.postcssOptions = Object.assign(
      app.options.postcssOptions || {},
      defaultPostcssOptions
    );

    if (!app.options.sassOptions.nodeSass) {
      let sassRender = sass.render;

      sass.render = function(options, callBack) {
        options.importer = importOnce;
        options.importOnce = {
          index: false,
          css: false,
          bower: false,
        };

        sassRender(options, callBack);
      };
    }

    app.options.sassOptions.nodeSass = sass;
  },
};
