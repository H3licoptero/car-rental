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
      el: ".pagination-second",
      type: "fraction",
      currentClass: "current-second",
      totalClass: "total-second",
    },
    slidesPerView: 1,
    centeredSlides: true,
  });

  let mySwiperThird = new Swiper(".swiper-container-third", {
    // Optional parameters
    loop: true,
    width: 256,
    spaceBetween: 185,
    navigation: {
      prevEl: ".swiper-button-prev_third",
      nextEl: ".swiper-button-next_third",
    },
    pagination: {
      el: ".pagination-third",
      type: "fraction",
      currentClass: "current-third",
      totalClass: "total-third",
    },
    slidesPerView: 1,
    centeredSlides: true,
  });

  // scroll top
  $(function () {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $(".button-top").fadeIn();
      } else {
        $(".button-top").fadeOut();
      }
    });
    $(".button-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
    let $page = $("html, body");
    $('a[href="#terms"], a[href="#info"], a[href="#questions"], a[href="#contacts"]').click(
      function () {
        $page.animate(
          { scrollTop: $($.attr(this, "href")).offset().top },
          1000
        );
        return false;
      }
    );
  });
});
