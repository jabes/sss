document.addEventListener('DOMContentLoaded', function () {

    let currentIndex = 0;

    const prevButton = document.getElementById('showPrevImage');
    const nextButton = document.getElementById('showNextImage');
    const slidesContainer = document.getElementById('slidesContainer');
    const slides = slidesContainer.getElementsByTagName('img');
    const dotsContainer = document.getElementById('dotsContainer');
    const dots = dotsContainer.getElementsByTagName('button');

    const states = {
        on: 'state-1',
        off: 'state-0',
    };

    const symbols = {
        on: '⚫',
        off: '⚪',
    };

    function setIndex(newIndex) {
        const minIndex = 0;
        const maxIndex = slides.length - 1;
        if (newIndex > maxIndex) {
            currentIndex = minIndex;
        } else if (newIndex < minIndex) {
            currentIndex = maxIndex;
        } else {
            currentIndex = newIndex;
        }
    }

    function enableSlide(index) {
        const slide = slides[index];
        slide.classList.remove(states.off);
        slide.classList.add(states.on);
    }

    function disableSlide(index) {
        const slide = slides[index];
        slide.classList.remove(states.on);
        slide.classList.add(states.off);
    }

    function disableAllSlides() {
        const slideTotal = slides.length;
        for (let i = 0; i < slideTotal; i++) {
            disableSlide(i);
        }
    }

    function enableDot(index) {
        const dot = dots[index];
        dot.textContent = symbols.on;
    }

    function disableDot(index) {
        const dot = dots[index];
        dot.textContent = symbols.off;
    }

    function disableAllDots() {
        const dotTotal = dots.length;
        for (let i = 0; i < dotTotal; i++) {
            disableDot(i);
        }
    }

    function slideToImage(newIndex) {
        setIndex(newIndex);
        disableAllSlides();
        disableAllDots();
        enableSlide(currentIndex);
        enableDot(currentIndex);
    }

    function showPrevImage() {
        slideToImage(currentIndex - 1);
    }

    function showNextImage() {
        slideToImage(currentIndex + 1);
    }

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    for (let dot of dots) {
        dot.addEventListener('click', function (event) {
            const dotPressed = event.target;
            const index = Array.from(dots).indexOf(dotPressed);
            slideToImage(index);
        });
    }

}, false);
