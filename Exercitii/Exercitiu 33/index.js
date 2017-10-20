(function() {

	$('#magic8').on('click', function() {
		
		var arrayMagic8 = ['Yes', 'No', 'Maybe', 'Ask me later'];

		var question = $('#inputQ').val();

		var random = Math.random();

		console.log(random);
		console.log(random * 4);

		random = Math.floor(random * 4);
		console.log(random)


		$('#questionText').html(question);
		$('#error-label').html(arrayMagic8[random]);


		if (true) {}

	});
})();