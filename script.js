
var city = "london";
var apiKey =  "52f6964e61a82e1b57d7417070c8b005";
let local = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey +"";
 fetch(local).then(function(response){
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
        });
    }
        else {
            alert("There was a problem!")
        }
    }
 );




var data = "data";
console.log(data);
