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
      set(this, 'isProcessing', true);
      return get(this, 'session').authenticate('authenticator:torii', 'github')
        .catch(() => {
          set(this, 'isProcessing', false);
        });
    }
  }
});
