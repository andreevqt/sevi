import './bootstrap';
import 'bootstrap/js/dist/dropdown';
import AOS from 'aos';

AOS.init({
  delay: 200,
  duration: 1500,
  mirror: true,
  once: true
});

$(() => {
  const body = $('body');

  const menuToggle = $('.header__menu-toggle');
  menuToggle.click((e) => {
    body.toggleClass('mobile-menu-is-shown');
  })

  const handleToTop = () => {
    const offset = 100;
    if ($(window).scrollTop() > offset) {
      body.addClass('to-top');
    } else {
      body.removeClass('to-top');
    }
  }

  handleToTop();

  $(window).scroll(handleToTop);
  $('.button--to-top').click((e) => {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });

  const header = $('.header');
  const handleHeader = (e) => {

    const scroll = $(window).scrollTop();

    if (scroll >= 300) {
      header.addClass('header--is-hidden');
    } else {
      header.removeClass('header--is-hidden');
    }

    if(scroll >= 400) {
      header.addClass('header--transition');
    } else {
      header.removeClass('header--transition');
    }

    if (scroll >= 600) {
      header.addClass('header--transition-start');
    } else {
      header.removeClass('header--transition-start');
    }

  };
  handleHeader()

  $(window).scroll(handleHeader);
});