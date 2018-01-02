import JSONSerializer from 'ember-data/serializers/json';

import { underscore } from '@ember/string';

export default JSONSerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  }
});
