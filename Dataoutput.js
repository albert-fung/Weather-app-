function inputinfo(lat,lng,address){
  //clear info div
    $('#info').empty();
  //For testing outputs of google geocode
  var node = document.createTextNode(address);
  var element = document.getElementById("info");
  element.appendChild(node);
}

function weatheroutputweekly(forecast)
{
  //clear results
  $('#results').empty();

  //creating weekly template
  $('#results').load("templates/weekly_template.html",function()
  {
    var all_weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for(i = 0; i < 7; i++)
    {
      var hightemp = forecast.daily.data[i].temperatureHigh;
      var lowtemp = forecast.daily.data[i].temperatureLow;

      var time = forecast.daily.data[i].time;

      //converting unix time to day of the week
      var weekday_number= new Date(time*1000);
      console.log(weekday_number);
      weekday_number= weekday_number.getDay();
      var weekday = all_weekday[weekday_number];
      console.log("high: "+hightemp+" Low: "+lowtemp+" icon: "+icon+" Weekday: "+weekday);

      //Putting data in their respective column
      hightemp=Math.round(hightemp);
      lowtemp=Math.round(lowtemp);
      //column number
      var col = document.getElementById('col-'+i);
      var list = document.createElement('ul');

      //Putting data in a list elements to put into list

      //Weather icon
      list_element = document.createElement('li');
      icon_element=document.createElement('i');
      icon_element.id="weather_icon_"+i;
      list_element.appendChild(icon_element);
      list.appendChild(list_element);

      //Day of the Week
      list_element = document.createElement('li');
      list_element.id="day";
      node = document.createTextNode(weekday);
      list_element.appendChild(node);
      list.appendChild(list_element);




      //High temp
      list_element = document.createElement('li');
      list_element.id="high_temp";
      var node = document.createTextNode("high: "+hightemp);
      list_element.appendChild(node);
      list.appendChild(list_element);

      //Low temp
      list_element = document.createElement('li');
      list_element.id="low_temp";
      node = document.createTextNode("Low: "+lowtemp);
      list_element.appendChild(node);
      list.appendChild(list_element);

      col.appendChild(list);
    }

    for (var x=0 ; x<7 ; x++)
    {
      var icon = forecast.daily.data[x].icon;
      icon=icon_img(icon);
      var id = String("#weather_icon_"+x);
      $(id).addClass("wi");
      $(id).addClass("wi-"+icon);
    }
  });
}

function icon_img(icon)
{
switch (icon) {
  case "clear-day":
    return "day-sunny"
    break;
  case "clear-night" :
    return "night-clear"
    break;
  case "wind":
    return "strong-wind"
    break;
  case "partly-cloudy-day":
    return "day-cloudy"
    break;
  case "partly-cloudy-night":
    return "night-cloudy"
    break;

  default: return icon
   /*remapping weather_icon.io and darksky.api(forecast.io)
  No need for re-mapping:fog,sleet,snow,rain,hail,thunderstorm,tornado*/
}
}
