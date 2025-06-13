import { navigation } from './navigation.mjs';
import { displayCopyright, displayLastModified } from './date.mjs';
import { showProducts } from './bestproducts.mjs';


document.addEventListener("DOMContentLoaded", () => {
    navigation();
    showProducts();
    displayCopyright();
    displayLastModified();
});