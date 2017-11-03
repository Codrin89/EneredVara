(function() {

	document.getElementById('magic8').addEventListener('click', function() {

		var arrayMagic8 = ['Yes', 'No', 'Maybe', 'Ask again later'];
		var question = document.getElementById('inputQ').value;
		var random = Math.random();
		random = Math.floor(random*4);
		document.getElementById('question').innerHTML = question;
		document.getElementById('magic8BallAnswer').innerHTML = arrayMagic8[random];

	});
	



})();