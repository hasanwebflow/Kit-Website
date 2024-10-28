$('.navbar_toggle_button').on('click', function () {
  $('.collapse_nav_menu').toggleClass('active');
  $(this).toggleClass('active');
});

// jquery_custom_tab_menu_end

$('.nav_link_dropdown').on('click', function () {
  $('.nav_link_dropdown_list').toggleClass('active');
});

//jquery_custom_menu_item_end

$(document).ready(function () {
  new VenoBox({
    selector: '.video-popup',
  });
});

// venobox video popup end

var swiper = new Swiper('.mySwiper', {});

// services swiper slider end

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: '.events_slider_pagination ',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.prev',
    prevEl: '.next',
  },
});

// events swiper slider progresbar end
