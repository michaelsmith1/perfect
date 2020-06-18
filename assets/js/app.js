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
            $('.bottom-arrows-left-js').on('click', function (e) {
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
                        if(position > b/2){
                            position = -(b/2);
                        }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXJcclxuICAgICAgaW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2V0dXBfbGlzdGVuZXIoKTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgLy8gdmFyc1xyXG5cclxuXHJcbiAgICBzZXR1cF9saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubWVudS1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnUtYnVyZ2VyX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19idXJnZXInKS5zaWJsaW5ncygpLnRvZ2dsZUNsYXNzKCdtZW51X19saXN0X29wZW4nKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgb25lUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQoJy5wcm9qZWN0c19fc2xpZGVzJyksXHJcbiAgICAgICAgICAgICAgICBzbGlkZXMgPSBzbGlkZXIuZmluZCgnLnByb2plY3RzX19zbGlkZScpLFxyXG4gICAgICAgICAgICAgICAgaW5zY3JvbGwgPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNjcmVlbiA9IDAsXHJcbiAgICAgICAgICAgICAgICBuYXZpID0gJCgnLnByb2plY3RzLW5hdmlfX2l0ZW0nKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlckZ1bmMgPSBmdW5jdGlvbiAoc2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWluc2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZXEoc2NyZWVuKS5hZGRDbGFzcygncHJvamVjdHNfX3NsaWRlX3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzLmVxKChzY3JlZW4rMSkpLnJlbW92ZUNsYXNzKCdwcm9qZWN0c19fc2xpZGVfdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZXEoKHNjcmVlbisyKSkucmVtb3ZlQ2xhc3MoJ3Byb2plY3RzX19zbGlkZV92aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlcy5lcSgoc2NyZWVuKzMpKS5yZW1vdmVDbGFzcygncHJvamVjdHNfX3NsaWRlX3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aS5yZW1vdmVDbGFzcygncHJvamVjdHMtbmF2aV9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aS5lcShzY3JlZW4pLmFkZENsYXNzKCdwcm9qZWN0cy1uYXZpX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICQoJy5ib3R0b20tYXJyb3dzLWxlZnQtanMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoc2NyZWVuID4wKXtcclxuICAgICAgICAgICAgICAgIHNjcmVlbi0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xpZGVyRnVuYyhzY3JlZW4pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcuYm90dG9tLWFycm93cy1yaWdodC1qcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZihzY3JlZW4gPCAoc2xpZGVzLmxlbmd0aCAtIDEpKXtcclxuICAgICAgICAgICAgICAgIHNjcmVlbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xpZGVyRnVuYyhzY3JlZW4pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuYXZpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgc2NyZWVuID0gYTtcclxuICAgICAgICAgICAgICAgIHNsaWRlckZ1bmMoYSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGUuZGVsdGFZID4gMCAmJiBzY3JlZW4gPjApIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JlZW4tLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlLmRlbHRhWSA8IDAgJiYgc2NyZWVuIDwgKHNsaWRlcy5sZW5ndGggLSAxKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJGdW5jKHNjcmVlbilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCQoJy5wcm9qZWN0c19fc2xpZGVzJykubGVuZ3RoICE9PTApe1xyXG4gICAgICAgICAgICBvbmVQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoJy5uZWJvJykubGVuZ3RoIT09MCl7XHJcbiAgICAgICAgICAgICQoJy5wcm9qZWN0LWJ1dHRvbiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICQoJy5uZWJvJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLm5lYm8nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgaWYoJCgnLmV4aF9faXRlbScpLmxlbmd0aCAhPT0wKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlc0Z1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSAkKCcuZXhoX19pdGVtJyksXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzID0gJCgnLmV4aF9fbGlzdCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSBzY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgYSA9IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgYjtcclxuICAgICAgICAgICAgICAgIGlmKGRpc3BsYXkgPiA3Njcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGEgPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYiA9IChkaXNwbGF5L2EpKnNsaWRlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHNsaWRlLmNzcygnd2lkdGgnLGRpc3BsYXkvYSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXMuY3NzKCd3aWR0aCcsYik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9ICQoJy5leGhfX2xpc3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGUuZGVsdGFZID4gMCAmJiBjb3VudCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gKGRpc3BsYXkvYSkqY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuY3NzKCdsZWZ0JywgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlLmRlbHRhWSA8IDAgJiYgY291bnQgPiAtNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKGRpc3BsYXkvYSkqY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uID4gYi8yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gLShiLzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuY3NzKCdsZWZ0JywgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNGdW5jKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXNGdW5jKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgICAgIHJldHVybiBpbml0KCk7XHJcbiAgfSkoKTtcclxuICBpZigkKCcjcGFydGljbGVzLWpzJykubGVuZ3RoIT09MCl7XHJcbiAgICAgIHBhcnRpY2xlc0pTKFwicGFydGljbGVzLWpzXCIsIHtcclxuICAgICAgICAgIFwicGFydGljbGVzXCI6IHtcclxuICAgICAgICAgICAgICBcIm51bWJlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODAsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGVuc2l0eVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzaGFwZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwicG9seWdvblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5iX3NpZGVzXCI6IDVcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm9wYWNpdHlcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic3BlZWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMixcclxuICAgICAgICAgICAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGVlZFwiOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZV9taW5cIjogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCI6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDAuNCxcclxuICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1vdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBcInNwZWVkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJzdHJhaWdodFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImJvdW5jZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgXCJhdHRyYWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRlWVwiOiAxMjAwXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcclxuICAgICAgICAgICAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxyXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJncmFiXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJvbmNsaWNrXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJwdXNoXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyZXNpemVcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtb2Rlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiZ3JhYlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCI6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiYnViYmxlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInNwZWVkXCI6IDNcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyZXB1bHNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAwLjRcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJwdXNoXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljbGVzX25iXCI6IDRcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcbiAgfSJdfQ==
