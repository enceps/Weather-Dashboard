
var city = "london";
var apiKey =  "52f6964e61a82e1b57d7417070c8b005";
 let weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=52f6964e61a82e1b57d7417070c8b005";
 fetch(weather).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
         console.log(response);
         console.log(data.main.temp);
        });
   
    }
        else {
            alert("problem")
        }
 });
