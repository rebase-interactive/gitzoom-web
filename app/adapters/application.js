import RESTAdapter from 'ember-data/adapters/rest';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default RESTAdapter.extend(DataAdapterMixin, {
  session: service(),

  host: 'https://api.github.com',

  authorize(xhr) {
    let { accessToken } = this.get('session.data.authenticated');
    if (!isEmpty(accessToken)) {
      xhr.setRequestHeader('Authorization', `token ${accessToken}`);
    }
  }
});
