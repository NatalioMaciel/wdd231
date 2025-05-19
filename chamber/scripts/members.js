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