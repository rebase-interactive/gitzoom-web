import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    logOut() {
      this.get('session').invalidate();
    }
  }
});
