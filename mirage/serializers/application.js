import { Serializer } from 'ember-cli-mirage';
import Ember from 'ember';

const { underscore } = Ember.String;

export default Serializer.extend({
  root: false,
  embed: true,
  keyForAttribute(attr) {
    return underscore(attr);
  }
});
