$(function () {


  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rihgtside-menu--close');

  });

  $('.rideside-close').on('click', function () {
    $('.rightside-menu').addClass('rihgtside-menu--close');

  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,

  });



  var mixer = mixitup('.galery__inner', {
    load: {
      filter: '.living'
    }
  });



});

