let apiKey = "728c0e97216666478e240f7049f6a80e"
let userFormEl = document.querySelector("#user-form");
let cityInputEl = document.querySelector("#city");

let getForcast = function(city){

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data=> console.log(data));
            
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

userFormEl.addEventListener("sumbit", formSubmitHandler);