 

 // toggle functionality

  $('.hamburger').on('click', function () {
    $('.nav_links').slideToggle(300);
  });


// slider functionality
  $(document).ready(function(){
    $(".academy-slider").owlCarousel({
      loop: true,
       nav: true, 
      margin: 20,
      dots: false,         
      autoplay: true,
       center: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        661: {
          items:2
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
  
      }
    });
  });


// marque functionality
  $(document).ready(function () {
    function startMarquee() {
      const $marquee = $('.marquee-content');
      const containerWidth = $('.marquee').width();
      const contentWidth = $marquee.width();

      // Reset position to right edge
      $marquee.css({ transform: `translateX(${containerWidth}px)` });

      // Animate to the left
      $marquee.animate(
        { left: -contentWidth },
        {
          duration: 20000, 
          easing: 'linear',
          step: function (now, fx) {
            // Use transform for smoother animation
            $marquee.css('transform', `translateX(${now}px)`);
          },
          complete: startMarquee 
        }
      );
    }

    startMarquee();
  });

// video functionality
  $(document).ready(function(){
    function toggleButtons(isPlaying) {
  $("#playButton").css("display", isPlaying ? "none" : "flex");
  $("#pauseButton").css("display", isPlaying ? "flex" : "none");
}
$("#playButton").click(function(){
  $("#myVideo")[0].play();
  toggleButtons(true);  
});

$("#pauseButton").click(function(){
  $("#myVideo")[0].pause();
  toggleButtons(false);  
});


  });


// client questions functionality 
    $(document).ready(function() {
        $(".clients_questions-slider").owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            // center: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 3
                },
                661: {
                    items: 5
                },
                768: {
                    items: 6
                },
                1024: {
                    items: 7
                },

            }
        });
    });


    // accordion functionality
   // $(document).ready(function(){
   //       $('.accordion p').on('click', function () {
   //          $(".panel").slideToggle(300);
   //          $(".accordion img").css("display" , "none");
   //          $("#chevron-down").css("display" , "flex");

   //     })
   // })


//accordion functionality
   $(document).ready(function(){
    $('.accordion').click(function () {
        const isOpen = $(this).next('.panel').is(':visible');

        // Close all panels
        $('.panel').slideUp(300);
        $('.arrow').show(); 
        $('.chevron-down').hide();  

        if (!isOpen) {
            $(this).next('.panel').slideDown(300);
            $(this).find('.arrow').hide();  
            $(this).find('.chevron-down').show();  
        }
    });
});
  $(document).ready(function(){
    $(".testimonial_card").owlCarousel({
      loop: true,
       nav: true, 
      dots: false,         
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        661: {
          items:2
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        },
  
      }
    });
  });

  $(document).ready(function(){
    $(".metoda_cards_slider").owlCarousel({
      loop: true,
       nav: true, 
      dots: false,         
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        661: {
          items:2
        },
        768: {
          items: 3
        },
        1024: {
          items: 3
        },
  
      }
    });
  });


// academy page slider
$(document).ready(function(){
  $(".academy_cards").owlCarousel({
    loop: true,
    margin: 40, 
    nav: true, 
    dots: false,
    autoplay: true,
    center:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      661: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
});

