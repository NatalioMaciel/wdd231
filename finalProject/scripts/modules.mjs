import { navigation } from './navigation.mjs';
import { displayCopyright, displayLastModified } from './date.mjs';
import { showProducts, loadProducts, loadCategory, filterProducts, loadProductModal } from './products.mjs';
import { saveFormData } from './saveOrder.mjs';
import { loadFormData } from './order.mjs';


document.addEventListener("DOMContentLoaded", () => {
    navigation();
    showProducts();
    loadProducts();
    loadCategory();
    filterProducts();
    loadProductModal();
    loadFormData();
    displayCopyright();
    displayLastModified();
    saveFormData();
});