let apiKey = "728c0e97216666478e240f7049f6a80e"
let userFormEl = document.querySelector("#user-form");
let cityInputEl = document.querySelector("#city");
let weatherContainerEl = document.querySelector("#weather-container");
let displayCity = document.querySelector("#display-city");
let citySearchTerm = document.querySelector("#city-searched")
let fiveDay = document.querySelector("#five-day-cards");
let fiveDayHeader = document.querySelector("#five-day-header");
let searchHistory = document.querySelector("#search-history");
let searched = [];

let getForcast = function (city) {

    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayForcast(data));

};

let displayForcast = function (data, searchTerm) {
    weatherContainerEl.textContent = '';
    fiveDay.textContent = '';
    console.log(data);

    let date = moment().format('L');
    let city = data.city.name; 
    let temp = Math.floor(data.list[0].main.temp);
    let weather = data.list[0].weather[0].icon;
    let humidity = data.list[0].main.humidity;
    let wind = Math.floor(data.list[0].wind.speed);

    let iconUrl = "https://openweathermap.org/img/w/" + weather + ".png";

    let currentDateEl = document.createElement('h5');
    currentDateEl.textContent = date;

    let currentTempEl = document.createElement('span');
    currentTempEl.innerHTML = "<h6>Temperature: </h6>" + temp + "℉";

    let currentWeatherEl = document.createElement('img');
    currentWeatherEl.setAttribute("src", iconUrl);

    let currentHumidityEl = document.createElement('span');
    currentHumidityEl.innerHTML = "<h6>Humidity: </h6>" + humidity + "%";

    let currentWindEl = document.createElement('span');
    currentWindEl.innerHTML = "<h6>Wind Speed: </h6>" + wind + " MPH";

    citySearchTerm.textContent = city;
    weatherContainerEl.appendChild(currentDateEl);
    currentDateEl.appendChild(currentWeatherEl);
    weatherContainerEl.appendChild(currentTempEl);
    weatherContainerEl.appendChild(currentHumidityEl);
    weatherContainerEl.appendChild(currentWindEl);

    for (let i = 2; i < 40; i += 8) {
        let forcastObject = {
            forcastDate: moment(data.list[i].dt_txt).format('L'),
            forcastTemp: Math.floor(data.list[i].main.temp) + "℉",
            forcastWeather: data.list[i].weather[0].icon,
            forcastHumidity: data.list[i].main.humidity + "%",
        };

        console.log(forcastObject);
        let fiveDayEl = document.createElement('div');
        fiveDayEl.classList = "card bg-primary";
        fiveDayEl.innerHTML = `${forcastObject.forcastDate}<br><img src=https://openweathermap.org/img/w/${forcastObject.forcastWeather}.png width='50' height='50'><br><p>Temp: </p>${forcastObject.forcastTemp}<p>Humidity: </p>${forcastObject.forcastHumidity}`;

        fiveDayHeader.setAttribute("class", "card-header");
        fiveDayHeader.textContent = "5 Day Forcast";

        fiveDay.appendChild(fiveDayEl);
    };
};

let formSubmitHandler = function (event) {
    event.preventDefault();

    let name = cityInputEl.value.trim();

    if (name) {
        getForcast(name);
        cityInputEl.value = "";
    }

    else {
        alert("Please enter a city.");
    }

    searched.push(name);
    saveSearch();
};

let saveSearch = function(){
    localStorage.setItem("city", JSON.stringify(searched));
};

 let pageLoad = function(){
    let savedSearch= localStorage.getItem('cityName');
    if(!savedSearch){
        return false;
    }

    savedSearch = JSON.parse(savedSearch);

    for (let j = 0; j < savedSearch.length; i++){
        
    }
};


userFormEl.addEventListener("submit", formSubmitHandler);