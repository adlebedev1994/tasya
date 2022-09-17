var swiper = new Swiper(".swiper-container", {
  loopedSlides: 8,
  loop: true,
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: {
    releaseOnEdges: false,
  },
});

var thumb = document.querySelectorAll(".thumbContainer");

thumb.forEach(function(image, index) {
  var delay = index * 70;
  image.classList.add("fadeInSlide");
  image.style.animationDelay = delay + "ms";
});