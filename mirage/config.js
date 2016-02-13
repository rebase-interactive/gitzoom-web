import Mirage from 'ember-cli-mirage';
import ENV from 'gitzoom/config/environment';

export default function() {

  this.passthrough(`https://${ENV.GATEKEEPER_HOST}/**`);

  this.urlPrefix = 'https://api.github.com';
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.passthrough();

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}

/* Config that is only loaded during tests */
export function testConfig() {
  this.get('/user', function(schema, request) {
    if(request.requestHeaders.Authorization === "token TOKEN") {
      return schema.user.find(1).attrs;
    } else {
      return new Mirage.Response(401, {}, {});
    }
  });
}
