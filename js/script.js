$(document).ready(function () {
  $('.slider-img').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    infinite: false,
  });
  $('.hits-inner').slick({
    dots: false,
    slidesToShow: 4,
    arrows: true,
    infinite: false,
    infinite: true,
  });
});