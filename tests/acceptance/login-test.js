/* eslint-disable no-undef */
import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'gitzoom/tests/helpers/ember-cli-mirage';

import { authenticateSession } from 'ember-simple-auth/test-support';

let application;

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting / when logged out should redirect to /login', async function(assert) {
    assert.expect(1);

    await visit('/');

    assert.equal(currentURL(), '/login');
  });

  test('visiting /login when logged in should redirect to /', async function(assert) {
    assert.expect(1);

    this.server.create('user');
    authenticateSession(application, { accessToken: 'TOKEN' });

    await visit('/login');

    assert.equal(currentURL(), '/');
  });

  test('layout should show logged in user avatar', async function(assert) {
    assert.expect(2);

    let user = this.server.create('user');
    authenticateSession(application, { accessToken: 'TOKEN' });

    await visit('/');

    assert.dom('img.avatar').hasAttribute('alt', user.login);
    assert.dom('img.avatar').hasAttribute('src', user.avatarUrl);
  });
});
