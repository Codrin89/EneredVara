(function() {
	document.getElementById('loginAction').addEventListener('click', function(){

		var loginObject = {
			"username": document.getElementById('username').value,
			"password": document.getElementById('password').value
		}

        var num = 0;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost/api/login-data", true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				if (response != "Try again!") {
					window.localStorage.setItem("loggedUser", response.id);
					window.localStorage.setItem("loggedUserName", response.username);
					console.log("You win this time!");
                     console.log(window.localStorage.getItem('loggedUser'))
                     console.log(window.localStorage.getItem('loggedUserName'));
                     window.location.href = "main.html";
                     
				} 
         
			} else {
				if(num != 1 && window.localStorage.getItem("loggedUserName") === null) {
				    $(".error").append("The username or the password is wrong. Please try again!");
				    num += 1;
                }
			}

				
		}
		xhr.send(JSON.stringify(loginObject));
			
	})

	document.getElementById('register').addEventListener('click', function(){
		console.log(window.location.href);
		window.location.href = "register.html";
	})


})();