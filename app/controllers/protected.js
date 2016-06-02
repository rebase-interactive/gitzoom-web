import Ember from 'ember';

const {
  computed: { alias },
  Controller,
  get,
  inject
} = Ember;

export default Controller.extend({
  session: inject.service(),

  user: alias('model'),

  actions: {
    signOut() {
      get(this, 'session').invalidate();
    }
  }
});
