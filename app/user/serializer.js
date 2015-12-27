import ApplicationSerializer from 'gitzoom/application/serializer';

export default ApplicationSerializer.extend({
  extractId() {
    return 'me';
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    /*jshint unused: false*/

    payload.avatarUrl = payload.avatar_url;

    delete payload.avatar_url;

    return this._super(...arguments);
  }
});
