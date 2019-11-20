// This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
      
      
      
//For more documentation on the options, see
 //https://developers.google.com/maps/documentation/javascript/reference?csw=1
 var marker;
 var infowindow;

 btnLocation.onclick = function() {
     navigator.geolocation.getCurrentPosition(gotLocation);
     NSB.WaitCursor(true);
 };
/*
var latlng = new google.maps.LatLng(42.265503, -95.949310);

function addmarker(latilongi) {
    var marker = new google.maps.Marker({
        position: latilongi,
        title: 'new marker',
        draggable: true,
        map: map
    });
    map.setCenter(marker.getPosition())
}
*/


 function gotLocation(location) {
    // location.coords.latitude = 48.265503;
//location.coords.longitude = -99.949310;
     //GoogleMap1.mapOptions.latitude = location.coords.latitude;
     //GoogleMap1.mapOptions.longitude = location.coords.longitude;
     
     
     //location.coords.latitude = 48.265503;
     //location.coords.longitude = -99.949310;
     GoogleMap1.mapOptions.latitude = 41.25669860839844;
     GoogleMap1.mapOptions.longitude = -95.93229675292969;
     
     
     GoogleMap1.refresh();

     //Put a marker on our location
     point = new google.maps.LatLng(41.25669860839844, -95.93229675292969);
       marker = GoogleMap1.setMarker({
         position: point
     });
     
     // add another marker
      point2 = new google.maps.LatLng(41.25803756713867, -95.95947265625);
         marker2 = GoogleMap1.setMarker({
         position: point2
     });
     //infowindow = GoogleMap1.setInfoWindow("Lat: " + location.coords.latitude + " Lng: " + location.coords.longitude, marker);
     NSB.WaitCursor(false);
 }
