const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('open');
});

// Dropdown in side menu
document.querySelectorAll('.side-menu > ul > li').forEach((menuItem) => {
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown) {
        menuItem.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    }
});

// Close sidebar on outside click
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
        sideMenu.classList.remove('open');
        hamburger.classList.remove('active');
    }
});
