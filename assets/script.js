let apiKey = "728c0e97216666478e240f7049f6a80e"
let userFormEl = document.querySelector("#user-form");
let cityInputEl = document.querySelector("#city");
let weatherContainerEl = document.querySelector("#weather-container");
let citySearchTerm = document.querySelector("#city-searched")

let getForcast = function(city){

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data=> displayForcast(data));
            
};

let displayForcast = function(data){
    console.log(data);
    let temp = data.main.temp;
    console.log(temp);
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