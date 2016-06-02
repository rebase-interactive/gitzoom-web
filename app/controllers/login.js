import Ember from 'ember';

const {
  Controller,
  get,
  inject,
  set
} = Ember;

export default Controller.extend({
  session: inject.service('session'),

  isProcessing: false,

  actions: {
    authenticate() {
      set('isProcessing', true);
      return get('session').authenticate('authenticator:torii', 'github')
        .catch(() => {
          set('isProcessing', false);
        });
    }
  }
});
