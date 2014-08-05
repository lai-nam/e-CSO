var home = require('home/home');
var about = require('about/about');
var layout = require('layout/layout');

m.route.mode = 'hash';
m.route(document.body, '/', {
  '/': layout(home),
  '/about': layout(about)
});


function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(10.762622, 106.660172),
          zoom: 12
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
google.maps.event.addDomListener(window, 'load', initialize);