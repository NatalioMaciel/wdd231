
import { showGridList } from './displayMode.mjs';
import { navigation } from './navigation.mjs';
import { displayCopyright, displayLastModified } from './date.mjs';
import { loadWeather } from './weather.mjs';
import { showBusiness } from './highlightBusiness.mjs';
import { loadDirectory } from './directory.mjs';
import { loadDiscovery } from './discovery.mjs';
import { loadForm } from './form.mjs'
import { loadMembershipModal } from './membershipModal.mjs';
import { visitDate } from './visitDate.mjs';

document.addEventListener("DOMContentLoaded", () => {
    showGridList();
    navigation();
    loadWeather();
    showBusiness();
    loadDirectory();
    loadDiscovery()
    loadForm();
    visitDate();
    loadMembershipModal();
    displayCopyright();
    displayLastModified();
});


