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


export function loadCategory() {
    const display = document.querySelector("#category_products");
    if (!display) return;
    fetch('data/categories.json')
        .then(response => response.json())
        .then(data => {
            data.categories.forEach(category => {
                const div = document.createElement("div");
                div.classList.add("category");

                div.innerHTML = `
                    <h3>${category.name}</h3>
                    <button id="button-modal"><img src="${category.image}" alt="${category.name}"></button>
                    
                `;

                display.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Error loading the JSON:", error);
        });
}

let allProducts = [];

export async function loadProducts(filteredList = null) {
    const showProducts = document.querySelector("#products");
    const url = "data/products.json";

    if (!showProducts) return;

    showProducts.innerHTML = "";

    try {
        if (allProducts.length === 0) {
            const response = await fetch(url);
            const data = await response.json();
            allProducts = data.products;
        }

        const productsToDisplay = filteredList || allProducts;

        productsToDisplay.forEach(product => {
            const card = document.createElement("div");

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.productName;
            image.loading = "lazy";
            card.appendChild(image);

            const title = document.createElement("h2");
            title.textContent = product.productName;
            card.appendChild(title);

            const category = document.createElement("h3");
            category.textContent = product.category;
            card.appendChild(category);

            const button = document.createElement("button");
            button.textContent = "Add to Cart";
            card.appendChild(button);

            showProducts.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading places:", error.message);
    }
}

export function filterProducts() {

    const searchInput = document.querySelector('#search');

    if (!searchInput) return

    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(product =>
            product.productName.toLowerCase().includes(filter)
        );
        loadProducts(filteredProducts);
    });
}

export function loadProductModal() {
    const dialog = document.getElementById("mydialog");
    if (!dialog) return

    dialog.innerHTML = `
        <div>
            <h2 id="modal-name"></h2>
            <button id="close-modal">X</button>
            <p id="modal-description"></p>
        </div>
    `;

    dialog.querySelector("#close-modal").addEventListener("click", () => {
        dialog.close();
    });

    fetch("data/categories.json")
        .then(response => response.json())
        .then(data => {
            const category = data.categories;
            const buttons = document.querySelectorAll("#button-modal");

            buttons.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    const categories = category[index];

                    dialog.querySelector("#modal-name").textContent = categories.name;
                    dialog.querySelector("#modal-description").textContent = `${categories.description}`;

                    dialog.showModal();
                });
            });
        })
        .catch(error => console.error("Error loading the categories data:", error));
}
