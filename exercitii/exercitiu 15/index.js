(function() {

	var database = [
		{  
		 "username": "Marius",
		"password": "marius12"
		},

		{  
		 "username": "Elena",
		"password": "ele12"
		},

		{  
		 "username": "Maria",
		"password": "mary"
		},

		{  
		 "username": "Rares",
		"password": "raree"
		}

	];

	document.getElementById('login-button').addEventListener('click',function() {

		var user = 'OanaOV';
		var pass = 'numelemeu';

		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;

		//if (user == username) {
		//	if (pass == password) {
		//		document.getElementById('error-label').innerHTML = 'Welcome ' + username;

		//	} else {
				//write "I don't know you"
		//		document.getElementById('error-label').innerHTML = 'Username OK, but password not ok!';
			// }
		//} else {
			//write "I don't know you"
		//		document.getElementById('error-label').innerHTML = 'Username not ok!';
		//}
		
		for(var i = 0 ; i < database.length ; i ++){
		
		 if (database[i].username == username && database[i].password == password) {
		 	document.getElementById('error-label2').innerHTML = username + " is correct";
		 	break;
		 } else {
		 	//write "I don't know you"
		 	document.getElementById('error-label2').innerHTML = 'Username  or password not ok!';

		 }
		 
  		} 


	});


	document.getElementById('register-button').addEventListener('click',function() {
		//REGISTER
		var userRegister = document.getElementById('RegisterUsername').value;
		var passwordRegister = document.getElementById('RegisterPassword').value;

		for(var i = 0 ; i < database.length ; i++) {
			if(userRegister == database[i].username) {
				document.getElementById('error-label-register').innerHTML = 'User exist already !!!'
				return;
			}
		}
		//check password length more then 8 chars
		if(passwordRegister.length < 8) {
			document.getElementById('error-label-register').innerHTML = 'Password too  short !!!'
			return;

		}
		//uppercase && lowercase on password
		var passwordRegister2 = document.getElementById('RegisterPassword').value;
		if(passwordRegister == passwordRegister2.toLowerCase()) {
			document.getElementById('error-label-register').innerHTML = 'Passowrd doesnt have uppercase'
			return;
		}
		if(passwordRegister == passwordRegister2.toUpperCase()) {
			document.getElementById('error-label-register').innerHTML = 'Passowrd doesnt have lowercase'
			return;
		}
		document.getElementById('error-label-register').innerHTML = 'User successufully'
	});

 })();
