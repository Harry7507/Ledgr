const btn = document.getElementById('add-button');
const options = document.getElementsByClassName('options');
const curr = options[0];
const prev = options[1];

btn.addEventListener('click', function() {
    btn.classList.toggle('is-clicked');
    curr.classList.toggle('will-appear');
    prev.classList.toggle('will-appear');
});