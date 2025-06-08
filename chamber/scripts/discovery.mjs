export async function loadDiscovery() {
    const showPlaces = document.querySelector("#discovery");
    const url = "data/paraguay.json";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const places = data.discovery;

        places.forEach(place => {
            const card = document.createElement("section");

            const image = document.createElement("img");
            image.src = place.image;
            image.alt = place.name;
            card.appendChild(image);

            const title = document.createElement("h2");
            title.textContent = place.name;
            card.appendChild(title);

            const address = document.createElement("address");
            address.textContent = place.address;
            card.appendChild(address);

            const description = document.createElement("p");
            description.textContent = place.description;
            card.appendChild(description);

            showPlaces.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading places:", error.message);
    }
}

