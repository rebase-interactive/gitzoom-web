import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    signOut() {
      this.get('session').invalidate();
    }
  }
});
