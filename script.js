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

