import Ember from 'ember';

const {
  Controller,
  inject
} = Ember;

export default Controller.extend({
  session: inject.service('session'),

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
