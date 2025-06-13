const container = document.querySelector("#best_products");
const url = "data/products.json";

function randomArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export async function showProducts() {
    if (!container) return;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Data not found');

        const data = await response.json();
        const products = data.products;

        const filterProducts = products.filter(b => b.sale === "1");

        const bestProducts = randomArray(filterProducts).slice(0, 3);

        bestProducts.forEach(products => {
            const div = document.createElement("div");
            div.classList.add("products");

            div.innerHTML = `
                <h3>${products.productName}</h3>
                <img src="${products.image}" alt="${products.productName}">
                <p>${products.category}</p>
            `;
            container.appendChild(div);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}