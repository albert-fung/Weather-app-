$(document).ready(function()
{
  //Google geocode API
   var geocoder = new google.maps.Geocoder();
  $("#geocode").click(function(){

  var location = document.getElementById("location").value;
  geocoder.geocode({'address':location},function (results,status)
    {if (status =='OK')
    {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      lat = lat.toFixed(3);
      lng = lng.toFixed(3);
      var address = results[0].formatted_address;

      //For testing outputs of google geocode
      var para = document.createElement("p");
      var node = document.createTextNode("The place searched "+address);
      var element = document.getElementById("results");
      para.appendChild(node);
      element.appendChild(para);
      para = document.createElement("p");
      node = document.createTextNode("The latitude is "+ lat+" and the longitude is "+lng);
      para.appendChild(node);
      element.appendChild(para);

      //Dark sky API portion
      //key obtained by local js file only obtainable for
      var key = api_key;
      $.getJSON("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+key+"/"+lat+","+lng , function(forecast) {
          console.log(forecast);
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
