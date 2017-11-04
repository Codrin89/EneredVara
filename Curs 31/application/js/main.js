(function() {

	$(document).ready(function() {

// CHECK FOR USER LOGIN

		var loggedUser = window.localStorage.getItem('loggedUser');
		var loggedObject = {
			"ID": loggedUser
		}
		if(loggedUser) {
			var xhr = new XMLHttpRequest();
		// REMEMBER TO CHANGE TO LINK
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

// REGISTER FORM

	$('#registerAction').on('click', function(){

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
		// REMEMBER TO CHANGE TO LINK
		xhr.open("POST", "http://localhost/api/register-data", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.responseText);
			}
		}
		xhr.send(JSON.stringify(registerObject));
	});

// LOGIN FORM
	$('#loginAction').on('click', function() {

		var loginObject = {
			"username": document.getElementById('username').value,
			"password": document.getElementById('password').value
		}

		var xhr = new XMLHttpRequest();
		// REMEMBER TO CHANGE TO LINK
		xhr.open("POST", "http://localhost/api/login-data", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				if(response != "Try again!") {
					window.localStorage.setItem("loggedUser", response.ID);
				} 
			}
		}
		xhr.send(JSON.stringify(loginObject));
	});
// TABS
	$( function() {
    	$( "#formTabs" ).tabs();
  } );

	var $inputItem = $(".js-inputWrapper");
		$inputItem.length && $inputItem.each(function() {
		  var $this = $(this),
		      $input = $this.find(".formRow--input"),
		      placeholderTxt = $input.attr("placeholder"),
		      $placeholder;
		  
		  $input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
		  $input.attr("placeholder", ""),
		  $placeholder = $this.find(".placeholder"),
		  
		  $input.val().length ? $this.addClass("active") : $this.removeClass("active"),
		      
		  $input.on("focusout", function() {
		      $input.val().length ? $this.addClass("active") : $this.removeClass("active");
		  }).on("focus", function() {
		      $this.addClass("active");
		  });
		});

})();