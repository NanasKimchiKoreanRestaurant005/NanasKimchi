const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle hamburger animation
    sideMenu.classList.toggle('open');   // Toggle side menu visibility
});

document.querySelectorAll('.side-menu > ul > li').forEach((menuItem) => {
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown) {
        menuItem.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    }
});
