(function() {


	var database = [
	{
		"username": "Bogdan",
		"password": "Bogdan123"
	},
	{
		"username": "Eva",
		"password": "Eva123"
	},
	{
		"username": "Marian",
		"password": "Marian123"
	},
	{
		"username": "Codrin",
		"password": "Codrin123"
	}
	];


	document.getElementById('login-button').addEventListener('click',function() {

		var user = 'Andreea';
		var pass = 'Andreea123';

		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;

		// if(user ==username) {
		// 	if(pass == password) {
		// 		document.getElementById('error-label').innerHTML = 'Wellcome';
		// 	} else {
		// 		//write "I don't Know you!"
		// 		document.getElementById('error-label').innerHTML = 'username OK , but password not OK!';
		// 	}
		// } else {
		// 	//write "I don't know you"
		// 	document.getElementById('error-label').innerHTML = 'username not OK';
		// }


		for (var i = 0; i < database.length; i++) {
			
			if(database[i].username == username && database[i].password == password) {
				document.getElementById('error-label2').innerHTML = username + "is corect";
				break;
			} else {
				//write "I don't know you!"
				document.getElementById('error-label2').innerHTML = 'username or password nok';
			}
		}

		//a doua varianta: if(user == username && pass == password) {

		// }
	});

	document.getElementById('register-button').addEventListener('click',function() {
		//register
		var userRegister = document.getElementById('registerUsername').value;
		var passwordRegister = document.getElementById('registerPassword').value;

		for (var i = 0; i < database.length; i++) {
			if (userRegister == database[i].username) {
				document.getElementById('error-label-register').innerHTML = 'User exist';
				return;
			}
		}

		//check password length more than 8 chars
		if(passwordRegister.length < 8) {
			document.getElementById('error-label-register').innerHTML = 'Password to short';
			return;
		}
		//uppercase && lowercase an password
		var passwordRegister2 = document.getElementById('registerPassword').value;
		if (passwordRegister == passwordRegister2.toLowerCase()) {
			document.getElementById('error-label-register').innerHTML = 'Password dosent have uppercase!';
			return;
		}
		if (passwordRegister == passwordRegister2.toUpperCase()) {
			document.getElementById('error-label-register').innerHTML = 'Password dosent have lowercase!';
			return;
		}
		document.getElementById('error-label-register').innerHTML = 'User succesfully!';

	});


})();