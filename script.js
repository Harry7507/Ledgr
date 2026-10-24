const btn = document.getElementById('add-button');
const txt = document.getElementById('tagline');

btn.addEventListener('click', function() {
    btn.classList.toggle('is-clicked');
    txt.classList.toggle('will-hide');
});