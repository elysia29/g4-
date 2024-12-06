

// Carousel Functionality
const carouselImages = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentImageIndex = 0;

const updateCarousel = () => {
    carouselImages.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
};

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    updateCarousel();
});

updateCarousel();

// Expanding Cards
const cards = document.querySelectorAll('.card');

cards.forEach(card) 
    card.addEventListener('click', () => {
        cards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
    });