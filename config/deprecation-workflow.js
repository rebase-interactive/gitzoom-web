window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchMessage: "Usage of `Ember.merge` is deprecated, use `Ember.assign` instead." }
  ]
};
