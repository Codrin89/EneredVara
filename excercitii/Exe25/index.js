(function() {

	document.getElementById('password').addEventListener('keyup', function() {
		checkPasswordStrength();
	});

	function checkPasswordStrength() {
		var passwordInput = document.getElementById('password').value;
		var hasNumbers = false;
		var hasLetters = false;
		passwordInput = passwordInput.split('');

		for(var i = 0 ; i < passwordInput.length ; i++) {
			if(parseInt(passwordInput[i])) {
				hasNumbers = true;
			}else {
				hasLetters = true;
			}
		}
		if(hasLetters == false && passwordInput.length < 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Very weak password!';
		}
		if(hasLetters == true && passwordInput.length < 8 && hasNumbers == false) {
			document.getElementById('password-strength-label').innerHTML = 'Weak password!';
		}
		if(hasLetters == true && passwordInput.length < 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Weak letters and numbers password!';
		}
		if(hasLetters == true && passwordInput.length >= 8 && hasNumbers == false) {
			document.getElementById('password-strength-label').innerHTML = 'Ok but just numbers password!';
		}
		if(hasLetters == false && passwordInput.length >= 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Ok but just letters password!';
		}
		if(hasLetters == true && passwordInput.length >= 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Strong password!';
		}
	}

	function checkPasswordRegex() {
		var passwordInput = document.getElementById('password').value;
		if(passwordInput.length < 8) {
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
			var reg = new RegExp('^[0-9a-zA-Z]+$');
			var numbersAndLowerCaseAndUpperCase = reg.test(passwordInput);

			if(numbersAndLowerCaseAndUpperCase) {
				document.getElementById('password-strength-label').innerHTML
 				= 'Lower Upper and Number'	
 			} else {
	 			if(numbersAndUpperCase) {
	 				document.getElementById('password-strength-label').innerHTML = 'Upper and number';
	 			}
	 			if(numbersAndLowerCase) {
	 				document.getElementById('password-strength-label').innerHTML = 'Lower and number';
	 			}
	 			if(upperCaseLetters) {
	 				document.getElementById('password-strength-label').innerHTML = 'Just uppercase';
	 			}
	 			if(lowerCaseLetters) {
	 				document.getElementById('password-strength-label').innerHTML = 'Just lowercase';
	 			}
	 			if(justNumbers) {
	 				document.getElementById('password-strength-label').innerHTML = 'Just numbers';
	 			}
 			}

				document.getElementById('password-strength-label').innerHTML = 'Weak';
			} else {
				document.getElementById('password-strength-label').innerHTML = 'Good';
			}
		
	}

})();