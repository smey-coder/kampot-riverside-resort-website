let slideIndex = 1;
let slideInterval;

// Initialize
showSlides(slideIndex);
startAutoSlide();

// Next/Previous controls
function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

// Dot controls
function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

// Auto Slide
function startAutoSlide() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 8000); // 8 seconds
}

// Show Slides
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Activate dot
    dots[slideIndex - 1].classList.add("active");
}
const slider = document.querySelector(".slideshow-container");

slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

slider.addEventListener("mouseleave", () => {
    startAutoSlide();
});