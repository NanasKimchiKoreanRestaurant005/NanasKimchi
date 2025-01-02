const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.side-menu > ul > li').forEach((menuItem) => {
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown) {
        menuItem.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    }
});
