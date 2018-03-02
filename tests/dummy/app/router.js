import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('installation');
    this.route('quickstart');
    this.route('examples', function() {
      // Example routes here.
    });
  });
});

export default Router;
