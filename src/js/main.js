$(document).ready(function () {
  ("use strict");
  // scroll top
  $(function () {
    $(window).scroll(function () {
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
    $(
      'a[href="#terms"], a[href="#info"], a[href="#questions"], a[href="#contacts"]'
    ).click(function () {
      $page.animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        1000
      );
      return false;
    });
  });
  // slider
  let mySwiper = new Swiper(".swiper-container-first", {
    // Optional parameters
    loop: true,
    width: 306,
    spaceBetween: 90,
    // число зацикленных слайдов
    loopAdditionalSlides: [4],
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    slidesPerView: 1,
    // для адаптива, работает как больше или равно(>=) указанной величины
    breakpoints: {
      320: {
        width: 288,
        spaceBetween: 40,
        centeredSlides: true,
      },
      577: {
        width: 380,
        spaceBetween: 40,
        centeredSlides: true,
      },
      768: {
        width: 380,
        spaceBetween: 60,
        centeredSlides: true,
      },
      993: {
        width: 306,
        spaceBetween: 30,
        centeredSlides: true,
      },
      1201: {
        width: 306,
        spaceBetween: 90,
      },
    },
    centeredSlides: true,
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

  // list open
  let list = document.querySelector(".form__select");
  list.addEventListener("click", (event) => {
    let target = event.target;
    let sub = document.querySelector(".select__sub");

    if (target) {
      sub.style.display = "block";
    } else if (target) {
      sub.style.display = "none";
    }
  });

  // youtube video
  let player;
  let playerTwo;
  function videoPlay(event) {
    event.target.playVideo();
  }

  $(".video__btn").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "BkGFhBypWrc",
      events: {
        onReady: videoPlay,
      },
    });
  });

  $(".other__wrapper").on("click", function onYouTubeIframeAPIReady() {
    playerTwo = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "5566-IfmPKA",
      events: {
        onReady: videoPlay,
      },
    });
  });

  $(".footer__form").validate({
    errorClass: "invalid",
    errorElement: "span",
    errorPlacement: function (error, element) {
      error.insertAfter($(element));
    },
    rules: {
      userPhone: {
      required: true,
      minlength: 16,
      },
    },
    
    messages: {
      userPhone: "Заполните поле"
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Сработало!" + response);
          // alert.toggleClass("alert--visible");
          $(form)[0].reset();
        },
        error: function (response) {
          console.log("Ошибка отправки.");
        },
      });
    },
  });
  // маска для телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш телефон",
  });

  let burger = document.querySelector(".burger")

  burger.addEventListener("click", myFunction);
  function myFunction() {
    var x = document.querySelector(".mobile-container");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  let 
});
