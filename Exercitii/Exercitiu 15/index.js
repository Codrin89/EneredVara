(function() {

	var database = [
			{
				"user": "Bogdan",
				"password": "hytRf"
			},
			{
				"user": "Marian",
				"password": "hy4Rf"
			},
			{
				"user": "Andreea",
				"password": "hy7Rf"
			},			
			{
				"user": "Eva",
				"password": "hlHtRf"
			}
		];


	$('#exe15').on('click' , function(){
		var inputPassword = $('#passwordValue').val();
		var inputUsername = $('#userValue').val();

		

		for (var i = 0; i < database.length; i++) {
			
			if ( database[i].password == inputPassword && database[i].user == inputUsername ){
				$('#error-label').html("Welcome " + database[i].user);
				break;
			} else if (database[i].user == inputUsername && database[i].password ==! inputPassword) {				
				$('#error-label').html("Wrong password " + database[i].user);
			} else {
				$('#error-label').html("I don't know you " + inputUsername);		
			};

		}
		// if ( inputPassword == database[1].password && inputUsername == database.user ){
		// 	alert("Welcome " + database.user);
		// } else {
		// 	alert("I don't know you " + inputUsername);
		// };

		// var password = "5u76jH";
		// var inputPassword = $('#passwordValue').val();

		// if ( password === inputPassword) {
		// 	alert("Welcome");
		// 	$('#password').html(inputPassword);

		// } else {
		// 	alert("I don't know you!");

		// }

	});


	// REGISTER
	$('#register').on('click' , function(){
		
		var userRegister = $('#userValueRegister').val();
		var passwordRegister = $('#passwordValueRegister').val();


		for (var i = 0; i < database.length; i++) {
			// USERNAME
			if (passwordValueRegister == database[i].user) {
				$('#error-labelRegister').html("This username allready exists");
				return;
			}
			// PASSWORD
			if (passwordRegister.length < 8) {
				$('#error-labelRegister').html("Password to short");
			}
			// uppercase and lowercase
			var passwordRegister2 = $('#passwordValueRegister').val();

			if ( passwordRegister == passwordRegister2.toLowerCase()) {
				$('#error-labelRegister').html("Password doesent have uppercase");
				return;
			}

			if ( passwordRegister == passwordRegister2.toUpperCase() ) {
				$('#error-labelRegister').html("Password doesent have lowercase");
				return;
			}
		}
		$('#error-labelRegister').html("User succesfully created!");
	});
})();

