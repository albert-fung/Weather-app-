function inputinfo(lat,lng,address){
  //For testing outputs of google geocode
  var node = document.createTextNode("The place searched "+address);
  var element = document.getElementById("info");
  element.appendChild(node);
  node = document.createTextNode("The latitude is "+lat+" and the longitude is "+lng);
  element.appendChild(node);
}

function weatheroutputweekly(forecast)
{
  var all_weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var list = document.createElement("ol");
  for(int i = 0; i++ ; i<6)
  {
    var inner_list = document.createElement("ol");
    inner_list.setAttribute("id","inner_list");
    list.appendChild(innerlist);

    var hightemp = forecast.daily.data[i].temperatureHigh;
    var lowtemp = forecast.daily.data[i].temperaturelow;
    var icon = forecast.daily.data[i].icon;
    var time = forecast.daily.data[i].time;

    //converting unix time to day of the week
    var weekday_number= new Date(time*1000);
    weekday_number= weekday_number.getDay();
    var weekday = all_weekday(weekday_number);
    //TODO create loop to gather all data, maybe use bootstrap grids for formatting


  }
}
