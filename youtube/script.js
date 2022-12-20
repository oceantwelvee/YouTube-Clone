let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
let container = document.querySelector('.container');
let shortCutLinks = document.querySelector('.shortcut-links');
let subscribedList = document.querySelector('.subscribed-list');

/* Выключить перезагрузку страницы */

shortCutLinks.addEventListener('click', (e) => {
    e.preventDefault();
} )

subscribedList.addEventListener('click', (e) => {
    e.preventDefault();
})

menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle('large-container');
});

