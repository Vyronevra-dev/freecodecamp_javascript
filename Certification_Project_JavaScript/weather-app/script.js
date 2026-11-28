const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherPanel = document.getElementById("weather-display");

const weatherIconEl = document.getElementById("weather-icon");
const mainTempEl = document.getElementById("main-temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");
const weatherMainEl = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

function formatValue(val, unit = "") {
  if (val === undefined || val === null || Number.isNaN(val)) {
    return "N/A";
  }
  return unit ? `${val}${unit}` : `${val}`;
}

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  if (!city) return;

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  weatherPanel.classList.remove("hidden");

  const weatherInfo = Array.isArray(data.weather) && data.weather[0] ? data.weather[0] : {};
  const mainData = data.main || {};
  const windData = data.wind || {};

  locationEl.textContent = formatValue(data.name);
  weatherMainEl.textContent = formatValue(weatherInfo.main);

  if (weatherInfo.icon) {
    weatherIconEl.src = weatherInfo.icon;
    weatherIconEl.alt = formatValue(weatherInfo.description || weatherInfo.main, "");
  } else {
    weatherIconEl.src = "";
    weatherIconEl.alt = "N/A";
  }

  mainTempEl.textContent = formatValue(mainData.temp, " °C");
  feelsLikeEl.textContent = formatValue(mainData.feels_like, " °C");
  humidityEl.textContent = formatValue(mainData.humidity, "%");
  windEl.textContent = formatValue(windData.speed, " m/s");
  windGustEl.textContent = formatValue(windData.gust, " m/s");
}

getWeatherBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (!selectedCity) return;
  showWeather(selectedCity);
});
