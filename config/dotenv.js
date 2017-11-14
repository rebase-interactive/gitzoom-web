module.exports = function(env) {
  return {
    clientAllowedKeys: ['GATEKEEPER_HOST'],
    path: {
      development: '.env.development',
      test: '.env.development',
      production: '.env.production'
    }
  };
};
