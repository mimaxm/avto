$(document).ready(function() {
    $("#slider-box-1").twentytwenty({
        click_to_move: true, 
    });
    $("#slider-box-2").twentytwenty({
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

    var arrgetbtn=[];
      arrgetbtn.push({"title":"Viber","icon":"fwidgethelp-viber","link":"viber://chat?number=%2B375333374006","target":"_blank","color":"#FFFFFF","background":"#8456A7"});
      arrgetbtn.push({"title":"VKontakte","icon":"fwidgethelp-vk","link":"https://vk.com/im?sel=-100368303","target":"_blank","color":"#FFFFFF","background":"#507299"});
      arrgetbtn.push({"title":"Telegram","icon":"fwidgethelp-telegram_v2","link":"https://tttttt.me/avtospeccentr","target":"_blank","color":"#FFFFFF","background":"#27A5E7"});
        var WidGetButtonOptions = {
          id:"544f5d178d4fb631ff496a68755a4eb3",
          iconopen:"fwidgethelp-commenting-o",
          maintitle:"",
          mainbackground:"#35d3de",
          maincolor:"#f3f3f3",
          pulse:"widgethelp_pulse",
          fasize:"2",
          direction:"top",
          position:"rightbottom",
          arrbtn: arrgetbtn
      };
      (function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://getbtn.com/widget/index.php?id="+WidGetButtonOptions.id;
        document.getElementsByTagName("head")[0].appendChild(script);
      })();