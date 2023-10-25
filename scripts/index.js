
const slides = document.querySelectorAll('.slide');
const carousalPointers = document.querySelectorAll('.carousal-pointers li');
const downButton = document.querySelector('.downNavBtn');
let currentSlideIndex = 0;

// Initialize and start the carousel
function startCarousel() {
    showSlide(currentSlideIndex);
    setInterval(autoChangeCarousel, 2000);
}

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

// Event listeners for manual carousel control
carousalPointers.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        handleIndicatorClick(index);
    });
});

// Initial setup
startCarousel();

// Function to automatically change the carousel
function autoChangeCarousel() {
    // Remove the current color class
    downButton.classList.remove(`button-color-${currentSlideIndex + 1}`);

    // Update the currentSlideIndex
    currentSlideIndex = (currentSlideIndex + 1) % carousalPointers.length;

    // Add the new color class
    downButton.classList.add(`button-color-${currentSlideIndex + 1}`);

    handleIndicatorClick(currentSlideIndex);
}

//button color change
function handleIndicatorClick(index) {
    // Remove the current color class from the button
    downButton.classList.remove(`button-color-${currentSlideIndex + 1}`);

    // Apply the appropriate color class to the button based on the index
    switch (index) {
        case 0:
            downButton.classList.add('button-color-1');
            break;
        case 1:
            downButton.classList.add('button-color-2');
            break;
        case 2:
            downButton.classList.add('button-color-3');
            break;
        case 3:
            downButton.classList.add('button-color-4');
            break;
        default:
            break;
    }

    // Remove the 'selected' class from all pointers
    carousalPointers.forEach(pointer => {
        pointer.classList.remove('selected');
    });

    // Add the 'selected' class to the selected pointer
    carousalPointers[index].classList.add('selected');
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}
