import Ember from 'ember';
import GitHubOauth2Provider from 'torii/providers/github-oauth2';
import ENV from 'gitzoom/config/environment';

export default GitHubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  fetch(data) {
    return data;
  },
  open() {
    return this._super().then((toriiData) => {
      const authCode = toriiData.authorizationCode;
      const gatekeeperURL =  `https://${ENV.APP.GATEKEEPER_HOST}/authenticate/${authCode}`;

      return this.get('ajax').request(gatekeeperURL)
        .then((gatekeeperData) => {
          toriiData.accessToken = gatekeeperData.token;
          return toriiData;
        });
    });
  }
});
