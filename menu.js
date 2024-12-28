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

// Carousel swipe functionality for mobile viewports
    const carousel = document.querySelector('.carousel-content');
    let startX, currentX, isDragging = false;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        carousel.style.transform = `translateX(${diffX}px)`;
    });

    carousel.addEventListener('touchend', () => {
        isDragging = false;
        carousel.style.transition = 'transform 0.3s ease-in-out';
        const diffX = currentX - startX;
        if (diffX > 50) {
            // Swipe right
            moveCarousel(-1);
        } else if (diffX < -50) {
            // Swipe left
            moveCarousel(1);
        } else {
            // Reset position
            carousel.style.transform = 'translateX(0)';
        }
    });

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');

    function moveCarousel(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = items.length - 1;
        } else if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }