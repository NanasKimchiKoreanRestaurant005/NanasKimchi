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
    };

    // Function to generate menu items
    const generateMenuItems = (data) => {
        for (const category in data) {
            const menuContainer = document.querySelector(`#${category} .menu-items`);
            if (!menuContainer) {
                console.error(`No menu container found for category: ${category}`);
                continue;
            }
            data[category].forEach(item => {
                const mainContainer = document.createElement('div');
                mainContainer.classList.add('maincontainer');
                mainContainer.setAttribute('data-item', item.name.toLowerCase());

                const theCard = document.createElement('div');
                theCard.classList.add('thecard');

                const theFront = document.createElement('div');
                theFront.classList.add('thefront');
                const frontImg = document.createElement('img');
                frontImg.src = item.image;
                const frontTitle = document.createElement('h3');
                frontTitle.textContent = item.name;
                theFront.appendChild(frontImg);
                theFront.appendChild(frontTitle);

                const theBack = document.createElement('div');
                theBack.classList.add('theback');
                const backTitle = document.createElement('h3');
                backTitle.textContent = item.name;
                const backButton = document.createElement('button');
                backButton.classList.add('back-btn');
                backButton.textContent = 'Back';
                theBack.appendChild(backTitle);
                theBack.appendChild(backButton);

                theCard.appendChild(theFront);
                theCard.appendChild(theBack);
                mainContainer.appendChild(theCard);

                const previewButton = document.createElement('button');
                previewButton.classList.add('preview-btn');
                previewButton.textContent = 'Preview';
                mainContainer.appendChild(previewButton);

                menuContainer.appendChild(mainContainer);
            });
        }
    };

    // Generate menu items on page load
    generateMenuItems(data);
    addCardFlipEventListeners();

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const noResultsMessage = document.getElementById('no-results');

    const filterMenuItems = () => {
        const query = searchInput.value.toLowerCase();
        const menuItems = document.querySelectorAll('.maincontainer'); // Dynamic fetching
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

    // Add event listener for search input
    searchInput.addEventListener('input', debounce(filterMenuItems, 300));
});
