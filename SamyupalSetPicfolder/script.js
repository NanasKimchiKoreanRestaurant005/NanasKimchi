const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle hamburger "X" animation
    sideMenu.classList.toggle('active'); // Toggle side menu visibility
});
