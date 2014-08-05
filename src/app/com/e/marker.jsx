exports.MarkerControl = function(wmap){
	
	var markers = {};
	var markerNo = 1;
	var wMap = wmap;
	
	return {
		newMarker: function(options){
			var marker = new google.maps.Marker(options);

		markers[markerNo] = marker;
		return marker;	
	},
		setMarker: function(marker){
			marker.setMap(wMap);
		}
	};
};

