$(document).ready(function(){var e=$("#touch-menu"),s=$(".menu");$(e).on("click",function(e){e.preventDefault(),s.slideToggle(),$(".mobile-menu").toggleClass("active")}),$(window).resize(function(){var e=$(window).width();e>768&&s.is(":hidden")&&s.removeAttr("style")}),$(".form-button").on("click",function(e){$(this).addClass("active"),$(".applicant-button").removeClass("active"),$(".form-content").addClass("active"),$(".applicant-content").removeClass("active")}),$(".applicant-button").on("click",function(e){$(this).addClass("active"),$(".form-button").removeClass("active"),$(".applicant-content").addClass("active"),$(".form-content").removeClass("active")}),$(".tooltip-reports").on("click",function(){$(".plashka").toggleClass("active")}),$(".container-button").on("click",function(){$(".container-button label").removeClass("active"),$(this).children("label").toggleClass("active")}),$(".label-check").on("click",function(){$(".label-check").removeClass("active"),$(this).addClass("active")}),$(".next-button1").on("click",function(){$(".line-step-1").addClass("ready"),$(".step1").removeClass("active"),$(".step2").addClass("active"),$(".form-step-1").addClass("ready"),$(".form-step-2").addClass("active")}),$(".cancel-button2").on("click",function(){$(".line-step-1").removeClass("ready"),$(".step1").addClass("active"),$(".step2").removeClass("active"),$(".form-step-1").removeClass("ready"),$(".form-step-2").removeClass("active")}),$(".next-button2").on("click",function(){$(".line-step-2").addClass("ready"),$(".step2").removeClass("active"),$(".step3").addClass("active"),$(".form-step-2").addClass("ready"),$(".form-step-3").addClass("active")}),$(".cancel-button3").on("click",function(){$(".line-step-2").removeClass("ready"),$(".step2").addClass("active"),$(".step3").removeClass("active"),$(".form-step-2").removeClass("ready"),$(".form-step-3").removeClass("active")}),$(".apply-next-step1").on("click",function(){$(".form-step-2").addClass("ready"),$(".line-step-3").addClass("ready"),$(".form-step-3").addClass("active"),$(".step1.fullwidth").removeClass("active"),$(".st2a1").addClass("active")}),$(".apply-next-step2").on("click",function(){$(".st2a1").removeClass("active"),$(".st2a2").addClass("active")}),$(".apply-next-step3").on("click",function(){$(".st2a2").removeClass("active"),$(".st2q1").addClass("active")}),$(".apply-next-step4").on("click",function(){$(".st2q1").removeClass("active"),$(".st2q2").addClass("active")}),$(".apply-next-step5").on("click",function(){$(".st2q2").removeClass("active"),$(".st2q3").addClass("active")}),$(".apply-next-step6").on("click",function(){$(".st2q3").removeClass("active"),$(".st2q4").addClass("active")}),$(".apply-next-step7").on("click",function(){$(".st2q4").removeClass("active"),$(".success").addClass("active"),$(".form-step-3").addClass("ready")}),$(".error-next-step7").on("click",function(){$(".success").removeClass("active"),$(".error").addClass("active"),$(".form-step-3").addClass("ready")}),$(".success-next-step7").on("click",function(){$(".success").removeClass("active"),$(".form-step-3").addClass("ready"),$(".line-step-4").addClass("ready"),$(".form-step-4").addClass("active"),$(".payment").addClass("active")}),$(".apply-next-step8").on("click",function(){$(".error").removeClass("active"),$(".form-step-4").addClass("active"),$(".line-step-4").addClass("ready"),$(".payment").addClass("active")}),$(".apply-next-step9").on("click",function(){$(".payment").removeClass("active"),$(".form-step-4").addClass("ready"),$(".submitted").addClass("active")}),jQuery(function(e){e(document).mouseup(function(s){var t=e(".tooltip-reports");t.is(s.target)||0!==t.has(s.target).length||e(".plashka").removeClass("active")})}),$(".fancybox-modal").fancybox({padding:0}),$(".info_header").on("click",function(){$(this).toggleClass("active"),$(this).parent().find(".info_body").toggleClass("active")}),$(".dropdown-button").on("click",function(){$(this).parents(".dropdown").toggleClass("active")}),$(".libutton").on("click",function(e){e.preventDefault();var s=$(this),t=s.index();s.siblings().removeClass("active"),s.addClass("active"),$(".frame-block").removeClass("active").eq(t).addClass("active")});var t=function(e){var s=$(document),t=!1,a=e.find(".sticky-anchor"),c=e.find(".sticky-content"),o=function(e){var o=s.scrollTop(),n=a.offset().top;console.log("scroll",o,n),o>n?t||(a.height(c.outerHeight()),c.addClass("fixed"),t=!0):t&&(a.height(0),c.removeClass("fixed"),t=!1)};$(window).on("scroll",o)};new t($("#sticky"));$("input, select").styler()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInQiLCJlIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJyZXNpemUiLCJ3aWR0aCIsImlzIiwicmVtb3ZlQXR0ciIsInRoaXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY2hpbGRyZW4iLCJqUXVlcnkiLCJtb3VzZXVwIiwiZGl2IiwidGFyZ2V0IiwiaGFzIiwibGVuZ3RoIiwiZmFuY3lib3giLCJwYWRkaW5nIiwicGFyZW50IiwiZmluZCIsInBhcmVudHMiLCIkc2VsZiIsInRhYkluZGV4IiwiaW5kZXgiLCJzaWJsaW5ncyIsImVxIiwiU3RpY2t5RWxlbWVudCIsIm5vZGUiLCJkb2MiLCJmaXhlZCIsImFuY2hvciIsImNvbnRlbnQiLCJvblNjcm9sbCIsImRvY1RvcCIsInNjcm9sbFRvcCIsImFuY2hvclRvcCIsIm9mZnNldCIsInRvcCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsInN0eWxlciJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FDZCxHQUFJQyxHQUFJSCxFQUFFLGVBQ05JLEVBQUlKLEVBQUUsUUFDVkEsR0FBRUcsR0FBR0UsR0FBRyxRQUFTLFNBQVNGLEdBQ2xCQSxFQUFFRyxpQkFBa0JGLEVBQUVHLGNBQWVQLEVBQUUsZ0JBQWdCUSxZQUFZLFlBRXZFUixFQUFFUyxRQUFRQyxPQUFPLFdBQ2IsR0FBSVAsR0FBSUgsRUFBRVMsUUFBUUUsT0FDbEJSLEdBQUksS0FBT0MsRUFBRVEsR0FBRyxZQUFjUixFQUFFUyxXQUFXLFdBRS9DYixFQUFFLGdCQUFnQkssR0FBRyxRQUFTLFNBQVNGLEdBQ25DSCxFQUFFYyxNQUFNQyxTQUFTLFVBQ2JmLEVBQUUscUJBQXFCZ0IsWUFBWSxVQUNuQ2hCLEVBQUUsaUJBQWlCZSxTQUFTLFVBQzVCZixFQUFFLHNC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QVNDLEdBQ3pCLEdBQUlDLEdBQU1wQyxFQUFFQyxVQUNSb0MsR0FBUSxFQUNSQyxFQUFTSCxFQUFLUixLQUFLLGtCQUNuQlksRUFBVUosRUFBS1IsS0FBSyxtQkFFcEJhLEVBQVcsU0FBU3BDLEdBQ3BCLEdBQUlxQyxHQUFTTCxFQUFJTSxZQUNiQyxFQUFZTCxFQUFPTSxTQUFTQyxHQUVoQ0MsU0FBUUMsSUFBSSxTQUFVTixFQUFRRSxHQUMxQkYsRUFBU0UsRUFDSk4sSUFDREMsRUFBT1UsT0FBT1QsRUFBUVUsZUFDdEJWLEVBQVF4QixTQUFTLFNBQ2pCc0IsR0FBUSxHQUdSQSxJQUNBQyxFQUFPVSxPQUFPLEdBQ2RULEVBQVF2QixZQUFZLFNBQ3BCcUIsR0FBUSxHQUtwQnJDLEdBQUVTLFFBQVFKLEdBQUcsU0FBVW1DLEdBR2hCLElBQUlOLEdBQWNsQyxFQUFFLFdBRS9CQSxHQUFFLGlCQUFpQmtEIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gJChcIiN0b3VjaC1tZW51XCIpLFxuICAgICAgICBlID0gJChcIi5tZW51XCIpO1xuICAgICQodCkub24oXCJjbGlja1wiLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB0LnByZXZlbnREZWZhdWx0KCksIGUuc2xpZGVUb2dnbGUoKSwgJChcIi5tb2JpbGUtbWVudVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KSxcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICB0ID4gNzY4ICYmIGUuaXMoXCI6aGlkZGVuXCIpICYmIGUucmVtb3ZlQXR0cihcInN0eWxlXCIpXG4gICAgICAgIH0pLFxuICAgICAgICAkKFwiLmZvcm0tYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmFwcGxpY2FudC1idXR0b25cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLWNvbnRlbnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5hcHBsaWNhbnQtY29udGVudFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KSxcbiAgICAgICAgJChcIi5hcHBsaWNhbnQtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm0tYnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuYXBwbGljYW50LWNvbnRlbnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLWNvbnRlbnRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAkKFwiLnRvb2x0aXAtcmVwb3J0c1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiLnBsYXNoa2FcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICB9KVxuXG4gICAgJChcIi5jb250YWluZXItYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5jb250YWluZXItYnV0dG9uIGxhYmVsJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignbGFiZWwnKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KVxuXG4gICAgJChcIi5sYWJlbC1jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubGFiZWwtY2hlY2snKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pXG5cbiAgICAkKFwiLm5leHQtYnV0dG9uMVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiLmxpbmUtc3RlcC0xXCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAkKFwiLnN0ZXAxXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgJChcIi5zdGVwMlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTFcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICB9KVxuICAgICQoXCIuY2FuY2VsLWJ1dHRvbjJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIi5saW5lLXN0ZXAtMVwiKS5yZW1vdmVDbGFzcyhcInJlYWR5XCIpLFxuICAgICAgICAgICAgJChcIi5zdGVwMVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICQoXCIuc3RlcDJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0xXCIpLnJlbW92ZUNsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0yXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgfSlcblxuICAgICQoXCIubmV4dC1idXR0b24yXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIubGluZS1zdGVwLTJcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICQoXCIuc3RlcDJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0ZXAzXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtMlwiKS5hZGRDbGFzcyhcInJlYWR5XCIpLFxuICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtM1wiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgIH0pXG5cbiAgICAkKFwiLmNhbmNlbC1idXR0b24zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIubGluZS1zdGVwLTJcIikucmVtb3ZlQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICQoXCIuc3RlcDJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0ZXAzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtMlwiKS5yZW1vdmVDbGFzcyhcInJlYWR5XCIpLFxuICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtM1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgIH0pXG4gICAgJChcIi5hcHBseS1uZXh0LXN0ZXAxXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0yXCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAkKFwiLmxpbmUtc3RlcC0zXCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0zXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgJChcIi5zdGVwMS5mdWxsd2lkdGhcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0MmExXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3QyYTFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0MmEyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3QyYTJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0MnExXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3QycTFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0MnEyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3QycTJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0MnEzXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDZcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3QycTNcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN0MnE0XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3QycTRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnN1Y2Nlc3NcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0zXCIpLmFkZENsYXNzKFwicmVhZHlcIilcbiAgICB9KVxuICAgICQoXCIuZXJyb3ItbmV4dC1zdGVwN1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5zdWNjZXNzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgJChcIi5lcnJvclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTNcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKVxuICAgIH0pXG4gICAgJChcIi5zdWNjZXNzLW5leHQtc3RlcDdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3VjY2Vzc1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTNcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICQoXCIubGluZS1zdGVwLTRcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLnBheW1lbnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICB9KVxuICAgICQoXCIuYXBwbHktbmV4dC1zdGVwOFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5lcnJvclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAkKFwiLmxpbmUtc3RlcC00XCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAkKFwiLnBheW1lbnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICB9KVxuICAgICQoXCIuYXBwbHktbmV4dC1zdGVwOVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5wYXltZW50XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtNFwiKS5hZGRDbGFzcyhcInJlYWR5XCIpLFxuICAgICAgICAgICAgJChcIi5zdWJtaXR0ZWRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICB9KVxuXG5cblxuICAgIGpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGRpdiA9ICQoXCIudG9vbHRpcC1yZXBvcnRzXCIpO1xuICAgICAgICAgICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpICYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQoXCIucGxhc2hrYVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLmZhbmN5Ym94LW1vZGFsJykuZmFuY3lib3goeyBwYWRkaW5nOiAwIH0pO1xuXG4gICAgJChcIi5pbmZvX2hlYWRlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLCAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCIuaW5mb19ib2R5XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpIH0pXG5cbiAgICAkKFwiLmRyb3Bkb3duLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bicpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pXG5cbiAgICAkKCcubGlidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyICRzZWxmID0gJCh0aGlzKSxcbiAgICAgICAgICAgIHRhYkluZGV4ID0gJHNlbGYuaW5kZXgoKTtcblxuICAgICAgICAkc2VsZi5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHNlbGYuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICQoJy5mcmFtZS1ibG9jaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5lcSh0YWJJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyByZXNpemVJZnJhbWUoJCgnLmZyYW1lLWJsb2NrJykuZXEodGFiSW5kZXgpLmZpbmQoJ2lmcmFtZScpWzBdKTtcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgcmVzaXplSWZyYW1lKCQoJy5mcmFtZS1ibG9jay5hY3RpdmUnKS5maW5kKCdpZnJhbWUnKVswXSk7XG4gICAgICAgIC8vIH0sMTAwKTtcbiAgICB9KTtcblxuXG4gICAgLy8gZnVuY3Rpb24gcmVzaXplSWZyYW1lKG9iaikge1xuICAgIC8vICAgICBvYmouc3R5bGUuaGVpZ2h0ID0gb2JqLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgIC8vICAgfVxuXG4gICAgdmFyIFN0aWNreUVsZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHZhciBkb2MgPSAkKGRvY3VtZW50KSxcbiAgICAgICAgICAgIGZpeGVkID0gZmFsc2UsXG4gICAgICAgICAgICBhbmNob3IgPSBub2RlLmZpbmQoJy5zdGlja3ktYW5jaG9yJyksXG4gICAgICAgICAgICBjb250ZW50ID0gbm9kZS5maW5kKCcuc3RpY2t5LWNvbnRlbnQnKTtcblxuICAgICAgICB2YXIgb25TY3JvbGwgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZG9jVG9wID0gZG9jLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgIGFuY2hvclRvcCA9IGFuY2hvci5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGwnLCBkb2NUb3AsIGFuY2hvclRvcCk7XG4gICAgICAgICAgICBpZiAoZG9jVG9wID4gYW5jaG9yVG9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmNob3IuaGVpZ2h0KGNvbnRlbnQub3V0ZXJIZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmNob3IuaGVpZ2h0KDApO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICBmaXhlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICB9O1xuXG4gICAgdmFyIGRlbW8gPSBuZXcgU3RpY2t5RWxlbWVudCgkKCcjc3RpY2t5JykpO1xuXG4gICAgJCgnaW5wdXQsIHNlbGVjdCcpLnN0eWxlcigpO1xuXG59KTsiXX0=
