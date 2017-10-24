(function () {
	document.getElementById('password').addEventListener('keyup', function() {
		checkPasswordStrength();
	});

	function checkPasswordStrength() { 
        var passwordInput = document.getElementById('password').value;
        var hasNumbers = false;
        var hasLetters = false;
        passwordInput = passwordInput.split();

        for(var i = 0 ; i < passwordInput.length ; i++ ) {
        	if (parseInt(passwordInput[i])) {
        		hasNumbers = true;
        	}else{
        		hasLetters = true;
        	}
        }

        if(hasLetters == false && passwordInput.length < 8 && hasNumbers == true) {
        	document.getElementById('password-strength-label').innerHTML = 'Weak just numbers';
        }
        if(hasLetters == true && passwordInput.length < 8 && hasNumbers == false) {
        	document.getElementById('password-strength-label').innerHTML = 'Weak just letters';
        }
        if(hasLetters == true && passwordInput.length < 8 && hasNumbers == true) {
        	document.getElementById('password-strength-label').innerHTML = 'Weak just letters and numbers';
        }
        if(hasLetters == true && passwordInput.length >= 8 && hasNumbers == false) {
        	document.getElementById('password-strength-label').innerHTML = 'Ok but just..';
        }
        if(hasLetters == false && passwordInput.length >= 8 && hasNumbers == false) {
        	document.getElementById('password-strength-label').innerHTML = 'Ok but just weak';
        }
        if(hasLetters == true && passwordInput.length >= 8 && hasNumbers == true) {
        	document.getElementById('password-strength-label').innerHTML = 'Password ok';
        }
	}

	function checkPasswordRegex() {
		var passwordInput = document.getElementById('password').value;
	  if(passwordInput.length < 8 ) {
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
		var numbersAndLowerAndUpperCase = reg.test(passwordInput);
		if(numbersAndLowerAndUpperCase) {
			document.getElementById('password-strength-label').innerHTML = 'Lower Upper and number';

		}else{
		  if(numbersAndLowerAndUpperCase) {
			document.getElementById('password-strength-label').innerHTML = 'Upper and number';
		  }
		  if(numbersAndLowerAndUpperCase) {
			document.getElementById('password-strength-label').innerHTML = 'Lower and number';
  
          }
          if(numbersAndLowerAndUpperCase) {
			document.getElementById('password-strength-label').innerHTML = 'Just uppercase';
   
          }
          if(numbersAndLowerAndUpperCase) {
			document.getElementById('password-strength-label').innerHTML = 'Just lowercase';
     
          }
          if(numbersAndLowerAndUpperCase) {
			document.getElementById('password-strength-label').innerHTML = 'Lower Upper and number';
 
          }
          if(numbersAndLowerAndUpperCase) {
			document.getElementById('password-strength-label').innerHTML = 'Lower Upper and number';


   }
}


        document.getElementById('password-strength-label').innerHTML = '';
    }else{

    	document.getElementById('password-strength-label').innerHTML = 'Write something';
        }
      }

})();