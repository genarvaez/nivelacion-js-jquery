$(document).ready(function(){
	console.log("El documento está listo")
	$(".icon-menu").hide();
	$(".icon-arrow-left-alt").show();

	$(".js-show-make").click(function(){
		$(".page .recipe").addClass('make');
	})
	$(".js-show-recipe").click(function(){
		$(".page .recipe").removeClass('make')
	})
})