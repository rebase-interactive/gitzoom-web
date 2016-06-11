import Ember from 'ember';
import config from './config/environment';

const {
  Router
} = Ember;

const AppRouter = Router.extend({
  location: config.locationType
});

AppRouter.map(function() {
  this.route('login');
  this.route('protected', { path: '/' });
});

export default AppRouter;
