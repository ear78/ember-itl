import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('products');
  this.route('contact');
  this.route('about');
  this.route('parts-service');
});

export default Router;
