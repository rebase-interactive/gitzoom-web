import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'gitzoom/tests/helpers/start-app';
import { authenticateSession } from 'gitzoom/tests/helpers/ember-simple-auth';
import index from 'gitzoom/tests/pages/index';

let application;

module('Acceptance | index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / should redirect to /notifications', function(assert) {
  assert.expect(1);

  server.create('user');
  authenticateSession(application, {accessToken: 'TOKEN'});
  index.visit();

  andThen(function() {
    assert.equal(currentURL(), '/notifications');
  });
});
