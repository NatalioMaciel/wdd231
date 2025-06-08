const apiKey = '3801ed2cb99bb12ff5aa950437cd74df';
const city = 'Asuncion';
const units = 'imperial';

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

export function loadWeather() {
    const weather = document.getElementById("weather");
    const forecastDiv = document.getElementById("forecast");

    if (!weather || !forecastDiv) return;

    fetch(currentUrl)
        .then(response => response.json())
        .then(data => {
            weather.innerHTML = `
              <p><strong>${Math.round(data.main.temp)}°F</strong></p>
              <p>${data.weather[0].description}</p>
              <p>High:<strong> ${Math.round(data.main.temp_max)}°</strong></p>
              <p>Low: <strong>${Math.round(data.main.temp_min)}°</strong></p>
              <p>Humidity: <strong>${data.main.humidity}%</strong></p>
              <p>Sunrise: <strong>${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</strong></p>
              <p>Sunset: <strong>${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</strong></p>
            `;
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const days = {};

            data.list.forEach(item => {
                const date = new Date(item.dt_txt);
                const day = date.toLocaleDateString(undefined, { weekday: 'long' });

                if (!days[day]) {
                    days[day] = item.main.temp;
                }
            });

            const entries = Object.entries(days).slice(0, 3);

            forecastDiv.innerHTML = entries.map(([day, temp], i) => {
                return `<p>${i === 0 ? "Today" : day}: <strong>${Math.round(temp)}°F</strong></p>`;
            }).join("");
        });
}