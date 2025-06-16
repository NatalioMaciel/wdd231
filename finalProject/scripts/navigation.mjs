export function navigation() {
    const hambutton = document.querySelector('#menu');
    const mainnav = document.querySelector('#animateme')

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
}