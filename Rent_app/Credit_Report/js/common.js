$(document).ready(function(){
	$(".dropdown-button").on("click",function(){
		$(this).parents('.dropdown').toggleClass("active");
	})
});