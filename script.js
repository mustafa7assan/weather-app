"use strict";

const form = document.querySelector(".city-form");
const cityInput = document.getElementById("city");
const getLocationBtn = document.querySelector(".geolocation");
const conditionLabel = document.querySelector(".weather-type-text");
const conditionIcon = document.querySelector(".condition-icon");
const dateLabel = document.querySelector(".date");
const tempLabel = document.querySelector(".temp");
const speedLabel = document.querySelector(".speed");
const humidityLabel = document.querySelector(".humidity");
const forecastTable = document.querySelector(".table");
const errorLabel = document.querySelector(".error");
const rightContainer = document.querySelector(".right-container");
const regionLabel = document.querySelector(".region");
const citiesContainers = document.querySelector(".cities");
const weatherContainer = document.querySelector(".weather");
const loading = document.querySelector(".loading");

const getWeather = async function (cityName) {
  weatherContainer.classList.add("hidden");
  loading.classList.remove("hidden");
  errorLabel.textContent = "";
  try {
    const url = `httpa://api.weatherapi.com/v1/forecast.json?key=4355839a46fc4b8e80832221230908&q=${cityName}&days=3&aqi=no&alerts=no`;
    const response = await fetch(url, {
      mode: "cors",
    });
    if (!response.ok) throw new Error("City is not found");
    const weather = await response.json();
    displayCurrentWeather(weather.current);
    displayForecastWeather(weather.forecast);
    displayWeatherLocation(weather.location);
  } catch (err) {
    console.log(err.message);
    errorLabel.textContent = err.message;
  } finally {
    weatherContainer.classList.remove("hidden");
    loading.classList.add("hidden");
  }
};

const displayCurrentWeather = function (weather) {
  conditionLabel.textContent = weather.condition.text.split("or")[0];
  conditionIcon.setAttribute("src", weather.condition.icon);
  tempLabel.textContent = Math.round(weather["temp_c"]);
  const date = new Date(weather["last_updated"]);
  speedLabel.textContent = `${Math.round(weather["wind_kph"])} km/h`;
  humidityLabel.textContent = `${Math.round(weather["humidity"])}%`;

  displayDate(date);
  const condition = weather.condition.text.toLowerCase();
  // change the background image based on image condition
  if (condition === "overcast" || condition === "partly cloudy") {
    rightContainer.style.backgroundImage = `url("img/cloudy.jpg")`;
  } else if (condition === "sunny") {
    rightContainer.style.backgroundImage = `url("img/sunny.jpg")`;
  } else if (condition === "clear") {
    rightContainer.style.backgroundImage = `url("img/clear.jpg")`;
  } else if (condition.includes("rain")) {
    rightContainer.style.backgroundImage = `url("img/rain.jpg")`;
  } else {
    rightContainer.style.backgroundImage = `url("img/default.jpg")`;
  }
};

const displayDate = function (date) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];

  dateLabel.textContent = `${dayOfWeek}, ${day} ${month}`;
};

const displayForecastWeather = function (forecast) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  forecastTable.innerHTML = "";
  forecastTable.insertAdjacentHTML(
    "afterbegin",
    ` <tr>
  <th>&nbsp;</th>
  <th>Speed</th>
  <th>Humidity</th>
  <th>&nbsp;</th>
  <th>Temperature</th>
  <th>&nbsp;</th>
</tr>`
  );
  forecast.forecastday.forEach((weather) => {
    // get day of week
    const dayOfWeek = daysOfWeek[new Date(weather.date).getUTCDay()];
    // get speed of wind
    const speed = Math.round(weather.day["maxwind_kph"]);
    // get humidity
    const humidity = Math.round(weather.day["avghumidity"]);
    // get max and min temperature
    const min = Math.round(weather.day["mintemp_c"]);
    const max = Math.round(weather.day["maxtemp_c"]);
    // inset data to html template
    const html = `<tr>
    <td class="day">${dayOfWeek}</td>
    <td>${speed} km/h</td>
    <td>${humidity}%</td>
    <td><img src="${weather.day.condition.icon}" alt="" class="forecast-icon"/></td>
    <td>${min}°C</td>
    <td class="max">${max}°C</td>
  </tr>`;

    forecastTable.insertAdjacentHTML("beforeend", html);
  });
};

const displayWeatherLocation = function (location) {
  regionLabel.textContent = `${location.name}, ${location.country}`;
};

const getCityName = async function (lat, lng) {
  try {
    const url = `https://geocode.xyz/${lat},${lng}?json=1&auth=207745578208635364237x111797`;
    const response = await fetch(url, {
      mode: "cors",
    });
    const data = await response.json();
    getWeather(data.city);
  } catch (e) {
    console.log(e.message);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = cityInput.value.trim();
  getWeather(cityName);
});

getLocationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      getCityName(lat, lng);
    },
    (err) => {
      console.log(err);
    }
  );
});

citiesContainers.addEventListener("click", (e) => {
  const cityContainer = e.target.closest(".city");
  if (!cityContainer) return;
  const cityNameElement = cityContainer.querySelector(".city-name");
  const cityName = cityNameElement.textContent.split(",")[0];

  getWeather(cityName);
});

getWeather("london");
