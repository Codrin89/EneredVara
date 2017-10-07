(function() {

	document.getElementById('password').addEventListener('keyup', function () {
		// checkPasswordStrength();
		checkPasswordRegex();
	});

	// function checkPasswordStrength() {
	// 	var passwordInput = document.getElementById('password').value;
	// 	*check numbers*
	// 	var hasNumbers = false;
	// 	var hasLetters = false;
	// 	passwordInput = passwordInput.split('');

	// 	for (var i = 0; i < passwordInput.length; i++) {
	// 		if(parseInt(passwordInput[i])) {
	// 			hasNumbers = true;
	// 		} else {
	// 			hasLetters = true;
	// 		}
	// 	}

	// 	if (hasLetters == false && passwordInput.length < 8 && hasNumbers == true) {
	// 		document.getElementById('password-strength-label').innerHTML = 'Week just numbers!';
	// 	}
	// 	if (hasLetters == true && passwordInput.length < 8 && hasNumbers == false) {
	// 		document.getElementById('password-strength-label').innerHTML = 'Week just letters!';
	// 	}
	// 	if (hasLetters == true && passwordInput.length < 8 && hasNumbers == true) {
	// 		document.getElementById('password-strength-label').innerHTML = 'Week letters and numbers';
	// 	}
	// 	if (hasLetters == true && passwordInput.length >= 8 && hasNumbers == false) {
	// 		document.getElementById('password-strength-label').innerHTML = 'OK but just letters!';
	// 	}
	// 	if (hasLetters == false && passwordInput.length >= 8 && hasNumbers == true) {
	// 		document.getElementById('password-strength-label').innerHTML = 'OK but just numbers!';
	// 	}
	// 	if (hasLetters == true && passwordInput.length >= 8 && hasNumbers == true) {
	// 		document.getElementById('password-strength-label').innerHTML = 'Password OK!';
	// 	}
	// }

	function checkPasswordRegex() {

		var passwordInput = document.getElementById('password').value;
		//numbers only
		if (passwordInput.length > 8) {
			var reg = new RegExp('^[0-9]+$');
			var justNumbers = reg.test(passwordInput);
			var reg = new RegExp('^[a-z]+$');
			var lowerCaseLetters = reg.test(passwordInput);
			var reg = new RegExp('^[A-Z]+$');
			var upperCaseLetters = reg.test(passwordInput);
			var reg = new RegExp('^[0-9a-z]+$');
			var numbersAndLowerCase = reg.test(passwordInput);
			var reg = new RegExp('^[0-9A-Z]+$');
			var numbersAndUpperCase = reg.test(passwordInput);
			var reg = new RegExp('/[0-9a-9A-Za-Z]+$');
			var numbersAndLowerAndUpperCase = reg.test(passwordInput);
			if (numbersAndLowerAndUpperCase) {
				document.getElementById('password-strength-label').innerHTML = 'Lower Upper and numbers!'
			} else {
				if (numbersAndUpperCase) {
					document.getElementById('password-strength-label').innerHTML = 'Upper and number!'
				}
				if (numbersAndLowerCase) {
					document.getElementById('password-strength-label').innerHTML = 'Lower and number!'
				}
				if (upperCaseLetters) {
					document.getElementById('password-strength-label').innerHTML = 'Just uppercase!'
				}
				if (lowerCaseLetters) {
					document.getElementById('password-strength-label').innerHTML = 'Just lowercase!'
				}
				if (justNumbers) {
					document.getElementById('password-strength-label').innerHTML = 'Just numbers!'
				}

			}

			
			document.getElementById('password-strength-label').innerHTML = '';
		} else {
			document.getElementById('password-strength-label').innerHTML = 'Write some numbers!'
		}
	}

})();