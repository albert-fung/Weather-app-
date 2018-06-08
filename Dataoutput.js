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
  $('#results').load("templates/weekly_template.html",function(){
    var all_weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for(i = 0; i < 6; i++)
    {
      var hightemp = forecast.daily.data[i].temperatureHigh;
      var lowtemp = forecast.daily.data[i].temperatureLow;
      var icon = forecast.daily.data[i].icon;
      var time = forecast.daily.data[i].time;

      //converting unix time to day of the week
      var weekday_number= new Date(time*1000);
      weekday_number= weekday_number.getDay();
      var weekday = all_weekday[weekday_number];
      //TODO create loop to gather all data, maybe use bootstrap grids for formatting
      console.log("high: "+hightemp+" Low: "+lowtemp+" icon: "+icon+" Weekday: "+weekday);

      hightemp=Math.round(hightemp);
      lowtemp=Math.round(lowtemp);
      var col = document.getElementById('col-'+i);
      var list = document.createElement('ul');

      list_element = document.createElement('li');
      node = document.createTextNode("Weekday: "+weekday);
      list_element.appendChild(node);
      list.appendChild(list_element);

      list_element = document.createElement('li');
      node = document.createTextNode("Icon: "+icon);
      list_element.appendChild(node);
      list.appendChild(list_element);


      var list_element = document.createElement('li');
      var node = document.createTextNode("high: "+hightemp);
      list_element.appendChild(node);
      list.appendChild(list_element);

      list_element = document.createElement('li');
      node = document.createTextNode("Low: "+lowtemp);
      list_element.appendChild(node);
      list.appendChild(list_element);


      col.appendChild(list);
    }
  });

}
