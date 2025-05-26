const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=3801ed2cb99bb12ff5aa950437cd74df&units=metric'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            currentTemp.textContent = `${data.main.temp.toFixed(1)} °C`;
            const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const desc = data.weather[0].description;

            weatherIcon.setAttribute('src', iconSrc);
            weatherIcon.setAttribute('alt', desc);
            captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();