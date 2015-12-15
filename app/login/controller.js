import Ember from 'ember';
import ENV from 'gitzoom/config/environment';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service('session'),

  isProcessing: false,

  actions: {
    authenticate() {
      return this.get('session').authenticate('authenticator:torii', 'github-oauth2')
        .then(() => {
          this.set('isProcessing', true);

          const authCode = this.get('session.data.authenticated.authorizationCode');
          const gatekeeperURL =  'https://' + ENV.GATEKEEPER_HOST + '/authenticate/' + authCode;

          return this.get('ajax').request(gatekeeperURL)
            .then((data) => {
              if (data.error) {
                alert('Error: ' + data.error);
              } else {
                console.log('Token: ', data.token);
              }
            });
        })
        .catch(() => {
          // Don't throw console error if user dismisses auth window
        });
    }
  }
});
