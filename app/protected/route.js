import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findRecord('user', 'me');
  },
  afterModel() {
    this.transitionTo('protected.notifications');
  }
});
