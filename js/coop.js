const swiper = new Swiper(".partner-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  slidesPerView: 5,
  watchOverflow: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  centeredSlides: true,
});
