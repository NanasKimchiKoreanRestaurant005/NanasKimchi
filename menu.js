document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sideMenu.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', () => {
        const cuisineLink = document.querySelector('li > a.active'); // Target the Cuisine link
        const dropdownMenu = document.querySelector('.dropdown');  // Target the dropdown menu
    
        cuisineLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            dropdownMenu.style.display =
                dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    
        // Optional: Close the dropdown if clicked outside
        document.addEventListener('click', (event) => {
            if (!cuisineLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    });
    

    // Card flipping functionality
    document.addEventListener('click', (event) => {
        // Handle Preview Button click
        if (event.target.classList.contains('preview-btn')) {
            const card = event.target.closest('.maincontainer')?.querySelector('.thecard');
            if (card) {
                card.classList.add('flip');
            } else {
                console.error('Card element not found for preview button.');
            }
        }

        // Handle Back Button click
        if (event.target.classList.contains('back-btn')) {
            const card = event.target.closest('.maincontainer')?.querySelector('.thecard');
            if (card) {
                card.classList.remove('flip');
            } else {
                console.error('Card element not found for back button.');
            }
        }
    });
});
