'use strict';

let name = require('./package').name;

module.exports = {
  name,

  treeForStyles() {
    let Funnel = require('broccoli-funnel');
    let writeFile = require('broccoli-file-creator');
    let mergeTrees = require('broccoli-merge-trees');

    let stylesTree = new Funnel(`${this.root}/styles`, {
      destDir: name,
    });

    let indexTree = writeFile('@addepar/style-toolbox.scss', "@import './style-toolbox/index';");

    return mergeTrees([stylesTree, indexTree]);
  },
};
