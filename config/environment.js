'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'gitzoom',
    environment,
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
      'script-src': "'self' 'unsafe-inline'",
      'font-src': "'self'",
      'connect-src': "'self' api.github.com " + process.env.GATEKEEPER_HOST,
      'img-src': "'self' data: *.githubusercontent.com s3.amazonaws.com",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
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
    ENV.APP.autoboot = false;

    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
