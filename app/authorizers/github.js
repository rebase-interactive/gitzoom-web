import Base from 'ember-simple-auth/authorizers/base';
import { isEmpty } from '@ember/utils';

export default Base.extend({
  authorize(data, block) {
    let { accessToken } = data;
    if (!isEmpty(accessToken)) {
      block('Authorization', `token ${accessToken}`);
    }
  }
});
