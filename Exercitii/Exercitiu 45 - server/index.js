$(document).ready(function(){


	$.ajax({

		url: "index.txt",
		success: function(textfile){
			console.log(textfile);

			var text = textfile.split('utilize').join('use')
			console.log(text);


			var file = new Blob([text], {type: 'txt'});
			console.log(file);

			var a =	$('<a></a>');
			a[0].href = URL.createObjectURL(file);
			a[0].download = 'newFile.txt';

			$('body').append(a);
			a[0].click();
		}


	});



});
