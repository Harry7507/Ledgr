const addBtn = document.getElementById('add-button');
const curr = document.getElementById('curr');
const prev = document.getElementById('prev');

addBtn.addEventListener('click', function() {
    addBtn.classList.toggle('is-clicked');
    curr.classList.toggle('will-appear');
    prev.classList.toggle('will-appear');
    const isExpanded = addBtn.getAttribute('aria-expanded') === 'true';
    addBtn.setAttribute('aria-expanded', String(!isExpanded));
});

const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

navBtn.addEventListener('click', function() {
    navbar.classList.add('open');
    overlay.classList.add('show');
    navBtn.setAttribute('aria-expanded', 'true');
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    navbar.classList.remove('open');
    navBtn.setAttribute('aria-expanded', 'false');
});
