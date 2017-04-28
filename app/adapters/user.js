import Ember from 'ember';
import ApplicationAdapter from './application';

/*jshint -W079 */
const {
  String
} = Ember;

export default ApplicationAdapter.extend({
  pathForType(modelName) {
    return String.camelize(modelName);
  }
});
