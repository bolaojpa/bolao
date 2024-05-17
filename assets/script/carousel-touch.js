document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector("#carouselExample");
    const hammer = new Hammer(carousel);

    hammer.on("swipeleft", () => {
        bootstrap.Carousel.getInstance(carousel).next();
    });

    hammer.on("swiperight", () => {
        bootstrap.Carousel.getInstance(carousel).prev();
    });
});
