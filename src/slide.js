const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

if (slides.length === 0) {
    console.error('No slides found');
    return;
}

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

const slideInterval = setInterval(nextSlide, 500); // Change slide every 3 seconds