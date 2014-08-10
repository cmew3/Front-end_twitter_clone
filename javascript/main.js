	$(document).ready(function(){

		$('.tweet').on('click',function(event){
			console.log("hello");
			$(this).find('.expanded-text').slideDown();

		})

	})


// $("#reveal_answer").on('click', function(event){
// 					console.log(movieName)
// 					event.preventDefault();
// 					var answer = Mustache.render($("#answer_template").html(), {movie: movieName});
// 					$(answer).appendTo("#answer_container");