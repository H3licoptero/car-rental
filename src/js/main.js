$(document).ready(function () {
  "use strict";

  let modal = $(".modal"),
    closeBtn = $(".modal__button");

  modal.on("click", function (e) {
    if (modal.has(e.target).length === 0 || closeBtn.is(e.target)) {
      modal.toggleClass("modal--visible");
    }
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27 && modal.closest("modal--visible").length) {
      modal.toggleClass("modal--visible");
    }
  });
  // scroll top
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $(".button-top").fadeIn();
        // $(".")
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

  // youtube video
  let player;

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

  let firstBtn = $(".slider__btn-first");
  let secondBtn = $(".slider__btn-second");
  let thirdBtn = $(".slider__btn-third");
  let fourthBtn = $(".slider__btn-fourth");

  $(firstBtn).on("click", function () {
    let frame = $(".frame__first");
    console.log(frame);
    if (firstBtn) {
      frame.css({ position: "unset" }).append(block);
      firstBtn.css({ display: "none" });
    }
  });

  $(secondBtn).on("click", function () {
    let frame = $(".frame__second");
    console.log(frame);
    if (secondBtn) {
      frame.css({ position: "unset" }).append(block);
      secondBtn.css({ display: "none" });
    }
  });

  $(thirdBtn).on("click", function () {
    let frame = $(".frame__third");
    console.log(frame);
    if (thirdBtn) {
      frame.css({ position: "unset" }).append(block);
      thirdBtn.css({ display: "none" });
    }
  });

  $(fourthBtn).on("click", function () {
    let frame = $(".frame__fourth");
    console.log(frame);
    if (fourthBtn) {
      frame.css({ position: "unset" }).append(block);
      fourthBtn.css({ display: "none" });
    }
  });

  // validate
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
      userPhone: "Заполните поле",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Сработало!" + response);
          $(form)[0].reset();
          modal.toggleClass("modal--visible");
          ym(65264992, "reachGoal", "request");
          return true;
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

  let burger = document.querySelector(".burger");

  burger.addEventListener("click", myFunction);
  function myFunction() {
    var x = document.querySelector(".mobile-container");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  // list
  let list = document.querySelector(".select__list");
  let select = document.querySelector(".select");
  let items = document.querySelectorAll(".select__item");
  let value = document.querySelectorAll(".select__value");

  select.addEventListener("click", () => {
    let target = event.target;
    if (target) {
      list.classList.toggle("inactive-list");
    }
  });

  items.forEach((el, i) => {
    el.addEventListener("click", (event) => {
      let target = event.target;
      console.log(target.innerHTML);
      
      if (target.matches(".select__item")) {
        select.innerHTML = target.innerHTML;
        list.classList.toggle("inactive-list");
      }
    });
  });

  // textvideo off
  let videoBtn = document.querySelector(".video__btn");

  videoBtn.addEventListener("click", () => {
    let target = event.target;
    let videoText = document.querySelector(".video__text-wrap");
    if (target) {
      videoText.style.display = "none";
    }
  });
// lazyload
  let block = document.createElement("iframe");
  block.setAttribute(
    "src",
    "https://www.youtube.com/embed/BkGFhBypWrc",
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    "allowfullscreen"
  );

  // console.log(block);
  let frame = document.querySelector(".frame");
  let btnVideo = document.querySelector(".slider__btn");

  btnVideo.addEventListener("click", startLazyBlock);
  
  function startLazyBlock() {
    if (!frameLoaded) {
      let block = document.createElement("iframe");
      block.setAttribute(
        "src",
        "https://www.youtube.com/embed/BkGFhBypWrc",
        "allow",
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        "allowfullscreen"
      );
      
      frameLoaded = true;
      console.log(block);
    }
  }
});