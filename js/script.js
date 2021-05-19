$(document).ready(function() {
    $(".slider__box").twentytwenty({
        click_to_move: true, 
    });
    $('.team__wrap').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 2000,
       arrows: false,
       responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
 });