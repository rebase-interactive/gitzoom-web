import { test } from 'qunit';
import moduleForAcceptance from 'gitzoom/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting / when logged out should redirect to /login', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
