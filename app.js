const api_key = "3325c3f011baf9e63027d50a7033d09b";
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${api_key}`;

fetch(api_url)
  .then((data) => {
    return data.json();
  })
  .then(getData);

const cityName = document.querySelector(".cityName");
const degree = document.querySelector(".degree");
const weather = document.querySelector(".weather");

function getData(data) {
  console.log(data);
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  degree.textContent = `${Math.round(data.main.temp)}C`;
  weather.textContent = `${data.weather[0].main}`;
}
