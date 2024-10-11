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

$(function () {
    $(".toggle").on("click", function () {
        if ($(".menu").hasClass("active")) {
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        } else {
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    })
});