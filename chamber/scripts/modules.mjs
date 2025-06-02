
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

document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    const now = new Date();
    const isoDate = now.toISOString();
    timestampInput.value = isoDate;
});

const myInfo = new URLSearchParams(window.location.search);
const rawDate = myInfo.get('date');
const formattedDate = rawDate ? new Date(rawDate).toLocaleString() : "";

document.querySelector('#results').innerHTML = `
    <p>${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Your email: ${myInfo.get('email')}</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    <p>Organizacion Name: ${myInfo.get('title')}</p>
    <p>Date: ${formattedDate}</p>
  `;
