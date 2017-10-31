(function() {

	$(document).ready(function() {

		var loggedUser = window,localStorage.getItem('loggedUser');
		var loggedObject = {
			"ID":loggedUser
		}
		if (loggedUser) {
			var xhr = new XMLHtppRequest();
			xhr.open("POST", "http://localhost/api/checkLoggedIn", true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var response = JSON.parse(xhr.responseText);
					$('#loggedUser').html(response.firstName);

				}
		 	}
			xhr.send(JSON.stringify(loggedObject));
		}
	});

})();