
    let currentSlideIndex = 0;
    const totalSlides = Math.ceil(document.querySelectorAll('.carousel-item').length / 6);

    function showSlides(index) {
        const container = document.querySelector('.carousel-container');
        currentSlideIndex = (index + totalSlides) % totalSlides; // Loop around
        const offset = -currentSlideIndex * 100; // Adjust offset
        container.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function currentSlide(n) {
        showSlides(n - 1);
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlideIndex) {
                dot.classList.add('active');
            }
        });
    }

    // Initialize the carousel to show the first slide
    showSlides(0);

