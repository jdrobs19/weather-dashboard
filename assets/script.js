let apiKey = "728c0e97216666478e240f7049f6a80e"
let userFormEl = document.querySelector("#user-form");
let cityInputEl = document.querySelector("#city");
let weatherContainerEl = document.querySelector("#weather-container");
let citySearchTerm = document.querySelector("#city-searched")
let fiveDay = document.querySelector("#five-day");

let getForcast = function(city){

    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data=> displayForcast(data));
            
};

let displayForcast = function(data, searchTerm){
    console.log(data);
    let date = moment().format('L');;
    
    let temp = Math.floor(data.list[0].main.temp);
    let weather = data.list[0].weather[0].main;
    let humidity = data.list[0].main.humidity;
    let wind = Math.floor(data.list[0].wind.speed);

    let currentDateEl = document.createElement('h5');
    currentDateEl.textContent = date;

    let currentTempEl = document.createElement('span');
    currentTempEl.innerHTML = "<h6>Temperature: </h6>" + temp + "℉";

    let currentWeatherEl = document.createElement('span');
    currentWeatherEl.innerHTML = "<h6>Currently: </h6>" + weather;

    let currentHumidityEl = document.createElement('span');
    currentHumidityEl.innerHTML = "<h6>Humidity: </h6>" + humidity + "%";

    let currentWindEl = document.createElement('span');
    currentWindEl.innerHTML = "<h6>Wind Speed: </h6>" + wind + " MPH";

    
    weatherContainerEl.appendChild(currentDateEl);
    weatherContainerEl.appendChild(currentTempEl);
    weatherContainerEl.appendChild(currentWeatherEl);
    weatherContainerEl.appendChild(currentHumidityEl);
    weatherContainerEl.appendChild(currentWindEl);

    let forcastObject ={
        forcastDate: moment([i]),
        forcastTemp: Math.floor(data.list[i].main.temp),
        forcastWeather: data.list[i].weather[i].main,
        forcastHumidity: data.list[i].main.humidity,
    }

    let fiveDayForcast = function(){
        for(i = 1; i < 5; i++){

    }
};

    fiveDayEl = document.createElement('span');
    fiveDayEl.innerHTML = 

    fiveDay.appendChild(fiveDayEl);
};

let formSubmitHandler = function(event){
    event.preventDefault();

    let name = cityInputEl.value.trim();

    if(name){
        getForcast(name);
        cityInputEl.value = "";
    }

    else{
        alert("Please enter a city.");
    }


};

userFormEl.addEventListener("submit", formSubmitHandler);