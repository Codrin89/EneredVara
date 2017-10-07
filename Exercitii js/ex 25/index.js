(function() {
	$('#password').on('keyup', function() {
		checkPasswordRegex();
	});

	function checkPasswordStrength() {
		var passwordInput = $('#password').val();
		// check numbers
		var hasNumbers = false;
		var hasLetters = false;
		passwordInput = passwordInput.split("");
		console.log(passwordInput);

		for(var i = 0; i < passwordInput.length; i++) {
			if(parseInt(passwordInput[i])) {
				hasNumbers = true;
			} else {
				hasLetters = true;
			}

		}

		if(hasLetters == false && passwordInput.length < 8 && hasNumbers == true) {
			$('#message').html("weak just numbers");
		}
		if(hasLetters == true && passwordInput.length < 8 && hasNumbers == false) {
			$('#message').html("weak just letters");
		}
		if(hasLetters == true && passwordInput.length < 8 && hasNumbers == true) {
			$('#message').html("Weak Letter and numbers NO Length");
		}
		if(hasLetters == false && passwordInput.length > 8 && hasNumbers == true) {
			$('#message').html("Weak Letter and numbers NO Length");
		}
		if(hasLetters == true && passwordInput.length > 8 && hasNumbers == true) {
			$('#message').html("Strong Password");
		}
	}

	function checkPasswordRegex(){
		var passwordInput = $('#password').val();
		//number only
		if(passwordInput.length > 8) {
			var reg = new RegExp('^[0-9]+$');
			var justNumbers = reg.test(passwordInput);
			console.log(justNumbers)
			var reg = new RegExp('^[a-z]+$');
			var lowerCaseLetters = reg.test(passwordInput);
			var reg = new RegExp('^[A-Z]+$');
			var upperCaseLetters = reg.test(passwordInput);
			var reg = new RegExp('^[0-9a-z]+$');
			var numbaersAndLowerCase = reg.test(passwordInput);
			var reg = new RegExp('^[0-9A-Z]+$');
			var numbersAndUpperCase = reg.test(passwordInput);
			var reg = new RegExp('^[0-9a-zA-Z]+$');
			var numbaerAndLowerAndUpperCase = reg.test(passwordInput);
			if (numbaerAndLowerAndUpperCase){
				$('#message').html("Lower Upper And Numbers.");
			} 
			if(numbersAndUpperCase){
				$('#message').html("Number and Uppers");
			}
			if(numbaersAndLowerCase){
				$('#message').html("Number and Lower");
			}
			if(upperCaseLetters){
				$('#message').html("Just uppers");
			}
			if(lowerCaseLetters){
				$('#message').html("just lowers");
			}
			if(justNumbers){
				$('#message').html("Just numbers");
			}
			
		} else {
			$('#message').html("Mai baga ceva caractere!");
		}
	}

})();