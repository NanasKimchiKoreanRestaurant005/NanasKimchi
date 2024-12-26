document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sideMenu.classList.toggle('active');
    });

    // Card flipping functionality
    const addCardFlipEventListeners = () => {
        const previewButtons = document.querySelectorAll('.preview-btn');
        const backButtons = document.querySelectorAll('.back-btn');

        previewButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.maincontainer')?.querySelector('.thecard');
                if (card) {
                    card.classList.add('flip');
                } else {
                    console.error('The card element was not found.');
                }
            });
        });

        backButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.maincontainer')?.querySelector('.thecard');
                if (card) {
                    card.classList.remove('flip');
                } else {
                    console.error('The card element was not found.');
                }
            });
        });
    };

    addCardFlipEventListeners();

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const menuItems = document.querySelectorAll('.maincontainer');
    const noResultsMessage = document.getElementById('no-results');

    const filterMenuItems = () => {
        const query = searchInput.value.toLowerCase();
        let hasResults = false;

        menuItems.forEach(item => {
            const itemName = item.getAttribute('data-item');
            if (itemName && itemName.toLowerCase().includes(query)) {
                item.style.display = 'block';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });

        noResultsMessage.style.display = hasResults ? 'none' : 'block';
    };

    // Debounce function to improve performance
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    // Add event listeners for search input and button
    searchInput.addEventListener('input', debounce(filterMenuItems, 300));
    searchButton.addEventListener('click', filterMenuItems);
});
