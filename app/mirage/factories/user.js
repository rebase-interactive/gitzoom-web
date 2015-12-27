import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  login: faker.internet.userName,
  avatar_url: faker.internet.avatar
});
