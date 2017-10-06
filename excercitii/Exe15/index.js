(function() {

	var database = [
		{
			"username": "Bogdan",
			"password": "sadasfgf"
		},
		{
			"username": "Marian",
			"password": "hgfhr"
		},
		{
			"username": "Eva",
			"password": "juhr"
		},
		{
			"username": "Adi",
			"password": "lktdfs"
		}
	];

	document.getElementById('login-button').addEventListener('click',function(){
		var user = 'proton';
		var pass = 'neutron';

		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;

		// if(user == username) {
	 // 		if(pass == password) {
	 // 			document.getElementById('error-label').innerHTML = 'Welcome' + username;
	 // 		} else{
		//  		// write: "I don't know you"
		//  		document.getElementById('error-label').innerHTML = 'Username ok, but password not ok';
	 // 		} 
		// } else {
	 // 		document.getElementById('error-label').innerHTML = 'Username not ok';
	 //    }

	 	for(var i= 0; i < database.length ; i++) {


		 if(database[i].username == username && database[i].password == password) {
		 	document.getElementById('error-label2').innerHTML = username + ' is corect';
		 	break;
		} else {
			document.getElementById('error-label2').innerHTML = 'Username or password not ok';
		}
	}
	});

	document.getElementById('register-button').addEventListener('click',function(){
		var userRegister = document.getElementById('registerUsername').value;
		var passwordRegister = document.getElementById('registerPassword').value;

		for(var i = 0 ; i < database.length ; i++) {
			if(userRegister == database[i].username) {
				document.getElementById('error-label-register').innerHTML = "User allready exist";
				return;
			}
		}
		if(passwordRegister.length < 8) {
			document.getElementById('error-label-register').innerHTML = 'Password too short';
			return;
		}
		var passwordRegister2 = document.getElementById('registerPassword').value;
		if(passwordRegister == passwordRegister2.toLowerCase()) {
			document.getElementById('error-label-register').innerHTML = "Password doesn't have Uppercase";
			return;
		}
		if(passwordRegister == passwordRegister2.toUpperCase()){
			document.getElementById('error-label-register').innerHTML = "Password doesn't have Lowercase";
			return;
		}
		document.getElementById('error-label-register').innerHTML = 'User Successfully registererd';
	});

})();