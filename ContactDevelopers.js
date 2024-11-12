// Event listener for flipping the card to the back
document.querySelectorAll('.preview-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = button.closest('.thecard');
        if (card) {
            card.classList.add('flip'); // Adds the flip class to show the back
        } else {
            console.error('The card element was not found.');
        }
    });
});

// Event listener for flipping the card back to the front
document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = button.closest('.thecard');
        if (card) {
            card.classList.remove('flip'); // Removes the flip class to show the front
        } else {
            console.error('The card element was not found.');
        }
    });
});

