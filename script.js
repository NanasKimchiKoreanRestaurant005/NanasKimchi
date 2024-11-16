let currentSlide = 0; 
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slide-container'); 

// Event listener for the "Next" button
document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

// Event listener for the "Previous" button
document.querySelector('.prev').addEventListener('click', () => {
    moveToPreviousSlide();
});

// Auto-slide interval (adjust timing as needed, e.g., 3000ms = 3 seconds)
let autoSlideInterval = setInterval(moveToNextSlide, 5000);

// Function to move to the next slide
function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    updateSlidePosition();
}

// Function to move to the previous slide
function moveToPreviousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; 
    updateSlidePosition();
}

// Function to update the slide position
function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Pause auto-slide when navigating manually
document.querySelector('.slide-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.slide-container').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(moveToNextSlide, 3000);
});

// Hamburger menu toggle functionality
document.querySelector(".toggle").addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    const toggleIcon = document.querySelector(".toggle a i");

    menu.classList.toggle("active");

    // Change icon based on menu state
    if (menu.classList.contains("active")) {
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
    } else {
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
    }
});
