import Ember from 'ember';
import Serializer from 'ember-cli-mirage/serializer';

const {
  String: { underscore }
} = Ember;

export default Serializer.extend({
  root: false,
  embed: true,
  keyForAttribute(attr) {
    return underscore(attr);
  }
});
