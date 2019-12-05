 //For more documentation on the options, see
 //https://developers.google.com/maps/documentation/javascript/reference?csw=1
 var marker;
 var infowindow;



 function gotLocation(location, lat, long) {
     GoogleMap1.mapOptions.latitude = location.coords.latitude;
     GoogleMap1.mapOptions.longitude = location.coords.longitude;
     GoogleMap1.refresh();

     //Put a marker on our location
     point = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
     marker = GoogleMap1.setMarker({
         position: point
     });
     //Add an infoWindow to our marker
     infowindow = GoogleMap1.setInfoWindow("Lat: " + location.coords.latitude + " Lng: " + location.coords.longitude, marker);
     NSB.WaitCursor(false);
 }
 
btnLocation.onclick = function() {
     navigator.geolocation.getCurrentPosition(gotLocation);
     NSB.WaitCursor(true);
 };



