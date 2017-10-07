(function () {
	$('#verifyAge').on('click', function() {
		var userAge = $('#age').val() >= 18 ? $('#message').html('You are old enough to legally drive.') : $('#message').html('You are not old enough to legally drive.')
		if(userAge = NaN || userAge < 0) {
			alert("Please enter a valid age!")
		}

	});



})();