function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `© ${currentYear} ⚒️ Natalio Maciel ⚒️ Luque, Paraguay`;
}

function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
}

window.onload = function () {
    displayCopyright();
    displayLastModified();
};