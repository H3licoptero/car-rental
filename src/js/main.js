$(document).ready(function () {
  "use strict"; 
  let mySwiper = new Swiper(".swiper-container-first", {
    // Optional parameters
    loop: true,
    width: 306,
    spaceBetween: 65,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    // slidesPerView: 2,
  });
  let mySwiperSecond = new Swiper(".swiper-container-second", {
    // Optional parameters
    loop: true,
    width: 702,
    spaceBetween: 65,
    navigation: {
      prevEl: ".swiper-button-prev_second",
      nextEl: ".swiper-button-next_second",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    slidesPerView: 1,
    centeredSlides: true,
  });
  
});
