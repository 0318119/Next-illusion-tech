$(document).ready(function() {
    $('.card-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      infinite: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.card-slider-two').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      infinite: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.card-slider-three').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      infinite: true,
      speed: 500,
      // fade: true,
      // slide: '> div',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.card-slider-four').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      infinite: true,
      speed: 500,
      // fade: true,
      // slide: '> div',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.all_card').slick('setPosition');
    })
  });