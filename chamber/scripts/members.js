const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members_business");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// Weather and Forecast

const apiKey = '3801ed2cb99bb12ff5aa950437cd74df';
const city = 'Asuncion';
const units = 'imperial';

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

fetch(currentUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerHTML = `
      <p><strong>${Math.round(data.main.temp)}°F</strong></p>
      <p>${data.weather[0].description}</p>
      <p>High: ${Math.round(data.main.temp_max)}°</p>
      <p>Low: ${Math.round(data.main.temp_min)}°</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
    `;
    });

fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecastDiv = document.getElementById("forecast");
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

//Business JSON
// Hihglight Business

const container = document.querySelector("#highlight_business");
const url = "data/members.json";

function randomArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function showBusiness() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Data not found');

        const data = await response.json();
        const businesses = data.business;

        const highlight = businesses.filter(business => business.membership_level === "2" || business.membership_level === "3")

        const highlightBusiness = randomArray(highlight).slice(0, 3);

        highlightBusiness.forEach(business => {
            const section = document.createElement("section");
            section.classList.add("business");

            section.innerHTML = `
                <h3>${business.name}</h3>
                <img src="${business.image}" alt="${business.name}">
                <p>${business.addresses}</p>
                <p>${business.phone}</p>
                <p><a href="${business.website}" target="_blank">${business.website}</a></p>
                <p><strong>Membership:</strong> ${business.membership_level === "2" ? "Silver" : "Gold"}</p>
            `;
            container.appendChild(section);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

showBusiness();

//Total of business -- Directory page

fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("members_business");

        data.business.forEach(member => {
            const section = document.createElement("section");
            section.classList.add("member");

            section.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name}">
                <p>${member.addresses}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                
            `;

            display.appendChild(section);
        });
    })
    .catch(error => {
        console.error("Error loading the JSON:", error);
    });