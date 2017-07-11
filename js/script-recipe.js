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
		localStorage.removeItem('receta');
	});
	
	$('.item-recipe').click(function(e){
		console.log(localStorage.setItem("receta",e.target.id))
	});
	var newReceta = localStorage.getItem("receta");
	console.log(newReceta);
	recipesArray.filter(function(e){
		if(e.name == newReceta){
			$(".image-recipe").css('background-image', 'url(img/recipes/320x350/'+ e.name+'.jpg)')
			$(".title-recipe").html(e.title);
			$(".description-recipe").html(e.excerpt);
			$(".source").html(e.source.name);
			$(".time").html(e.cookTime);
			e.ingredients.forEach(function(element){
				$(".list-ingredients").append('<li>'+ element + '</li>')
			});
			e.directions.forEach(function(element){
				$(".list-directions").append('<li class="item-direction">'+ element+ '</li>')
			})
			$(".btn-primary").html(e.source.name)
			return console.log(e)
		}
	})
})