$(document).ready(function () {
  $(".header-slider").slick({
    arrows: true,
    // убирает стрелки при разрешении 768px
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".news__slider").slick();
  // для смены текста стрелок
  setInterval(() => {
    $(".slick-prev").text("<");
    $(".slick-next").text(">");
  }, 100);

  // кнопка меню на мобилках
  $(".gmr-btn").click(function () {
    $(".gmr-btn").toggleClass("gmr-btn__active");
    $(".gmr-menu").toggleClass("gmr-menu__active");
  });
  // изменение элементов при прогрутке
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > $(".header").height()) {
      $(".header-top-contact").css(
        "margin-top",
        -$(".header-top-contact").height()
      );
      $(".logo").css("padding", "1rem 0rem");
    } else {
      $(".header-top-contact").css("margin-top", "0px");
      $(".logo").css("padding", "2.3rem 0rem");
    }
  });
  $("body").on("click", '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
  });
});
