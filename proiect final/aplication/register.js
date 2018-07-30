(function() {

	  

	$('#registerAction').click(function(){
		var fname = $("#fname");
		var lname = $("#lname");
		var email = $("#email");
		var pass = $("#password");
		var adress =$("#address");
		var gender = $("#gender");
		var usern = $("#username");
		var phone = $("#phone");
		
      
		var registerObject = {
			"firstName": document.getElementById('fname').value,
			"lastName": document.getElementById('lname').value,
			"email": document.getElementById('email').value,
			"password": document.getElementById('password').value,
			"gender": document.getElementById('gender').value,
			"address": document.getElementById('address').value,
			"username": document.getElementById('username').value,
			"telephone": document.getElementById('phone').value
		}

		
       
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost/api/register-data", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.responseText);
			}
		}
		xhr.send(JSON.stringify(registerObject));
        window.location.href="login.html";
		

	});





	

})();