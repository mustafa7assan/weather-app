'use strict';
import { weather } from './weather';
import img from '../assets/img/1.jpg';
import clearImage from '../assets/img/clear.jpg';
import cloudsImage from '../assets/img/clouds.jpg';
import rainImage from '../assets/img/rain.jpg';
import snowImage from '../assets/img/snow.jpg';

const UI = (() => {
  const weatherImage = document.querySelector('.weather__image');
  const overlay = document.querySelector('.overlay');
  // From
  const formSearch = document.querySelector('.search__form');
  // Inputs
  const inputLocation = document.querySelector('.location__input');
  // Buttons
  const btnsUnit = document.querySelectorAll('.btn--unit');
  // Labels
  const labelWeatherTemp = document.querySelector('.weather__temp > span');
  const labelCityName = document.querySelector('.weather__city');
  const labelWatherDate = document.querySelector('.weather__date');
  const labelWeatherType = document.querySelector('.weather__type--text');
  const labelWeatherCloude = document.querySelector('.weather__cloude');
  const labelWeatherHumidity = document.querySelector('.weather__humidity');
  const labelWeatherWind = document.querySelector('.weather__wind');
  // icons
  const iconWeatherType = document.querySelector('.weather__type--icon > img');
  // containers
  const weekForecast = document.querySelector('.week__forecast');
  // list
  const cities = document.querySelectorAll('.top__cities li');
  const init = () => {
    formSearch.addEventListener('submit', getCityName);
    cities.forEach((city) => {
      city.addEventListener('click', () => {
        const cityName = city.textContent.trim().toLowerCase();
        getWeatherData(cityName);
        inputLocation.value = cityName.replace(
          cityName[0],
          cityName[0].toUpperCase()
        );
      });
    });

    btnsUnit.forEach((button) => {
      button.addEventListener('click', () => {
        const unit = button.textContent.toLowerCase();
        const cityName = labelCityName.textContent.trim().toLowerCase();
        btnsUnit.forEach((btn) => btn.classList.remove('unit'));
        button.classList.toggle('unit');
        getWeatherData(cityName, unit);
      });
    });
    getWeatherData('khartoum', 'c');
    btnsUnit[0].classList.add('unit');
  };

  const getCityName = (e) => {
    e.preventDefault();
    const cityName = inputLocation.value.trim().toLowerCase();
    if (cityName) {
      getWeatherData(cityName);
    }
  };

  const getWeatherData = async (cityName, unit) => {
    try {
      const cityCoord = await weather.getCityCoords(cityName);
      const forecast = await weather.getCityForecast(cityCoord, unit);
      const weekDays = forecast.daily.slice(1);
      const today = forecast.daily[0];
      const city = forecast.timezone.split('/').slice(-1);
      showTodayWeather(today, city);
      showWeekdayWeather(weekDays);
    } catch (err) {
      console.log(
        'There is no city has this name! Please try with another city/country'
      );
    }
  };

  const weatherTypeImage = (weather) => {
    switch (weather) {
      case 'Clouds':
        return cloudsImage;
      case 'Rain':
        return rainImage;
      case 'Clear':
        return clearImage;
      case 'Snow':
        return snowImage;
      default:
        return img;
    }
  };

  const showTodayWeather = (today, city) => {
    labelCityName.textContent = city;
    labelWeatherTemp.textContent = today.temp.day.toFixed(0);
    // type
    const weatherType = today.weather[0].main;
    labelWeatherType.textContent = weatherType;
    const weatherImageSource = weatherTypeImage(weatherType);
    weatherImage.src = weatherImageSource;
    overlay.style.backgroundImage = `url('${weatherImageSource}')`;
    // icon
    iconWeatherType.src = `https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`;
    // Date
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const date = new Date(today.dt * 1000);
    const now = new Date();
    labelWatherDate.textContent =
      `${now.getHours()} : ${now.getMinutes().toString().padStart(2, '0')} - ` +
      date.toLocaleDateString('en-US', options);
    // Weather Details
    labelWeatherCloude.textContent = today.clouds + ' %';
    labelWeatherHumidity.textContent = today.humidity + ' %';
    labelWeatherWind.textContent = today.wind_speed + ' km/h';
  };

  const showWeekdayWeather = (days) => {
    weekForecast.innerHTML = '';
    for (const day of days) {
      const dayName = new Date(day.dt * 1000).toLocaleString('en', {
        weekday: 'long',
      });
      const html = `
      <div class="weather__card">
                  <div class="card__day">${dayName}</div>
                  <div class="card__degree">
                    <div class="degree__great"> ${day.temp.max.toFixed(
                      0
                    )} C <sup> &#176;</sup></div>
                    <div class="degree__small">${day.temp.min.toFixed(
                      0
                    )} C <sup> &#176;</sup></div>
                  </div>
                  <div class="card__weather__type--icon">
                    <img
                      src="https://openweathermap.org/img/wn/${
                        day.weather[0].icon
                      }@2x.png"
                      alt=""
                    />
                  </div>
                </div>
      `;
      weekForecast.insertAdjacentHTML('afterbegin', html);
    }
  };

  return { init };
})();

export { UI };
