import GitHubOauth2Provider from 'torii/providers/github-oauth2';

export default GitHubOauth2Provider.extend({
  fetch(data) {
    return data;
  }
});
