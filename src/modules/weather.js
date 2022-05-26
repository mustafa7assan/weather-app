// My API key: bf462f52cf13683f9f4e393bb59a6a4d
// url: https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bf462f52cf13683f9f4e393bb59a6a4d
// https://api.openweathermap.org/data/3.0/onecall?lat=51.5085&lon=-0.1257&exclude=hourly,daily&appid=bf462f52cf13683f9f4e393bb59a6a4d

const weather = (() => {
  const getCityCoords = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bf462f52cf13683f9f4e393bb59a6a4d`;
      const response = await fetch(url, { mode: 'cors' });
      const { coord } = await response.json();
      return coord;
    } catch (err) {
      console.error('Error: Something went wrong!');
    }
  };

  const getCityForecast = async (coord, unit) => {
    try {
      unit = unit === 'f' ? 'imperial' : 'metric';
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,hourly,minutely,alerts&units=${unit}&appid=bf462f52cf13683f9f4e393bb59a6a4d`;
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error: Something went wrong!');
    }
  };

  return { getCityCoords, getCityForecast };
})();

export { weather };
