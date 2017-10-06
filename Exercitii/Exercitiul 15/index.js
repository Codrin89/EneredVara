(function() {

	var database = [
	{	"username":"Marian",
		"password":"asda"
	},
	{	"username":"Marian2",
		"password":"asda2"
	},
	{	"username":"Marian3",
		"password":"asda3"
	},
	{	"username":"Marian4",
		"password":"asda4"
	}
	];

document.getElementById('login-button').addEventListener('click', function() {

	var user = 'Codrin';
	var pass = 'codrin123';

	var username= document.getElementById('username').value;
	var password= document.getElementById('password').value;

	//if (user == username) {
	//	if(pass == password) {

	//		} else {
			//Write "I don`t know you!"
	//			document.getElementById('error-label').innerHTML = 'Username ok ,but password not ok !';
	//		}
	//} else {
	//document.getElementById('error-label').innerHTML = 'Username not ok !';
	//}
	for(var i = 0; i < database.length; i++){

		if(database[i].username == username && database[i].password == password) {
			document.getElementById('error-label2').innerHTML = 'Is corect';
			break;
		} else {
			//Write "Idont know you!"
			document.getElementById('error-label2').innerHTML = 'Username or password not ok';
		}
		
	}
	
	
});

	document.getElementById('register-button').addEventListener('click' ,function() {
		//REGISTER
		var userRegister = document.getElementById('registerUsername').value;
		var passwordRegister = document.getElementById('registerPassword').value;

		for(var i = 0 ; i < database.length ; i++){
			if(userRegister == database[i].username) {
				document.getElementById('error-label-register').innerHTML = 'User exists';
				return;
	}
}
	
	//check password length more than 8 characters
	if(passwordRegister.length < 8) {
		document.getElementById('error-label-register').innerHTML = 'Password too short';
		return;
	}
	//uppercase && lowercase on password
	var passwordRegister2 = document.getElementById('registerPassword').value;
	if(passwordRegister == passwordRegister2.toUpperCase()) {
		document.getElementById('error-label-register').innerHTML = 'Password doesn`t have Lowercase';
		return;
	}
	if(passwordRegister == passwordRegister2.toLowerCase()) {
		document.getElementById('error-label-register').innerHTML = 'Password doesn`t have Uppercase';
		return;
	}
	document.getElementById('error-label-register').innerHTML = 'User Succesfully!';
	});

	

})();