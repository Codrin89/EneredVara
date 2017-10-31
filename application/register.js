(function() {
	document.getElementById('registerAction').addEventListener('click', function(){
		var loginObj = {
			"fistName": document.getElementById('fname').value,
			"lastName": document.getElementById('lname').value,
			"email": document.getElementById('email').value,
			"password": document.getElementById('password').value,
			"gender": document.getElementById('gender').value,
			"username": document.getElementById('username').value,
			"address": document.getElementById('address').value,
			"telephone": document.getElementById('telephone').value
		}

		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost/api/register-data", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.responseText);
			}
		}
		xhr.send(JSON.stringify(registerObject));


	});

	document.getElementById('login').addEventListener('click', function(){
		window.location.href = "login.html";
	});


})();