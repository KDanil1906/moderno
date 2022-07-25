$(function () {

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    prefix: "$"
  });

  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "12px",

  });

  $('.product-slider__inner').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  
  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });


  let mixer = mixitup('.products__inner-box');

});