const slides = document.querySelectorAll('.slide');
const carousalPointers = document.querySelectorAll('.carousal-pointers li');
const downButtons= document.querySelectorAll('.downNavBtn');
let currentSlideIndex = 0;
let intervalId;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

// Function to handle the click event on carousel pointers
function handleIndicatorClick(index) {
    // console.log(index);
    document.querySelector('.carousal-pointers .selected').classList.remove('selected');
    carousalPointers[index].classList.add('selected');
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    downButtons[index].classList.add('active');
     // console.log(downButtons[index]);
}

// Function to automatically change the carousel
function autoChangeCarousel() {
    currentSlideIndex = (currentSlideIndex + 1) % carousalPointers.length;
    handleIndicatorClick(currentSlideIndex);
}

// Initialize and start the carousel
function startCarousel() {
    showSlide(currentSlideIndex);
    intervalId = setInterval(autoChangeCarousel, 2000);
}

// Event listeners for manual carousel control
carousalPointers.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        handleIndicatorClick(index);
    });
});

// Initial setup
startCarousel();
