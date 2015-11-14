import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'gitzoom/tests/helpers/start-app';

module('Acceptance | login', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting / when logged out should redirect to /login', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
