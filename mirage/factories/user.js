import Factory from 'ember-cli-mirage/factory';
import faker from 'ember-cli-mirage/faker';

export default Factory.extend({
  login: faker.internet.userName,
  avatarUrl: faker.internet.avatar
});
