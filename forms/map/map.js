/* POTENTIAL CODE FOR MAP, WE ARE NOT FINISHED WITH THIS AND COULD USE SUGGESTIONS 

function myMap() {
var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

API Key = AIzaSyA3cAfXGoImw3OexYi9dhEvkbGhbZxf_vM


src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"

var map_parameters = { center: {lat: 47.490, lng: -117.585}, zoom: 8 };
var map = new google.maps.Map(document.getElementById('map'), map_parameters); */





btnHome1.onclick=function(){
  ChangeForm(homePage)
}

btnMyList1.onclick=function(){
  ChangeForm(myList)
}

btnEntry1.onclick=function(){
  ChangeForm(entries)
}

btnProfile1.onclick=function(){
  ChangeForm(profilePage)
}