import axios from 'axios';
const apiKey = 'db42b45b4e50fe527c5cf512801d1631'

const getWeatherInfo = (lat, lon) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current&units=metric&appid=${apiKey}`
  );
};

const getWeatherInfoByCity = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
}

export { getWeatherInfo, getWeatherInfoByCity };
