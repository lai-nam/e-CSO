var products = require('com/products/products');
var tabs = require('com/tabs/tabs');
var todo = require('com/todo/todo');
var consts = require('com/e/consts');
var marker = require('com/e/marker');
var geo = require('com/e/geocoder');
var data = require('com/data');


var u = require('com/u');

exports.controller = function() {
 	
};

exports.view = function(ctrl) {
  return INCLUDE('home/home.tpl');
};


var wMap = google.maps;

function initialize() {
	
  // declare some variables
  var options= {};
  options.wStyles = consts.wStyles;
  
  var images = ["http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
								"http://maps.google.com/mapfiles/ms/icons/red-dot.png",
								"http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
								"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
								"http://maps.google.com/mapfiles/ms/icons/green-dot.png"];

  // var geocoder  = geo.geoCoder();
  // geocoder.getArray();
  var mapOptions = {
      center: new wMap.LatLng(10.762622, 106.660172),
      zoom: 12,
      mapTypeControlOptions: {
      	mapTypeIds: [wMap.MapTypeId.ROADMAP, 'wMapOptions']
      }
    };

  var map = new wMap.Map(document.getElementById("map-canvas"), mapOptions);
 	
 	// config map
 	wConfig(map, options);

 	var markerControl = marker.MarkerControl(map);
 	// create markerOptions
 	var myLatlng = new wMap.LatLng(10.762622, 106.660172);

 	for(var i = 0;i < data.data.length; i++){
 		var elem = data.data[i];
 		var newMarker = markerControl.newMarker({
 			position: new wMap.LatLng(elem.lat, elem.lng),
 			title: elem.info.name,
 			map:map,
 			icon: images[elem.type-1] 
 		});
 	}
}



function wConfig(map, options) {
	var wStyleMap = new wMap.StyledMapType(options.wStyles, {name: 'Styled Map'});
	map.mapTypes.set('wMapOptions', wStyleMap);
  map.setMapTypeId('wMapOptions');
}

wMap.event.addDomListener(window, 'load', initialize);
