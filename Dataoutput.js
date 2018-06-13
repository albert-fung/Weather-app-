function inputinfo(lat,lng,address){
  //clear info div
    $('#info').empty();
  //For testing outputs of google geocode
  var node = document.createTextNode(address);
  var element = document.getElementById("info");
  element.appendChild(node);
  $("#info").addClass("underline");
}

function weatheroutputweekly(forecast)
{
  //clear results
  $('#results').empty();

  //creating weekly template
  $('#results').load("templates/weekly_template.html",function()
  {
    var all_weekday = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
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
      console.log("high: "+hightemp+" Low: "+lowtemp+" Weekday: "+weekday);

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
      var node = document.createTextNode("high: "+hightemp+"℃");
      list_element.appendChild(node);
      list.appendChild(list_element);

      //Low temp
      list_element = document.createElement('li');
      list_element.id="low_temp";
      node = document.createTextNode("Low: "+lowtemp+"℃");
      list_element.appendChild(node);
      list.appendChild(list_element);

      col.appendChild(list);
    }

    for (var x=0 ; x<7 ; x++)
    {
      var icon = forecast.daily.data[x].icon;
      var id = "#weather_icon_"+x;
      var background_id = '#col-'+x;
      icon=icon_img(icon,id, background_id);


      $(id).addClass("wi");
      $(id).addClass("wi-"+icon);
    }
  });
}

function icon_img(icon,id, background_id)
{
switch (icon) {
  case "clear-day":
  //orange-yellow
  $(background_id).css("background-color","#ff9f43");
    return "day-sunny"
    break;
  case "clear-night" :
  //purple
  $( background_id).css("background-color","#5f27cd");
    return "night-clear"
    break;
  case "wind":
  //lightgrey
  $( background_id).css("background-color","#8395a7");
    return "strong-wind"
    break;
  case "partly-cloudy-day":
  //yellowy-orange
    $( background_id).css("background-color","#feca57");
    return "day-cloudy"
    break;
  case "partly-cloudy-night":
  //dark purple
    $( background_id).css("background-color","#341f97");
    return "night-cloudy"
    break;
  case "fog":
  //green
    $( background_id).css("background-color","#1dd1a1");
    return icon
      break;
  case "snow":
  //white
  $( background_id).css("background-color","white");
    return icon
    break;
    case "snow":
    //white
    $( background_id).css("background-color","white");
      return icon
      break;
  default:
  //jade
    $( background_id).css("background-color","#54a0ff");
  return icon
   /*remapping weather_icon.io and darksky.api(forecast.io)
  No need for re-mapping:fog,sleet,snow,rain,hail,thunderstorm,tornado*/
}
}
