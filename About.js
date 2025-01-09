// Select the hamburger menu and side menu elements
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

// Toggle the active class on the hamburger and side menu when clicked
hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Add dropdown functionality for side menu items
document.querySelectorAll('.side-menu > ul > li').forEach((menuItem) => {
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown) {
        menuItem.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

            // Close other dropdowns when one is opened
            document.querySelectorAll('.side-menu .dropdown').forEach((otherDropdown) => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.style.display = 'none';
                }
            });
        });
    }
});

// Optional: Close dropdowns when clicking outside the side menu
document.addEventListener('click', () => {
    document.querySelectorAll('.side-menu .dropdown').forEach((dropdown) => {
        dropdown.style.display = 'none';
    });
});
