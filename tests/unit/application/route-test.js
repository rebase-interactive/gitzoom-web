import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
