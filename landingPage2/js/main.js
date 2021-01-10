$(document).ready(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class = "slider-arrows slider-arrows__left" src="img/left-arrow-white.svg" alt="">',
    nextArrow:
      '<img class = "slider-arrows slider-arrows__right" src="img/header-array.svg" alt="array" />',
    asNavFor: ".header-dots",
  });
  $(".header-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    centerMode: false,
    focusOnSelect: false,
    infinite: false,
  });
  $(".slider-dots .slick-slide").on("click", function (event) {
    $(".header__slider").slick("slickGoTo", $(this).data("slickIndex"));
  });
  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class = "slider-arrows slider-arrows__left" src="img/left-arrow-white.svg" alt="">',
    nextArrow:
      '<img class = "slider-arrows slider-arrows__right" src="img/header-array.svg" alt="array" />',
  });
});
