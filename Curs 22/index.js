(function(){

	document.getElementById('magic8').addEventListener('click', function(){

		var arrayMagic8 = ['yes','No','Maybe','Ask me again later'];
		var question = document.getElementById('inputQ').value;
		var random = Math.random();
		console.log(random);
		console.log(random*4);
		random = Math.floor(random*4);
		document.getElementById('question').innerHTML = question;
		document.getElementById('magic8BallAnswer').innerHTML = arrayMagic8[random];

 });
})();