export function loadDirectory() {
    const display = document.querySelector("#members_business");
    if (!display) return;
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
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
}
