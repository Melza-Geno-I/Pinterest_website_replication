    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.downNavBtn');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
    }
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }
    // Initially display the first slide
    showSlide(currentSlideIndex);

    // Automatically advance to the next slide every 3 seconds
    setInterval(nextSlide, 2000);

    function colorChange(){
        buttons.forEach((button)=>{
            if(button.style.display='block'){
                button.style.display="none";
            }
        });
    }
