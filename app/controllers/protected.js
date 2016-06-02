import Ember from 'ember';

const {
  Controller,
  get,
  inject
} = Ember;

export default Controller.extend({
  session: inject.service('session'),

  actions: {
    signOut() {
      get('session').invalidate();
    }
  }
});
