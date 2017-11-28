(function() {
	document.getElementById('login').addEventListener('click', function(){

		var loginObject = {
			"username": document.getElementById('username').value,
			"password": document.getElementById('password').value
		}

		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost/api/login-data", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				if (response !="Try again!") {
					window.localStorange.setItem("loggedUser", response.ID);

				} else{
					
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