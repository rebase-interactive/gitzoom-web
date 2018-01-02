module.exports = function(env) { // eslint-disable-line no-unused-vars
  return {
    clientAllowedKeys: ['GATEKEEPER_HOST'],
    path: {
      development: '.env.development',
      test: '.env.development',
      production: '.env.production'
    }
  };
};
