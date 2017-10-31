$(document).ready(function() {

	$.ajax({
		url: "data.txt", 
		success: function(result){
			var words = ['badger', 'snake', 'mushroom']
			for(var i = 0 ; i < words.length ; i++) {
				var text = result.split(words[i]);
				console.log(words[i] + 'appears' + (text.length - 1)  + 'times');
			}

		}
	});
});