
	function getNewTweet(text) {

		return { avatar: "https://pbs.twimg.com/profile_images/460740982498013184/wIPwMwru_bigger.png",
				 user: "BBC Breaking News",
				 handle: "BBCBreaking",
				 text: text,
				 expanded_text: "Florem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris dolor, ultricies sed mauris id, hendrerit semper enim. Aenean vitae arcu ut nulla rhoncus egestas ac non ante."}
	}

	function addTweet(tweet) {
		var newTweet = Mustache.render($('#tweet-template').html(), tweet);
		$(newTweet).appendTo('#tweet-stream');

	}
	
	function loadTweets(tweets) {
		tweets.forEach(function(tweet) {
			addTweet(tweet);

		})

	}

	$(document).ready(function(){
		loadTweets(tweets)

		$('#tweet-stream').on('click','.tweet',function(event){
			console.log("hello");
			$(this).find('.expanded-text').slideDown();

		})

		$('.header').on('click',function(event){
			console.log('newtweet');

			loadTweets(tweets)
		})

	})

	var tweet2= { avatar: "https://pbs.twimg.com/profile_images/460740982498013184/wIPwMwru_bigger.png",
				 user: "BBC Breaking News",
				 handle: "@BBCBreaking",
				 text: "Cat owners who look like cats most likely to eat carrots",
				 expanded_text: "Florem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris dolor, ultricies sed mauris id, hendrerit semper enim. Aenean vitae arcu ut nulla rhoncus egestas ac non ante."}

	var tweet1= { avatar: "https://pbs.twimg.com/profile_images/466972537704824832/eflEColL_bigger.png",
				 user: "Financial Times",
				 handle: "@FT",
				 text: "Aliquam adipiscing a orci et semper. Proin sagittis nibh in tellus euismod molestie. Ut sed feugiat arcu, in adipiscing quam. Etiam placerat sem quis feugiat rhoncus. Vivamus arcu ipsum, sollicitudin quis sapien at, porttitor.",
				 expanded_text: "Florem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris dolor, ultricies sed mauris id, hendrerit semper enim. Aenean vitae arcu ut nulla rhoncus egestas ac non ante."}

	var tweet3= { avatar: "https://pbs.twimg.com/profile_images/3087236754/91e379b7e0006d38ee0526946a38a1ea_normal.png",
				 user: "Makers Academy",
				 handle: "@makersacademy",
				 text: "People make more things",
				 expanded_text: "Suspendisse pulvinar non quam eget tincidunt. Sed aliquam ultricies felis, non tempus erat condimentum ac. Ut ultricies, turpis non dictum dignissim, justo felis mattis augue, id ultrices odio eros in nisi. Maecenas sit amet odio luctus, blandit sapien sit amet, vehicula dui. Cras tempor mi quis magna eleifend, sed porttitor eros consequat. Quisque sit amet quam mi. Nam eu mollis neque. In rutrum dapibus dolor. Duis ornare, ante vitae ultrices vehicula, urna nisi pharetra dolor, vel suscipit erat urna quis mauris. Sed sagittis ligula sit amet mauris imperdiet aliquet."}

						 

	var tweets = [tweet1,tweet2,tweet3,tweet2,tweet3,tweet1]