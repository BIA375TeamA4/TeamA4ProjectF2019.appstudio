// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var infowindow;
  
function Main() {   //runs when all the forms have been loaded
  google.maps.event.trigger(map, 'resize');
  var center = new google.maps.LatLng({
        lat: 41.2524,
        lng: -95.9980
    });
  map.panTo(center);
  }
  
function initMap() {
    // omaha is 41.2524 and -95.9980
    var currentLocation = {
        lat: 41.2524,
        lng: -95.9980
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: currentLocation,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: currentLocation,
        radius: 500,
        type: ['gas_station']
    }, callback);

}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}



Form1.onshow=function(){
   google.maps.event.trigger(map, 'resize');
  var center = new google.maps.LatLng({
        lat: 41.2524,
        lng: -95.9980
    });
  map.panTo(center);
}
