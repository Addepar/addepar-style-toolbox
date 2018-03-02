'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
    routerScroll: {
      scrollElement: '#docs-viewer__scroll-body'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  return ENV;
};
