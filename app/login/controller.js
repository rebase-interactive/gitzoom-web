import Ember from 'ember';
import ENV from 'gitzoom/config/environment';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service('session'),

  isProcessing: false,

  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:torii', 'github-oauth2')
        .then(() => {
          this.set('isProcessing', true);

          const authCode = this.get('session.data.authenticated.authorizationCode');
          const gatekeeperURL =  'https://' + ENV.GATEKEEPER_HOST + '/authenticate/' + authCode;
          console.log(gatekeeperURL);

          // return this.get('ajax').request(gatekeeperURL)
          //   .then((data) => {
          //     console.log('Data: ', data);
          //     console.log('Token: ', data.token);
          //   }).catch((data) => {
          //     console.log('Error Data: ', data);
          //   });
        })
        .catch(() => {
          // Don't throw console error if user dismisses auth window
        });
    }
  }
});
