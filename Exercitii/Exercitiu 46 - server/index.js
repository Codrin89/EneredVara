$(document).ready(function(){


	$.ajax({

		url: "index.txt",
		success: function(textfile){
			console.log(textfile);
			var words = ['badger', 'snake', 'mushroom'];
			

			for (var i = 0; i < words.length; i++) {
				var text = textfile.split(words[i]);

				console.log(words[i] + ' appears ' + ( text.length - 1 ) + ' times.')
			}


		}


	});



});
