$(document).ready(function(){var e=$("#touch-menu"),t=$(".menu");$(e).on("click",function(e){e.preventDefault(),t.slideToggle(),$(".mobile-menu").toggleClass("active")}),$(window).resize(function(){var e=$(window).width();e>768&&t.is(":hidden")&&t.removeAttr("style")}),$(".form-button").on("click",function(e){$(this).addClass("active"),$(".applicant-button").removeClass("active"),$(".form-content").addClass("active"),$(".applicant-content").removeClass("active")}),$(".applicant-button").on("click",function(e){$(this).addClass("active"),$(".form-button").removeClass("active"),$(".applicant-content").addClass("active"),$(".form-content").removeClass("active")}),$(".tooltip-reports").on("click",function(){$(".plashka").toggleClass("active")}),$("li.profile").on("click",function(){$(".dropdown-menu").toggleClass("active"),$("li.profile").toggleClass("active")}),$(".container-button").on("click",function(){$(".container-button label").removeClass("active"),$(this).children("label").toggleClass("active")}),$(".label-check").on("click",function(){$(".label-check").removeClass("active"),$(this).addClass("active")}),$(".next-button1").on("click",function(){$(".line-step-1").addClass("ready"),$(".step1").removeClass("active"),$(".step2").addClass("active"),$(".form-step-1").addClass("ready"),$(".form-step-2").addClass("active")}),$(".cancel-button2").on("click",function(){$(".line-step-1").removeClass("ready"),$(".step1").addClass("active"),$(".step2").removeClass("active"),$(".form-step-1").removeClass("ready"),$(".form-step-2").removeClass("active")}),$(".next-button2").on("click",function(){$(".line-step-2").addClass("ready"),$(".step2").removeClass("active"),$(".step3").addClass("active"),$(".form-step-2").addClass("ready"),$(".form-step-3").addClass("active")}),$(".cancel-button3").on("click",function(){$(".line-step-2").removeClass("ready"),$(".step2").addClass("active"),$(".step3").removeClass("active"),$(".form-step-2").removeClass("ready"),$(".form-step-3").removeClass("active")}),$(".apply-next1").on("click",function(){$(".container.apply-container").css("display","block"),$(".application.active").removeClass("active"),$(".step1.fullwidth").addClass("active"),$(".form-step-1").addClass("ready"),$(".line-step-2").addClass("ready"),$(".form-step-2").addClass("active")}),$(".apply-next-step1").on("click",function(){$(".form-step-2").addClass("ready"),$(".line-step-3").addClass("ready"),$(".form-step-3").addClass("active"),$(".step1.fullwidth").removeClass("active"),$(".st2a1").addClass("active")}),$(".apply-next-step2").on("click",function(){$(".st2a1").removeClass("active"),$(".st2a2").addClass("active")}),$(".apply-next-step3").on("click",function(){$(".st2a2").removeClass("active"),$(".st2q1").addClass("active"),$(".step2-error").removeClass("active")}),$(".apply-next-step4").on("click",function(){$(".st2q1").removeClass("active"),$(".st2q2").addClass("active")}),$(".apply-back-step4").on("click",function(){$(".st2q1").removeClass("active"),$(".st2a2").addClass("active")}),$(".apply-next-step5").on("click",function(){$(".st2q2").removeClass("active"),$(".st2q3").addClass("active")}),$(".apply-back-step5").on("click",function(){$(".st2q2").removeClass("active"),$(".st2q1").addClass("active")}),$(".apply-next-step6").on("click",function(){$(".st2q3").removeClass("active"),$(".st2q4").addClass("active")}),$(".apply-back-step6").on("click",function(){$(".st2q3").removeClass("active"),$(".st2q2").addClass("active")}),$(".error-button").on("click",function(){$(".step2-error").toggleClass("active")}),$(".apply-next-step7").on("click",function(){$(".st2q4").removeClass("active"),$(".success").addClass("active"),$(".form-step-3").addClass("ready")}),$(".deletelogo").on("click",function(){$(".upload-thumb-wrap img").css("display","none")}),$(".close-butt").on("click",function(){$(".profile-success").css("display","none")}),$(".apply-back-step7").on("click",function(){$(".st2q4").removeClass("active"),$(".st2q3").addClass("active")}),$(".error-next-step7").on("click",function(){$(".success").removeClass("active"),$(".error").addClass("active"),$(".form-step-3").addClass("ready")}),$(".success-next-step7").on("click",function(){$(".success").removeClass("active"),$(".form-step-3").addClass("ready"),$(".line-step-4").addClass("ready"),$(".form-step-4").addClass("active"),$(".payment").addClass("active")}),$(".apply-next-step8").on("click",function(){$(".error").removeClass("active"),$(".form-step-4").addClass("active"),$(".line-step-4").addClass("ready"),$(".payment").addClass("active")}),$(".apply-next-step9").on("click",function(){$(".payment").removeClass("active"),$(".form-step-4").addClass("ready"),$(".submitted").addClass("active")}),$(".eviction-success").on("click",function(){$(".eviction-payment").removeClass("active"),$(".eviction-processed").addClass("active")});var a={delegation:!0,clearForm:!0,resetForm:!0,type:"post",beforeSubmit:function(){$.fancybox.close()},success:function(){$.fancybox({href:"#popupThanks",type:"inline",padding:0})},error:function(){$.fancybox({href:"#popupError",type:"inline",padding:0})}};$("#form1").ajaxForm(a),$("#form1").validate({rules:{name:{required:!0,maxlength:100},link:{required:!0,minlength:10,maxlength:25},message:{required:!0,minlength:10,maxlength:325}},messages:{name:{required:"",maxlength:""},link:{required:"",maxlength:""},message:{required:"",minlength:"",maxlength:""}}}),jQuery(function(e){e(document).mouseup(function(t){var a=e(".tooltip-reports");a.is(t.target)||0!==a.has(t.target).length||e(".plashka").removeClass("active")})}),jQuery(function(e){e(document).mouseup(function(t){var a=e("li.profile");a.is(t.target)||0!==a.has(t.target).length||(e("li.profile").removeClass("active"),e(".dropdown-menu.active").removeClass("active"))})}),$(".fancybox-modal").fancybox({padding:0}),$(".info_header").on("click",function(){$(this).toggleClass("active"),$(this).parent().find(".info_body").toggleClass("active")}),$(".info .head h2").on("click",function(){$(this).toggleClass("active"),$(this).parent().parent().toggleClass("active")}),$(".bounce-button").on("click",function(){$(this).toggleClass("active")}),$(".bounce-button-view").on("click",function(){$(this).toggleClass("active")}),$(".archive-button").on("click",function(){$(".not-archived").toggleClass("active"),$(".archived-block").toggleClass("active"),$(".archive-button").toggleClass("active")}),jQuery(function(e){e(document).mouseup(function(t){var a=e("bounce-button");a.is(t.target)||0!==a.has(t.target).length||e(".bounce-button").removeClass("active")})}),$(".dropdown-button").on("click",function(){$(this).parents(".dropdown").toggleClass("active")}),$(".libutton").on("click",function(e){e.preventDefault();var t=$(this),a=t.index();t.siblings().removeClass("active"),t.addClass("active"),$(".frame-block").removeClass("active").eq(a).addClass("active")}),$(".sett-button").on("click",function(e){e.preventDefault();var t=$(this),a=t.index();t.siblings().removeClass("active"),t.addClass("active"),$(".profile-content").removeClass("active").eq(a).addClass("active"),$(".prof-padding").removeClass("active").eq(a).addClass("active")});var s=function(e){var t=$(document),a=!1,s=e.find(".sticky-anchor"),c=e.find(".sticky-content"),i=function(e){var i=t.scrollTop(),n=s.offset().top;console.log("scroll",i,n),i>n?a||(s.height(c.outerHeight()),c.addClass("fixed"),a=!0):a&&(s.height(0),c.removeClass("fixed"),a=!1)};$(window).on("scroll",i)};new s($("#sticky"));$("input, select").styler()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInQiLCJlIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJyZXNpemUiLCJ3aWR0aCIsImlzIiwicmVtb3ZlQXR0ciIsInRoaXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY2hpbGRyZW4iLCJjc3MiLCJvcHRpb25zIiwiZGVsZWdhdGlvbiIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsInR5cGUiLCJiZWZvcmVTdWJtaXQiLCJmYW5jeWJveCIsImNsb3NlIiwic3VjY2VzcyIsImhyZWYiLCJwYWRkaW5nIiwiZXJyb3IiLCJhamF4Rm9ybSIsInZhbGlkYXRlIiwicnVsZXMiLCJuYW1lIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJsaW5rIiwibWlubGVuZ3RoIiwibWVzc2FnZSIsIm1lc3NhZ2VzIiwialF1ZXJ5IiwibW91c2V1cCIsImRpdiIsInRhcmdldCIsImhhcyIsImxlbmd0aCIsInBhcmVudCIsImZpbmQiLCJwYXJlbnRzIiwiJHNlbGYiLCJ0YWJJbmRleCIsImluZGV4Iiwic2libGluZ3MiLCJlcSIsIlN0aWNreUVsZW1lbnQiLCJub2RlIiwiZG9jIiwiZml4ZWQiLCJhbmNob3IiLCJjb250ZW50Iiwib25TY3JvbGwiLCJkb2NUb3AiLCJzY3JvbGxUb3AiLCJhbmNob3JUb3AiLCJvZmZzZXQiLCJ0b3AiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzdHlsZXIiXSwibWFwcGluZ3MiOiJBQUFJQSxFQUFFQyxVQUFVQyxNQUFNLFdBQ2QsR0FBSUMsR0FBSUgsRUFBRSxlQUNOSSxFQUFJSixFQUFFLFFBQ1ZBLEdBQUVHLEdBQUdFLEdBQUcsUUFBUyxTQUFTRixHQUNsQkEsRUFBRUcsaUJBQWtCRixFQUFFRyxjQUFlUCxFQUFFLGdCQUFnQlEsWUFBWSxZQUV2RVIsRUFBRVMsUUFB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QyxTQUFTLFNBQ2pCMkMsR0FBUSxHQUdSQSxJQUNBQyxFQUFPVSxPQUFPLEdBQ2RULEVBQVE1QyxZQUFZLFNBQ3BCMEMsR0FBUSxHQUlwQjFELEdBQUVTLFFBQVFKLEdBQUcsU0FBVXdELEdBRWhCLElBQUlOLEdBQWN2RCxFQUFFLFdBQy9CQSxHQUFFLGlCQUFpQnVFIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSAkKFwiI3RvdWNoLW1lbnVcIiksXG4gICAgICAgICAgICBlID0gJChcIi5tZW51XCIpO1xuICAgICAgICAkKHQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQoKSwgZS5zbGlkZVRvZ2dsZSgpLCAkKFwiLm1vYmlsZS1tZW51XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB0ID4gNzY4ICYmIGUuaXMoXCI6aGlkZGVuXCIpICYmIGUucmVtb3ZlQXR0cihcInN0eWxlXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICQoXCIuZm9ybS1idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hcHBsaWNhbnQtYnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm0tY29udGVudFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hcHBsaWNhbnQtY29udGVudFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAkKFwiLmFwcGxpY2FudC1idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtLWJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hcHBsaWNhbnQtY29udGVudFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtLWNvbnRlbnRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICQoXCIudG9vbHRpcC1yZXBvcnRzXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnBsYXNoa2FcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcImxpLnByb2ZpbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuZHJvcGRvd24tbWVudVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwibGkucHJvZmlsZVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuXG4gICAgICAgICQoXCIuY29udGFpbmVyLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmNvbnRhaW5lci1idXR0b24gbGFiZWwnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignbGFiZWwnKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkKFwiLmxhYmVsLWNoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubGFiZWwtY2hlY2snKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkKFwiLm5leHQtYnV0dG9uMVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5saW5lLXN0ZXAtMVwiKS5hZGRDbGFzcyhcInJlYWR5XCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3RlcDFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5zdGVwMlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0xXCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtMlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICAkKFwiLmNhbmNlbC1idXR0b24yXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLmxpbmUtc3RlcC0xXCIpLnJlbW92ZUNsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAgICAgJChcIi5zdGVwMVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnN0ZXAyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTFcIikucmVtb3ZlQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0yXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgJChcIi5uZXh0LWJ1dHRvbjJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIubGluZS1zdGVwLTJcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnN0ZXAyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3RlcDNcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtMlwiKS5hZGRDbGFzcyhcInJlYWR5XCIpLFxuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTNcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcblxuICAgICAgICAkKFwiLmNhbmNlbC1idXR0b24zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLmxpbmUtc3RlcC0yXCIpLnJlbW92ZUNsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAgICAgJChcIi5zdGVwMlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnN0ZXAzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTJcIikucmVtb3ZlQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0zXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgICQoXCIuYXBwbHktbmV4dDFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuY29udGFpbmVyLmFwcGx5LWNvbnRhaW5lclwiKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpLFxuICAgICAgICAgICAgICAgICQoXCIuYXBwbGljYXRpb24uYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3RlcDEuZnVsbHdpZHRoXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTFcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmxpbmUtc3RlcC0yXCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtMlwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTJcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmxpbmUtc3RlcC0zXCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtM1wiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnN0ZXAxLmZ1bGx3aWR0aFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnN0MmExXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgICQoXCIuYXBwbHktbmV4dC1zdGVwMlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5zdDJhMVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnN0MmEyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgICQoXCIuYXBwbHktbmV4dC1zdGVwM1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5zdDJhMlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnN0MnExXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3RlcDItZXJyb3JcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1uZXh0LXN0ZXA0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnN0MnExXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3QycTJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1iYWNrLXN0ZXA0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnN0MnExXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3QyYTJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1uZXh0LXN0ZXA1XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnN0MnEyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3QycTNcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1iYWNrLXN0ZXA1XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnN0MnEyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3QycTFcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1uZXh0LXN0ZXA2XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnN0MnEzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3QycTRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1iYWNrLXN0ZXA2XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnN0MnEzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3QycTJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5lcnJvci1idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3RlcDItZXJyb3JcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1uZXh0LXN0ZXA3XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnN0MnE0XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuc3VjY2Vzc1wiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC0zXCIpLmFkZENsYXNzKFwicmVhZHlcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5kZWxldGVsb2dvXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnVwbG9hZC10aHVtYi13cmFwIGltZ1wiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAgIH0pXG4gICAgICAgICQoXCIuY2xvc2UtYnV0dFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5wcm9maWxlLXN1Y2Nlc3NcIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICB9KVxuICAgICAgICAkKFwiLmFwcGx5LWJhY2stc3RlcDdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3QycTRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5zdDJxM1wiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICAkKFwiLmVycm9yLW5leHQtc3RlcDdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuc3VjY2Vzc1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmVycm9yXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTNcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKVxuICAgICAgICB9KVxuICAgICAgICAkKFwiLnN1Y2Nlc3MtbmV4dC1zdGVwN1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5zdWNjZXNzXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTNcIikuYWRkQ2xhc3MoXCJyZWFkeVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmxpbmUtc3RlcC00XCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtLXN0ZXAtNFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLnBheW1lbnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5hcHBseS1uZXh0LXN0ZXA4XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLmVycm9yXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgICAgICQoXCIuZm9ybS1zdGVwLTRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5saW5lLXN0ZXAtNFwiKS5hZGRDbGFzcyhcInJlYWR5XCIpLFxuICAgICAgICAgICAgICAgICQoXCIucGF5bWVudFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICAkKFwiLmFwcGx5LW5leHQtc3RlcDlcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIucGF5bWVudFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm0tc3RlcC00XCIpLmFkZENsYXNzKFwicmVhZHlcIiksXG4gICAgICAgICAgICAgICAgJChcIi5zdWJtaXR0ZWRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5ldmljdGlvbi1zdWNjZXNzXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLmV2aWN0aW9uLXBheW1lbnRcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJChcIi5ldmljdGlvbi1wcm9jZXNzZWRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRlbGVnYXRpb246IHRydWUsXG4gICAgICAgICAgICBjbGVhckZvcm06IHRydWUsXG4gICAgICAgICAgICByZXNldEZvcm06IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICBiZWZvcmVTdWJtaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkLmZhbmN5Ym94KHsgaHJlZjogXCIjcG9wdXBUaGFua3NcIiwgdHlwZTogJ2lubGluZScsIHBhZGRpbmc6IDAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQuZmFuY3lib3goeyBocmVmOiBcIiNwb3B1cEVycm9yXCIsIHR5cGU6ICdpbmxpbmUnLCBwYWRkaW5nOiAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQoJyNmb3JtMScpLmFqYXhGb3JtKG9wdGlvbnMpO1xuICAgICAgICAkKFwiI2Zvcm0xXCIpLnZhbGlkYXRlKHtcbiAgICAgICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogeyByZXF1aXJlZDogdHJ1ZSwgbWF4bGVuZ3RoOiAxMDAsIH0sXG4gICAgICAgICAgICAgICAgbGluazogeyByZXF1aXJlZDogdHJ1ZSwgbWlubGVuZ3RoOiAxMCwgbWF4bGVuZ3RoOiAyNSwgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7IHJlcXVpcmVkOiB0cnVlLCBtaW5sZW5ndGg6IDEwLCBtYXhsZW5ndGg6IDMyNSwgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHsgcmVxdWlyZWQ6IFwiXCIsIG1heGxlbmd0aDogXCJcIiwgfSxcbiAgICAgICAgICAgICAgICBsaW5rOiB7IHJlcXVpcmVkOiBcIlwiLCBtYXhsZW5ndGg6IFwiXCIsIH0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogeyByZXF1aXJlZDogXCJcIiwgbWlubGVuZ3RoOiBcIlwiLCBtYXhsZW5ndGg6IFwiXCIsIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gJChcIi50b29sdGlwLXJlcG9ydHNcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpICYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnBsYXNoa2FcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBqUXVlcnkoZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9ICQoXCJsaS5wcm9maWxlXCIpO1xuICAgICAgICAgICAgICAgIGlmICghZGl2LmlzKGUudGFyZ2V0KSAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJChcImxpLnByb2ZpbGVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmRyb3Bkb3duLW1lbnUuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmZhbmN5Ym94LW1vZGFsJykuZmFuY3lib3goeyBwYWRkaW5nOiAwIH0pO1xuXG4gICAgICAgICQoXCIuaW5mb19oZWFkZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiksXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiLmluZm9fYm9keVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuXG4gICAgICAgICQoXCIuaW5mbyAuaGVhZCBoMlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgJChcIi5ib3VuY2UtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgICQoXCIuYm91bmNlLWJ1dHRvbi12aWV3XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgICQoXCIuYXJjaGl2ZS1idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIubm90LWFyY2hpdmVkXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLFxuICAgICAgICAgICAgJChcIi5hcmNoaXZlZC1ibG9ja1wiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxcbiAgICAgICAgICAgICQoXCIuYXJjaGl2ZS1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgalF1ZXJ5KGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXYgPSAkKFwiYm91bmNlLWJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWRpdi5pcyhlLnRhcmdldCkgJiYgZGl2LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuYm91bmNlLWJ1dHRvblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIuZHJvcGRvd24tYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bicpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuICAgICAgICAkKCcubGlidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gJHNlbGYuaW5kZXgoKTtcbiAgICAgICAgICAgICRzZWxmLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJHNlbGYuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmZyYW1lLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVxKHRhYkluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zZXR0LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciAkc2VsZiA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgdGFiSW5kZXggPSAkc2VsZi5pbmRleCgpO1xuICAgICAgICAgICAgJHNlbGYuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkc2VsZi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAvLyAkKFwiLnByb2YtcGFkZGluZ1wiKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICAgICAkKCcucHJvZmlsZS1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVxKHRhYkluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcucHJvZi1wYWRkaW5nJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVxKHRhYkluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdmFyIFN0aWNreUVsZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICB2YXIgZG9jID0gJChkb2N1bWVudCksXG4gICAgICAgICAgICAgICAgZml4ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbmNob3IgPSBub2RlLmZpbmQoJy5zdGlja3ktYW5jaG9yJyksXG4gICAgICAgICAgICAgICAgY29udGVudCA9IG5vZGUuZmluZCgnLnN0aWNreS1jb250ZW50Jyk7XG4gICAgICAgICAgICB2YXIgb25TY3JvbGwgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvY1RvcCA9IGRvYy5zY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yVG9wID0gYW5jaG9yLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsJywgZG9jVG9wLCBhbmNob3JUb3ApO1xuICAgICAgICAgICAgICAgIGlmIChkb2NUb3AgPiBhbmNob3JUb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaXhlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yLmhlaWdodChjb250ZW50Lm91dGVySGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yLmhlaWdodCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVtbyA9IG5ldyBTdGlja3lFbGVtZW50KCQoJyNzdGlja3knKSk7XG4gICAgICAgICQoJ2lucHV0LCBzZWxlY3QnKS5zdHlsZXIoKTtcbiAgICB9KTsiXX0=
