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
  assert.expect(1);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /login when logged in should redirect to /', function(assert) {
  assert.expect(1);

  server.create('user');
  authenticateSession(application, {accessToken: 'TOKEN'});
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('layout should show logged in user avatar', function(assert) {
  assert.expect(2);

  const user = server.create('user');
  authenticateSession(application, {accessToken: 'TOKEN'});
  visit('/');

  andThen(function() {
    const $userImage = $('img.avatar');
    assert.equal($userImage.attr('alt'), user.login);
    assert.equal($userImage.attr('src'), user.avatarUrl);
  });
});
