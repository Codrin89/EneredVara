(function() {

	document.getElementById('registerAction').addEventListener('click', function(){

		var registerObject = {
			"firstName": document.getElementById('fname').value,
			"lastName": document.getElementById('lname').value,
			"username": document.getElementById('username').value,
			"email": document.getElementById('email').value,
			"password": document.getElementById('password').value,
			"gender": document.getElementById('gender').value,
			"address": document.getElementById('address').value,
			"phone": document.getElementById('phone').value
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

})();