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
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });


  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('input[type="file"], select').styler();


  let mixer = mixitup('.products__inner-box');

});