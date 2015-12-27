import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  isProcessing: false,

  actions: {
    authenticate() {
      this.set('isProcessing', true);
      return this.get('session').authenticate('authenticator:torii', 'github')
        .catch(() => {
          this.set('isProcessing', false);
        });
    }
  }
});
