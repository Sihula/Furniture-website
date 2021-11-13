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

  var mixer = mixitup('.galery__inner', {
    load: {
      filter: '.living'
    }
  });



});