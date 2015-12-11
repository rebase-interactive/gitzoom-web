import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  isProcessing: false,

  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:torii', 'github-oauth2')
        .then(() => {
          this.set('isProcessing', true);
          console.log(this.get('session.data.authenticated.authorizationCode'));
        })
        .catch(() => {
          // Don't throw error openly if user closes auth window
        });
    }
  }
});
