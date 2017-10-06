(function() {
	$('.btn-primary').on('click', function(){
		var passwordValueString = '25Gbr7';
		var passwordVal = $('#passwordValue').val();

		if (passwordValueString == passwordVal) {
			alert('Welcome');
		} else {
			alert("I don't know you.");
		}
		


		$('#password').html(passwordVal);

	});

})();