$(document).ready(function() {
    $("#slider-box-1").twentytwenty({
        click_to_move: true, 
    });
    $("#slider-box-2").twentytwenty({
      click_to_move: true, 
  });

  $('.gallery__slide').slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
    
  // $('.gallery__slide').slick();
  // $('.gallery__slide').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.gallery__nav'
  // });
  // $('.gallery__nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.gallery__slide',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });
    $('.team__wrap').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
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

     $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
 });