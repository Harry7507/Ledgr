const btn = document.getElementById('add-button');
const curr = document.getElementById('curr');
const prev = document.getElementById('prev');

btn.addEventListener('click', function() {
    btn.classList.toggle('is-clicked');
    curr.classList.toggle('will-appear');
    prev.classList.toggle('will-appear');
});