import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  pathForType(modelName) {
    return Ember.String.camelize(modelName);
  },
  findRecord(store, type, id, snapshot) {
    if (id === 'me') { id = null; }
    return this._super(store, type, id, snapshot);
  }
});
