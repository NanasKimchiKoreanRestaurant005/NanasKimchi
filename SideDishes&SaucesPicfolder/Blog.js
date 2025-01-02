const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    // Get the modal elements
    const modal = document.getElementById("articleModal");
    const iframe = document.getElementById("articleFrame");
    const closeButton = document.querySelector(".close-btn");

    // Add event listeners to "Read more" links
    document.querySelectorAll(".read-more").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent the default link behavior
            iframe.src = link.href; // Set the iframe source to the link URL
            modal.style.display = "block"; // Show the modal
        });
    });

    // Close the modal when clicking the close button
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        iframe.src = ""; // Clear the iframe source
    });

    // Close the modal when clicking outside the content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            iframe.src = ""; // Clear the iframe source
        }
    });
});
