import Ember from 'ember';
import ApplicationAdapter from './application';

/*jshint -W079 */
const {
  String
} = Ember;

export default ApplicationAdapter.extend({
  pathForType(modelName) {
    return String.camelize(modelName);
  },
  findRecord(store, type, id, snapshot) {
    if (id === 'me') {
      id = null;
    }
    return this._super(store, type, id, snapshot);
  }
});
