const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToogle);

function navToogle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu');
}
