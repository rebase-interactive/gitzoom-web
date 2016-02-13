import ApplicationSerializer from 'gitzoom/application/serializer';

export default ApplicationSerializer.extend({
  extractId() {
    return 'me';
  }
});
