import { navigation } from './navigation.mjs';
import { displayCopyright, displayLastModified } from './date.mjs';
import { showProducts, loadProducts, loadCategory, filterProducts } from './products.mjs';


document.addEventListener("DOMContentLoaded", () => {
    navigation();
    showProducts();
    loadProducts();
    loadCategory();
    filterProducts();
    displayCopyright();
    displayLastModified();
});