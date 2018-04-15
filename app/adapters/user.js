import ApplicationAdapter from './application';
import { camelize } from '@ember/string';

export default ApplicationAdapter.extend({
  pathForType(modelName) {
    return camelize(modelName);
  }
});
