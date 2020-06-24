$(document).ready(function () {
  "use strict"; 
  let mySwiper = new Swiper(".swiper-container", {
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

  // let prev = $(".swiper-button-prev");
  // let next = $(".swiper-button-next");

  // next.css("left", prev.width() + 13);
  // bullets.css("left", prev.width() + 25);
  // // bullets.css("top", bullets.height() - 40);

});
