import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default Base.extend({
  authorize(data, block) {
    const accessToken = data['accessToken'];
    if (!isEmpty(accessToken)) {
      block('Authorization', `token ${accessToken}`);
    }
  }
});
