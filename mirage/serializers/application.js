import Serializer from 'ember-cli-mirage/serializer';

import { underscore } from '@ember/string';

export default Serializer.extend({
  root: false,
  embed: true,
  keyForAttribute(attr) {
    return underscore(attr);
  }
});
