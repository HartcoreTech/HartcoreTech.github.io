document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideInterval = 5000; // Change slide every 10 seconds

    function showSlide(index) {
        // Remove active class from the previous slide
        slides[currentIndex].classList.remove('active');

        // Update currentIndex to the new index and add active class to the new slide
        currentIndex = index;
        slides[currentIndex].classList.add('active');
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide 
        showSlide(nextIndex);
    }

    // Initialize the slideshow
    showSlide(currentIndex);
    setInterval(nextSlide, slideInterval); // Start the automatic slideshow
});
