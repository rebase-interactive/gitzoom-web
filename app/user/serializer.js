import ApplicationSerializer from 'gitzoom/application/serializer';

export default ApplicationSerializer.extend({
  extractId(modelClass, resourceHash) {
    return 'me';
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.avatarUrl = payload.avatar_url;

    delete payload.avatar_url;

    return this._super(...arguments);
  }
});
