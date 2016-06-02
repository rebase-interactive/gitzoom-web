import Ember from 'ember';

const {
  computed: { alias },
  Controller,
  get,
  inject
} = Ember;

export default Controller.extend({
  session: inject.service('session'),

  user: alias('model'),

  actions: {
    signOut() {
      get('session').invalidate();
    }
  }
});
