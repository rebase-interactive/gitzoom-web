import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractId() {
    return 'me';
  }
});
