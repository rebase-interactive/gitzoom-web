import Ember from 'ember';
import JSONSerializer from 'ember-data/serializers/json';

/*jshint -W079 */
const {
  String
} = Ember;

export default JSONSerializer.extend({
  keyForAttribute(attr) {
    return String.underscore(attr);
  }
});
