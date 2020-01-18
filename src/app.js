import './bootstrap';
import 'bootstrap/js/dist/dropdown';

$(() => {
  const body = $('body');
  const menuToggle = $('.header__menu-toggle');
  menuToggle.click((e) => {
    body.addClass('mobile-menu-is-shown');
  })

  // dropdown
});