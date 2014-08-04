var home = require('home/home');
var about = require('about/about');
var layout = require('layout/layout');

m.route.mode = 'hash';
m.route(document.body, '/', {
  '/': layout(home),
  '/about': layout(about)
});
