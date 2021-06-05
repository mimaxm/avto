$(window).on('load', function(){
    $("#slider-box-1").twentytwenty({
        click_to_move: true, 
    });
    $("#slider-box-2").twentytwenty({
      click_to_move: true, 
    });
    $("#slider-box-3").twentytwenty({
      click_to_move: true, 
    });
    $("#slider-box-4").twentytwenty({
      click_to_move: true, 
    });

  const gallerySlider = $('.gallery__slide').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 801,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.arrows .prev').click(() => {
    gallerySlider.slick('slickPrev');
  })

  $('.arrows .next').click(() => {
    gallerySlider.slick('slickNext');
  })
    
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

    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
    $('.header__burger').click(function(){
      $('.header__burger, .menu').toggleClass('active');
      $('.body').toggleClass('lock');
      });

      $('.menu__item-link, .contacts-top__geo-link').click(function(){
          $('.header__burger, .menu').removeClass('active');
          $('.body').removeClass('lock');
      });

      $(document).ready(function() {
        // Show or hide the sticky footer button
        $(window).scroll(function() {
          if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
          } else {
            $('.go-top').fadeOut(200);
          }
        });
        
        // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
          
          $('html, body').animate({scrollTop: 0}, 300);
        })
      });
    });

  const addBtn = document.querySelector(".add");
  const wrapper = document.querySelector(".wrapper__buttons");

  addBtn.addEventListener("click", () => {
    wrapper.classList.toggle("wrapper-open");
  });
