let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slider-item').length;

function messageSeller() {
	var productId = document.querySelector('.product-details').getAttribute('data-product-id');

	var messengerLink = "https://www.messenger.com/t/100040491547762";

	window.open(messengerLink, '_blank');
}
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
