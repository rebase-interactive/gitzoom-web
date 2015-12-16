import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'gitzoom/tests/helpers/start-app';
import { authenticateSession } from 'gitzoom/tests/helpers/ember-simple-auth';

let application;

module('Acceptance | login', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / when logged out should redirect to /login', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /login when logged in should redirect to /', function(assert) {
  authenticateSession(application);
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
