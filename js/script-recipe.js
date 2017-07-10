$(document).ready(function(){
	console.log("El documento está listo")
	$(".icon-menu").hide();
	$(".icon-arrow-left-alt").show();

	$(".js-show-make").click(function(){
		$(".page.recipe").addClass('make');
		$(this).addClass("active");
		$(".js-show-recipe").removeClass('active');

	})
	$(".js-show-recipe").click(function(){
		$(".page.recipe").removeClass('make');
		$(this).addClass('active');
		$(".js-show-make").removeClass('active');
	})
	$(".icon-arrow-left-alt").click(function(){
		$(".nav-item").attr("href", "index.html");
	})
})