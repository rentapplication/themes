$(document).ready(function(){$(".nav-icon3").click(function(){$(this).toggleClass("open"),$(".mobile-menu").toggleClass("active")}),$(window).scroll(function(){$(this).scrollTop()>1?$(".header-nav").addClass("active"):$(".header-nav").removeClass("active")}),$(".fancybox-modal").fancybox({padding:0}),$(".report-button").on("click",function(e){e.preventDefault();var a=$(this),o=a.index();a.siblings().removeClass("active"),a.addClass("active"),$(".change-images").removeClass("active").eq(o).addClass("active")}),$(document).on("click",".play-video",function(e){e.preventDefault(),$(this).css("display","none"),$(".background-video").css("display","none"),$(".background-image").remove(),$("#video1")[0].play()}),$(".carousel-container").slick({dots:!0,infinite:!0,slidesToShow:1,prevArrow:!1,nextArrow:!1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwidGhpcyIsInRvZ2dsZUNsYXNzIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZhbmN5Ym94IiwicGFkZGluZyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHNlbGYiLCJ0YWJJbmRleCIsImluZGV4Iiwic2libGluZ3MiLCJlcSIsImNzcyIsInJlbW92ZSIsInBsYXkiLCJzbGljayIsImRvdHMiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUNkRixFQUFFLGNBQWNHLE1BQU0sV0FDbEJILEVBQUVJLE1BQU1DLFlBQVksUUFDcEJMLEVBQUUsZ0JBQWdCSyxZQUFZLFlBRWxDTCxFQUFFTSxRQUFRQyxPQUFPLFdBQ1RQLEVBQUVJLE1BQU1JLFlBQWMsRUFDdEJSLEVBQUUsZUFBZVMsU0FBUyxVQUUxQlQsRUFBRSxlQUFlVSxZQUFZLFlBSXJDVixFQUFFLG1CQUFtQlcsVUFBVUMsUUFBUyxJQUV4Q1osRUFBRSxrQkFBa0JhLEdBQUcsUUFBUyxTQUFTQyxHQUNyQ0EsRUFBRUMsZ0JBQ0YsSUFBSUMsR0FBUWhCLEVBQUVJLE1BQ1ZhLEVBQVdELEVBQU1FLE9BQ3JCRixHQUFNRyxXQUFXVCxZQUFZLFVBQzdCTSxFQUFNUCxTQUFTLFVBQ2ZULEVBQUUsa0JBQWtCVSxZQUFZLFVBQVVVLEdBQUdILEdBQVVSLFNBQVMsWUFHcEVULEVBQUVDLFVBQVVZLEdBQUcsUUFBUyxjQUFlLFNBQVNDLEdBQzVDQSxFQUFFQyxpQkFDRmYsRUFBRUksTUFBTWlCLElBQUksVUFBVSxRQUN0QnJCLEVBQUUscUJBQXFCcUIsSUFBSSxVQUFVLFFBQ3JDckIsRUFBRSxxQkFBcUJzQixTQUN2QnRCLEVBQUUsV0FBVyxHQUFHdUIsU0FHcEJ2QixFQUFFLHVCQUF1QndCLE9BQ3ZCQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsYUFBYyxFQUNkQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsZUFBZ0IsRUFDaEJDLFVBQVUsRUFDVkMsY0FBZSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiLm5hdi1pY29uM1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICQoXCIubW9iaWxlLW1lbnVcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICB9KTtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEpIHtcbiAgICAgICAgICAgICQoXCIuaGVhZGVyLW5hdlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIuaGVhZGVyLW5hdlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmZhbmN5Ym94LW1vZGFsJykuZmFuY3lib3goe3BhZGRpbmc6IDB9KTtcblxuICAgICQoJy5yZXBvcnQtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkc2VsZiA9ICQodGhpcyksXG4gICAgICAgICAgICB0YWJJbmRleCA9ICRzZWxmLmluZGV4KCk7XG4gICAgICAgICRzZWxmLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkc2VsZi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5jaGFuZ2UtaW1hZ2VzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVxKHRhYkluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnBsYXktdmlkZW9cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAkKCcuYmFja2dyb3VuZC12aWRlbycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgJCgnLmJhY2tncm91bmQtaW1hZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgJChcIiN2aWRlbzFcIilbMF0ucGxheSgpO1xuICAgIH0pXG5cbiAgICAkKFwiLmNhcm91c2VsLWNvbnRhaW5lclwiKS5zbGljayh7XG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBwcmV2QXJyb3c6IGZhbHNlLFxuICAgICAgbmV4dEFycm93OiBmYWxzZSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhdXRvcGxheVNwZWVkOiA1MDAwXG4gICAgfSk7XG5cbn0pOyJdfQ==