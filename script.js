let currentSlide = 0; 
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slide-container'); 

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides; 
    updateSlidePosition(); s
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; 
    updateSlidePosition(); 
});

function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

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
