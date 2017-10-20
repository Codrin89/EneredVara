(function() {
$('#intreaba').on('click', function() {
	var arrayMagic8 = ['Yes', 'No', 'Maybe', 'Ask again later'];
	var question = $('#question').val();
	var random = Math.random();
	random = Math.floor(random * 4);
	console.log(random);
	$('#viewQuestion').html(question);
	$('#result').html(arrayMagic8[random]);
})
	
})();