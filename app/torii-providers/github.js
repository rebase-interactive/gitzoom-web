import GitHubOauth2Provider from 'torii/providers/github-oauth2';

import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'gitzoom/config/environment';

export default GitHubOauth2Provider.extend({
  ajax: service(),

  fetch(data) {
    return data;
  },
  open() {
    return this._super().then((toriiData) => {
      let authCode = toriiData.authorizationCode;
      let gatekeeperURL =  `https://${ENV.APP.GATEKEEPER_HOST}/authenticate/${authCode}`;

      return get(this, 'ajax').request(gatekeeperURL)
        .then((gatekeeperData) => {
          toriiData.accessToken = gatekeeperData.token;
          return toriiData;
        });
    });
  }
});
