(function() {

	var database = [
		{
			"username": "Bogdan",
			"password": "dsadsa"
		},
		{
			"username": "Marian",
			"password": "dsfgafdg%%$&adsa"
		},
		{
			"username": "Petronel",
			"password": "Myfukinpass"
		},
		{
			"username": "Alexandra",
			"password": "gjffdgjh"
		}
		]


	
	$('#signIn').on('click', function() {
		var user = "john_doe";
		var pass = "my_password";
		
		var username = $('#username').val();
		var password = $('#password').val();
		for(var i = 0; i  < database.length; i++) {
			if(database[i].username == username) {
				if(database[i].password == password) {
					$('#error-label').html("Welcome " + username);
					break;
				} else { 
					$('#error-label').html("Username e ok!, password not ok");
					break;
				}
			} else {
				$('#error-label').html("User Not ok");
				$('#username').val("");
				$('#password').val("");
			}
		}
	});



	$('#signUp').on('click', function() {

		var registerUsername = $('#registerUsername').val();
		var registerPassword = $('#registerPassword').val();
		for(var i = 0; i  < database.length; i++) {
			if(registerUsername == database[i].username) {
				$('#error-label-register').html("User already exist!");
				return;
			}
		}
		// CHECK PASSWORD LENGTH

		if(registerPassword.length < 8) {
			$('#error-label-register').html("Password is not long enough!");
			return;
		}

		//Uppercase && lowercase on password
		var registerPassword2 = $('#registerPassword').val();
		if (registerPassword == registerPassword2.toLowerCase()) {
			$('#error-label-register').html("Password doesn't have an Uppercase");
			return;
		}
		if (registerPassword == registerPassword2.toUpperCase()) {
			$('#error-label-register').html("Password doesn't have a toLowerCase");
			return;
		}


		$('#error-label-register').html("User succesfully registered!");



	});


})();