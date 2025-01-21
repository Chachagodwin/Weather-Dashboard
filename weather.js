const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "d09f07d90b059c231d10f70de443cedf";

const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_key}`;

    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        //console.log(data);
    }).catch(() => {
        alert("Error locating Location!!!");
    });
}

const getCItyCoordinates = () => {
    const cityName = cityInput.value.trim();
    if (!cityName) return;

    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

    //console.log(cityName);

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        // console.log(data)
        if (!data.length) return alert(`An Error happened while fetching coordinates for ${cityName}`);
        const { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon);
    }).catch(() => {
        alert("Error locating Location");
    });
}


searchButton.addEventListener("click", getCItyCoordinates);

