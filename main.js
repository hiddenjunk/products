/*var currentSlide = 1;

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff'; // Change to your desired background color
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});*/

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slider-item').length;

function showSlide(index) {
    const sliderItems = document.querySelectorAll('.slider-item');

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    sliderItems.forEach((item, i) => {
        if (i === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}