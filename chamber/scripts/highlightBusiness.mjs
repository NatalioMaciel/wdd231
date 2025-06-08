const container = document.querySelector("#highlight_business");
const url = "data/members.json";

function randomArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export async function showBusiness() {
    if (!container) return;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Data not found');

        const data = await response.json();
        const businesses = data.business;

        const highlight = businesses.filter(b => b.membership_level === "2" || b.membership_level === "3");

        const highlightBusiness = randomArray(highlight).slice(0, 3);

        highlightBusiness.forEach(business => {
            const section = document.createElement("div");
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
