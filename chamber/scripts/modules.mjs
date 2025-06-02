
import { showGridList } from './displayMode.mjs';
import { navigation } from './navigation.mjs';
import { displayCopyright, displayLastModified } from './date.mjs';
import { loadWeather } from './weather.mjs';
import { showBusiness } from './highlightBusiness.mjs';
import { loadDirectory } from './directory.mjs';
import { loadMembershipModal } from './membershipModal.mjs';

document.addEventListener("DOMContentLoaded", () => {
    showGridList();
    navigation();
    loadWeather();
    showBusiness();
    loadDirectory();
    loadMembershipModal();
    displayCopyright();
    displayLastModified();
});
