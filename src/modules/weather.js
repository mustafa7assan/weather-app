// My API key: bf462f52cf13683f9f4e393bb59a6a4d
// url: https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bf462f52cf13683f9f4e393bb59a6a4d

function getWeatherFor(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=bf462f52cf13683f9f4e393bb59a6a4d`;
  fetch(url, { mode: 'cors' })
    .then(res => res.json())
    .then(data => {
      showData(data);
    });
}
function showData(data) {
  for (const prop of Object.keys(data)) {
    console.log(data[prop]);
  }
}
export { getWeatherFor };
