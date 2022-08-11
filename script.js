
//ocument.getElementById('last-city').innerText= 
var searchInput = document.querySelector("[data-search]")
var lastCity =document.getElementById('last-city').innerHTML = localStorage.getItem(localStorage.length - 1,'value');
var apiKey =  "52f6964e61a82e1b57d7417070c8b005";
searchInput.addEventListener("submit", function(e) {
    e.preventDefault();
    var valueCity = document.getElementById('search-bar').value




    var i = localStorage.length;
    localStorage.setItem(i++,valueCity);
    console.log(localStorage);




    console.log(valueCity)
    console.log(searchInput)











var city = valueCity;

 let weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=52f6964e61a82e1b57d7417070c8b005";
 let forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=52f6964e61a82e1b57d7417070c8b005";
 fetch(weather).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
         console.log(response);
         console.log(data.main.temp);
         var temp = JSON.parse(data.main.temp);
         var humidity = JSON.parse(data.main.humidity);
         var wind = JSON.parse(data.wind.speed);
         //var icon = JSON.parse(data.weather[0].icon);
        // console.log(icon);
         console.log(wind);
         console.log(humidity);
         console.log(temp);
         document.getElementById('temperature').innerHTML = temp + " Celcius";
         document.getElementById('location').innerHTML = city;
         document.getElementById('humidity').innerHTML = "Humidity: "+ humidity + " %";
         document.getElementById('wind').innerHTML = wind + " Km/h";
         document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        });
   
    }
        else {
           
        }
 });
 fetch(forecast).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
         console.log(response);
        console.log(data.list[3].main.temp);
         var forecastTemp = JSON.parse(data.list[3].main.temp);
          var forecastHumidity = JSON.parse(data.list[3].main.humidity);
          var forecastWind = JSON.parse(data.list[3].wind.speed);
          var forecastDate = new Date(JSON.parse(data.list[3].dt));
          console.log(forecastDate);
          console.log(forecastWind);
          console.log(forecastHumidity);
          console.log(forecastTemp);
         document.getElementById('forecast-temperature').innerHTML = forecastTemp + " Celcius";
         document.getElementById('forecast-location').innerHTML = city;
         document.getElementById('forecast-humidity').innerHTML = "Humidity: "+ forecastHumidity +" %";
         document.getElementById('forecast-wind').innerHTML = forecastWind+ " Km/h";
         document.getElementById('date').innerHTML = data.list[3].dt_txt;
         document.querySelector(".forecast-icon").src = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png"
        });
   
    }
        else {
    
        }
 });
 fetch(forecast).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
         console.log(response);
        console.log(data.list[3].main.temp);
         var forecastTemp = JSON.parse(data.list[11].main.temp);
          var forecastHumidity = JSON.parse(data.list[11].main.humidity);
          var forecastWind = JSON.parse(data.list[11].wind.speed);
          var forecastDate = new Date(JSON.parse(data.list[11].dt));
          console.log(forecastDate);
          console.log(forecastWind);
          console.log(forecastHumidity);
          console.log(forecastTemp);
         document.getElementById('forecast-temperature-two').innerHTML = forecastTemp + " Celcius";
         document.getElementById('forecast-location-two').innerHTML = city;
         document.getElementById('forecast-humidity-two').innerHTML ="Humidity: "+ forecastHumidity+ " %";
         document.getElementById('forecast-wind-two').innerHTML = forecastWind+ " Km/h";
         document.getElementById('date-two').innerHTML = data.list[11].dt_txt;
         document.querySelector(".forecast-icon-two").src = "http://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + "@2x.png"
        });
   
    }
        else {
        
        }
 });
 fetch(forecast).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
         console.log(response);
        console.log(data.list[19].main.temp);
         var forecastTemp = JSON.parse(data.list[19].main.temp);
          var forecastHumidity = JSON.parse(data.list[19].main.humidity);
          var forecastWind = JSON.parse(data.list[19].wind.speed);
          var forecastDate = new Date(JSON.parse(data.list[19].dt));
          console.log(forecastDate);
          console.log(forecastWind);
          console.log(forecastHumidity);
          console.log(forecastTemp);
         document.getElementById('forecast-temperature-three').innerHTML = forecastTemp + " Celcius";
         document.getElementById('forecast-location-three').innerHTML = city;
         document.getElementById('forecast-humidity-three').innerHTML = "Humidity: "+ forecastHumidity+ " %";
         document.getElementById('forecast-wind-three').innerHTML = forecastWind+ " Km/h";
         document.getElementById('date-three').innerHTML = data.list[19].dt_txt;
         document.querySelector(".forecast-icon-three").src = "http://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + "@2x.png"
        });
   
    }
        else {
       
        }
 });
 fetch(forecast).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
         console.log(response);
        console.log(data.list[27].main.temp);
         var forecastTemp = JSON.parse(data.list[27].main.temp);
          var forecastHumidity = JSON.parse(data.list[27].main.humidity);
          var forecastWind = JSON.parse(data.list[27].wind.speed);
          var forecastDate = new Date(JSON.parse(data.list[27].dt));
          console.log(forecastDate);
          console.log(forecastWind);
          console.log(forecastHumidity);
          console.log(forecastTemp);
         document.getElementById('forecast-temperature-four').innerHTML = forecastTemp + " Celcius";
         document.getElementById('forecast-location-four').innerHTML = city;
         document.getElementById('forecast-humidity-four').innerHTML = "Humidity: "+ forecastHumidity+ " %";
         document.getElementById('forecast-wind-four').innerHTML = forecastWind+ " Km/h";
         document.getElementById('date-four').innerHTML = data.list[27].dt_txt;
         document.querySelector(".forecast-icon-four").src = "http://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + "@2x.png"
        });
   
    }
        else {
      
        }
 });
 fetch(forecast).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
         console.log(response);
        console.log(data.list[35].main.temp);
         var forecastTemp = JSON.parse(data.list[35].main.temp);
          var forecastHumidity = JSON.parse(data.list[35].main.humidity);
          var forecastWind = JSON.parse(data.list[35].wind.speed);
          var forecastDate = new Date(JSON.parse(data.list[35].dt));
          console.log(forecastDate);
          console.log(forecastWind);
          console.log(forecastHumidity);
          console.log(forecastTemp);
         document.getElementById('forecast-temperature-five').innerHTML = forecastTemp + " Celcius";
         document.getElementById('forecast-location-five').innerHTML = city;
         document.getElementById('forecast-humidity-five').innerHTML = "Humidity: "+ forecastHumidity+ " %";
         document.getElementById('forecast-wind-five').innerHTML = forecastWind+ " Km/h";
         document.getElementById('date-five').innerHTML = data.list[35].dt_txt;
         document.querySelector(".forecast-icon-five").src = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + "@2x.png"
        });
   
    }
        else {
    
        }
 });

});