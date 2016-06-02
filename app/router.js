import Ember from 'ember';
import config from './config/environment';

const {
  Router
} = Ember;

const router = Router.extend({
  location: config.locationType
});

router.map(function() {
  this.route('login');
  this.route('protected', { path: '/' });
});

export default router;
