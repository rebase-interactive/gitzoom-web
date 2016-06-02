import Ember from 'ember';

const {
  Controller,
  inject
} = Ember;

export default Controller.extend({
  session: inject.service('session'),

  actions: {
    signOut() {
      this.get('session').invalidate();
    }
  }
});
