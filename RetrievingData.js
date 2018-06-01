$(document).ready(function()
{
  //Google geocode API
   var geocoder = new google.maps.Geocoder();
  $("#geocode").click(function(){
    event.preventDefault();
  var location = document.getElementById("location").value;
  geocoder.geocode({'address':location},function (results,status)
    {if (status =='OK')
    {
      //retrieving data from google maps API (Latitude, longitude and full location name)
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      lat = lat.toFixed(3);
      lng = lng.toFixed(3);
      var address = results[0].formatted_address;

      inputinfo(lat,lng,address);

      //Dark sky API portion
      //key obtained by local js file only obtainable for me
      var key = api_key;
      $.getJSON("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+key+"/"+lat+","+lng+"?units=si", function(forecast) {
        console.log(forecast);
        weatheroutputweekly(forecast);
      });
    }
    else {
      var para = document.createElement("p");
      var node = document.createTextNode("Sorry servers are down for now. Please try again later.");
      var element = document.getElementById("Results");
      element.appendChild(node);
    }
    });
  });
});
