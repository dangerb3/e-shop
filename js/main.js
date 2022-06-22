const swiper = new Swiper(".catalog-swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,


  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  grabCursor: true,
  slidesPerView: 5,
  grid: {
    rows: 2,
    fill: "row",
  },
  watchOverflow: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
});
const swiper2 = new Swiper(".hero-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
});
const swiper3 = new Swiper(".hero2-swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  grabCursor: true,
  slidesPerView: 5,
  watchOverflow: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
});
const swiper4 = new Swiper(".sales-swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  grabCursor: true,
  slidesPerView: 5,
  grid: {
    rows: 2,
    fill: "row",
  },
  watchOverflow: true,
  spaceBetween: 20,
});
let swiper5 = new Swiper(".sale-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  slidesPerView: 1,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
});
const swiper7 = new Swiper(".news-swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
  grabCursor: true,
  slidesPerView: 'auto',
  grid: {
    rows: 2,
    fill: "row",
  },
  watchOverflow: true,
});
const swiper8 = new Swiper(".project-swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next6",
    prevEl: ".swiper-button-prev6",
  },
  grabCursor: true,
  watchOverflow: true,
});