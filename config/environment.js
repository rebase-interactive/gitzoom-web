/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'gitzoom',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
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
      GATEKEEPER_HOST: process.env.GATEKEEPER_HOST
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' api.github.com " + process.env.GATEKEEPER_HOST,
      'img-src': "'self' data: *.githubusercontent.com",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    'ember-simple-auth': {
      routeAfterAuthentication: 'protected',
      routeIfAlreadyAuthenticated: 'protected'
    },
    torii: {
      providers: {
        'github-oauth2': {
          clientId: process.env.GITHUB_CLIENT_ID,
          scope: 'notifications'
        }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
