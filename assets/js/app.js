  (function(){
    var
      init = function(){
        setup_listener();

      },
     // vars


    setup_listener = function () {
        $('.menu-burger').on('click', function () {
            $(this).toggleClass('menu-burger_active');
            $(this).closest('.menu__burger').siblings().toggleClass('menu__list_open')
        });

        var onePage = function () {
            var slider = $('.projects__slides'),
                slides = slider.find('.projects__slide'),
                inscroll = false,
                screen = 0,
                navi = $('.projects-navi__item'),
                sliderFunc = function (screen) {
                    if(!inscroll){
                        inscroll = true;
                        slides.eq(screen).addClass('projects__slide_visible');
                        slides.eq((screen+1)).removeClass('projects__slide_visible');
                        slides.eq((screen+2)).removeClass('projects__slide_visible');
                        slides.eq((screen+3)).removeClass('projects__slide_visible');
                        navi.removeClass('projects-navi__item_active');
                        navi.eq(screen).addClass('projects-navi__item_active');
                        setTimeout(function () {
                            inscroll = false;
                        },500);
                        hidePanel();
                    }

                };
            $('.bottom-arrows-left-js').on('click', function () {
                e.preventDefault();
                if(screen >0){
                screen--;
                }
                sliderFunc(screen)
            });
            $('.bottom-arrows-right-js').on('click', function (e) {
                e.preventDefault();
                if(screen < (slides.length - 1)){
                screen++;
                }
                sliderFunc(screen)
            });
            navi.on('click', function () {
                var a = $(this).index();
                screen = a;
                sliderFunc(a);
            });
            $('body').on('mousewheel', function (e) {

                if(e.deltaY > 0 && screen >0) {
                    screen--;
                } else if(e.deltaY < 0 && screen < (slides.length - 1)){
                    screen++;
                }
                sliderFunc(screen)
            })
        };
        if($('.projects__slides').length !==0){
            onePage();
        }
        if($('.nebo').length!==0){
            $('.project-button a').on('click', function (e) {
                e.preventDefault();
                $('.nebo').show();
            });
            $('.nebo').on('click', function (e) {
                $(this).hide();
            })
        }
        var count = 0;
        if($('.exh__item').length !==0){
            var slidesFunc = function () {
                var slide = $('.exh__item'),
                    slides = $('.exh__list'),
                    display = screen.width,
                    a = 2,
                    b;
                if(display > 767){
                    a = 4;
                }
                b = (display/a)*slide.length;
                slide.css('width',display/a);
                slides.css('width',b);
                var list = $('.exh__list');


                $('body').on('mousewheel', function (e) {
                    if(e.deltaY > 0 && count < 0) {
                        count++;
                        var position = (display/a)*count;
                        list.css('left', position);
                    } else if(e.deltaY < 0 && count > -4){
                        count--;
                        position = (display/a)*count;
                        list.css('left', position);
                    }
                })

            };
            $(window).resize(function(){
                slidesFunc();
            });
            slidesFunc();
        }

    };
      return init();
  })();
  if($('#particles-js').length!==0){
      particlesJS("particles-js", {
          "particles": {
              "number": {
                  "value": 80,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#ffffff"
              },
              "shape": {
                  "type": "circle",
                  "stroke": {
                      "width": 0,
                      "color": "#000000"
                  },
                  "polygon": {
                      "nb_sides": 5
                  },
                  "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                  }
              },
              "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "grab"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 150,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200,
                      "duration": 0.4
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true
      });

      requestAnimationFrame();
  }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAoZnVuY3Rpb24oKXtcclxuICAgIHZhclxyXG4gICAgICBpbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBzZXR1cF9saXN0ZW5lcigpO1xyXG5cclxuICAgICAgfSxcclxuICAgICAvLyB2YXJzXHJcblxyXG5cclxuICAgIHNldHVwX2xpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5tZW51LWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnbWVudS1idXJnZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2J1cmdlcicpLnNpYmxpbmdzKCkudG9nZ2xlQ2xhc3MoJ21lbnVfX2xpc3Rfb3BlbicpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBvbmVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gJCgnLnByb2plY3RzX19zbGlkZXMnKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlcyA9IHNsaWRlci5maW5kKCcucHJvamVjdHNfX3NsaWRlJyksXHJcbiAgICAgICAgICAgICAgICBpbnNjcm9sbCA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuID0gMCxcclxuICAgICAgICAgICAgICAgIG5hdmkgPSAkKCcucHJvamVjdHMtbmF2aV9faXRlbScpLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyRnVuYyA9IGZ1bmN0aW9uIChzY3JlZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighaW5zY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlcy5lcShzY3JlZW4pLmFkZENsYXNzKCdwcm9qZWN0c19fc2xpZGVfdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZXEoKHNjcmVlbisxKSkucmVtb3ZlQ2xhc3MoJ3Byb2plY3RzX19zbGlkZV92aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlcy5lcSgoc2NyZWVuKzIpKS5yZW1vdmVDbGFzcygncHJvamVjdHNfX3NsaWRlX3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzLmVxKChzY3JlZW4rMykpLnJlbW92ZUNsYXNzKCdwcm9qZWN0c19fc2xpZGVfdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpLnJlbW92ZUNsYXNzKCdwcm9qZWN0cy1uYXZpX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpLmVxKHNjcmVlbikuYWRkQ2xhc3MoJ3Byb2plY3RzLW5hdmlfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSw1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlUGFuZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgJCgnLmJvdHRvbS1hcnJvd3MtbGVmdC1qcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmKHNjcmVlbiA+MCl7XHJcbiAgICAgICAgICAgICAgICBzY3JlZW4tLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsaWRlckZ1bmMoc2NyZWVuKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLmJvdHRvbS1hcnJvd3MtcmlnaHQtanMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoc2NyZWVuIDwgKHNsaWRlcy5sZW5ndGggLSAxKSl7XHJcbiAgICAgICAgICAgICAgICBzY3JlZW4rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsaWRlckZ1bmMoc2NyZWVuKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmF2aS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIHNjcmVlbiA9IGE7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJGdW5jKGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlLmRlbHRhWSA+IDAgJiYgc2NyZWVuID4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuLS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZS5kZWx0YVkgPCAwICYmIHNjcmVlbiA8IChzbGlkZXMubGVuZ3RoIC0gMSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xpZGVyRnVuYyhzY3JlZW4pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZigkKCcucHJvamVjdHNfX3NsaWRlcycpLmxlbmd0aCAhPT0wKXtcclxuICAgICAgICAgICAgb25lUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKCcubmVibycpLmxlbmd0aCE9PTApe1xyXG4gICAgICAgICAgICAkKCcucHJvamVjdC1idXR0b24gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubmVibycpLnNob3coKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5uZWJvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgIGlmKCQoJy5leGhfX2l0ZW0nKS5sZW5ndGggIT09MCl7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXNGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnLmV4aF9faXRlbScpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlcyA9ICQoJy5leGhfX2xpc3QnKSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ID0gc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGEgPSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGI7XHJcbiAgICAgICAgICAgICAgICBpZihkaXNwbGF5ID4gNzY3KXtcclxuICAgICAgICAgICAgICAgICAgICBhID0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGIgPSAoZGlzcGxheS9hKSpzbGlkZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ3dpZHRoJyxkaXNwbGF5L2EpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzLmNzcygnd2lkdGgnLGIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCcuZXhoX19saXN0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS5kZWx0YVkgPiAwICYmIGNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAoZGlzcGxheS9hKSpjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5jc3MoJ2xlZnQnLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGUuZGVsdGFZIDwgMCAmJiBjb3VudCA+IC00KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAoZGlzcGxheS9hKSpjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5jc3MoJ2xlZnQnLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0Z1bmMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlc0Z1bmMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgICAgcmV0dXJuIGluaXQoKTtcclxuICB9KSgpO1xyXG4gIGlmKCQoJyNwYXJ0aWNsZXMtanMnKS5sZW5ndGghPT0wKXtcclxuICAgICAgcGFydGljbGVzSlMoXCJwYXJ0aWNsZXMtanNcIiwge1xyXG4gICAgICAgICAgXCJwYXJ0aWNsZXNcIjoge1xyXG4gICAgICAgICAgICAgIFwibnVtYmVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4MCxcclxuICAgICAgICAgICAgICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiY29sb3JcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInNoYXBlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJwb2x5Z29uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmJfc2lkZXNcIjogNVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaW1nL2dpdGh1Yi5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTAwXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwib3BhY2l0eVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMC41LFxyXG4gICAgICAgICAgICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzaXplXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNwZWVkXCI6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaXplX21pblwiOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMTUwLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogMC40LFxyXG4gICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDFcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibW92ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIFwic3BlZWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcInN0cmFpZ2h0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiYm91bmNlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBcImF0dHJhY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0ZVhcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVZXCI6IDEyMDBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgICAgICAgICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXHJcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIm9uaG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcImdyYWJcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcIm9uY2xpY2tcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcInB1c2hcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJlc2l6ZVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1vZGVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDFcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJidWJibGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogOCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3BlZWRcIjogM1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJlcHVsc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDAuNFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBcInJlbW92ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiAyXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuICB9Il19
