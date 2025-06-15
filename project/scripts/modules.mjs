import { navigation } from './navigation.mjs';
import { displayCopyright, displayLastModified } from './date.mjs';
import { showProducts, loadProducts, loadCategory, filterProducts, loadProductModal } from './products.mjs';


document.addEventListener("DOMContentLoaded", () => {
    navigation();
    showProducts();
    loadProducts();
    loadCategory();
    filterProducts();
    loadProductModal();
    displayCopyright();
    displayLastModified();
});