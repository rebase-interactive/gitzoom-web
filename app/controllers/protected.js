import Controller from '@ember/controller';

import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  user: alias('model'),

  actions: {
    signOut() {
      get(this, 'session').invalidate();
    }
  }
});
