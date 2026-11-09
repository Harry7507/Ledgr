const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

navBtn.addEventListener('click', function() {
    navbar.classList.add('open');
    overlay.classList.add('show');
    navBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = "hidden";
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    navbar.classList.remove('open');
    navBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = "visible";
});

const addBtn = document.getElementById('add-button');
const mainForm = document.getElementById('main-form');
const logBtn = document.getElementById('log-btn');
const amtInput = document.getElementById('amount');
const category = document.getElementById('category');
const dateInput = document.getElementById('date');

addBtn.addEventListener('click', function() {
    addBtn.classList.toggle('is-clicked');
    mainForm.classList.toggle('appears');
    const isExpanded = addBtn.getAttribute('aria-expanded') === 'true';
    addBtn.setAttribute('aria-expanded', String(!isExpanded));
});

logBtn.addEventListener('click', function(event) {
    if (amtInput.value.trim() === "" || category.value.trim() === "" || dateInput.value.trim() === "") {
        event.preventDefault();
        alert("Enter values before Loging the transaction");
    } else {
        addBtn.classList.toggle('is-clicked');
        mainForm.classList.toggle('appears');
        const isExpanded = addBtn.getAttribute('aria-expanded') === 'true';
        addBtn.setAttribute('aria-expanded', String(!isExpanded));
    }
})
