const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', (event) => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });