import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  login: faker.internet.userName,
  avatarUrl: faker.internet.avatar
});
