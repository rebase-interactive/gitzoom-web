import Controller from '@ember/controller';

import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),

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
