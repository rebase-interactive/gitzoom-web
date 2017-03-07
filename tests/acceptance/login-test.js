import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'gitzoom/tests/helpers/start-app';
import { authenticateSession } from 'gitzoom/tests/helpers/ember-simple-auth';
import index from 'gitzoom/tests/pages/index';
import login from 'gitzoom/tests/pages/login';

const {
  run
} = Ember;

let application;

module('Acceptance | login', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    server.shutdown();
    run(application, 'destroy');
  }
});

test('visiting / when logged out should redirect to /login', function(assert) {
  assert.expect(1);

  index.visit();

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /login when logged in should redirect to /', function(assert) {
  assert.expect(1);

  server.create('user');
  authenticateSession(application, { accessToken: 'TOKEN' });
  login.visit();

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('layout should show logged in user avatar', function(assert) {
  assert.expect(2);

  let user = server.create('user');
  authenticateSession(application, { accessToken: 'TOKEN' });
  index.visit();

  andThen(function() {
    let $userImage = $('img.avatar');
    assert.equal($userImage.attr('alt'), user.login);
    assert.equal($userImage.attr('src'), user.avatarUrl);
  });
});
