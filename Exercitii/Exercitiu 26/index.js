(function() {

	document.getElementById('password').addEventListener('keyup', function() {
		checkPasswordRegex();
	});


	function checkPasswordStrength() {
		var passwordInput = document.getElementById('password').value;
		//check numbers
		var hasNumbers = false;
		var hasLetters = false;
		passwordInput = passwordInput.split('');

		for(var i = 0 ; i < passwordInput.length ; i++) {
			if(parseInt(passwordInput[i])) {
				hasNumbers = true;
			} else {
				hasLetters = true;
			}
		}

		if(hasLetters == false && passwordInput.length < 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Weak just numbers!';
		}
		if(hasLetters == true && passwordInput.length < 8 && hasNumbers == false) {
			document.getElementById('password-strength-label').innerHTML = 'Weak just letters!';
		}
		if(hasLetters == true && passwordInput.length < 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Weak letters and numbers!';
		}
		if(hasLetters == true && passwordInput.length >= 8 && hasNumbers == false) {
			document.getElementById('password-strength-label').innerHTML = 'Ok but just letters!';
		}
		if(hasLetters == false && passwordInput.length >= 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Ok but just numbers!';
		}
		if(hasLetters == true && passwordInput.length >= 8 && hasNumbers == true) {
			document.getElementById('password-strength-label').innerHTML = 'Password OK!';
		}
	}


	function checkPasswordRegex() {
		var passwordInput = document.getElementById('password').value;
		//numbers only
		if(passwordInput.length > 8) {
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
			var reg = new RegExp('^[0-9A-Za-z]+$');
			var numbersAndLowerUpperCase = reg.test(passwordInput);
			var reg = new RegExp('^[0-9A-Za-z!@#$%^&*]+$');
			var specialCharsAndEverything = reg.test(passwordInput);
			if(specialCharsAndEverything) {
				document.getElementById('error-label').innerHTML = 'Upper and lower + numbers + special chars';
			}
			if(numbersAndLowerUpperCase) {
				document.getElementById('error-label').innerHTML = 'Upper and lower + numbers';
			}
			if(numbersAndUpperCase) {
				document.getElementById('error-label').innerHTML = 'Upper and number';
			}
			if(numbersAndLowerCase) {
				document.getElementById('error-label').innerHTML = 'Lower and number';
			}
			if(upperCaseLetters) {
				document.getElementById('error-label').innerHTML = 'Just uppercase';
			}
			if(lowerCaseLetters) {
				document.getElementById('error-label').innerHTML = 'Just lowercase';
			}
			if(justNumbers) {
				document.getElementById('error-label').innerHTML = 'Just numbers';
			}
			
		} else {
			document.getElementById('error-label').innerHTML = 'Write some more!';
		}
		
	}

})();