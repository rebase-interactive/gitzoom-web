import Ember from 'ember';
import ApplicationAdapter from './application';

/*jshint -W079 */
const {
  String
} = Ember;

export default ApplicationAdapter.extend({
  findRecord(store, type, id, snapshot) {
    if (id === 'me') {
      id = null;
    }
    return this._super(store, type, id, snapshot);
  },
  pathForType(modelName) {
    return String.camelize(modelName);
  }
});
