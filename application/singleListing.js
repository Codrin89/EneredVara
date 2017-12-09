(function(){

	function checkLogin() {
		if(window.localStorage.getItem("loggedUser")) {
			$('#existingUser').show();
			$('#logoutPopUpAction').show();
			$('#existingUser').html(window.localStorage.getItem("loggedUserName"));
			$('#logoutPopUpAction').on('click', function() {
				window.localStorage.removeItem("loggedUser");
				window.localStorage.removeItem("loggedUserName");
				checkLogin();
			});
		} else {
			$('#loginPopUpAction').show();
			$('#existingUser').hide();
			$('#logoutPopUpAction').hide();
			$('#loginPopUpAction').on('click', function() {
				if($('#loginPopUp').hasClass('displayNone')) {
					$('#loginPopUp').removeClass('displayNone');
				} else {
					$('#loginPopUp').addClass('displayNone');
				}
			});

			document.getElementById('login').addEventListener('click', function(){

				var loginObject = {
					"username": document.getElementById('username').value,
					"password": document.getElementById('password').value
				}

				var xhr = new XMLHttpRequest();
				xhr.open("POST", "http://localhost/api/login-data", true);
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						if (xhr.responseText !="Try again!") {
							var response = JSON.parse(xhr.responseText);
							window.localStorage.setItem("loggedUser", response.ID);
							window.localStorage.setItem("loggedUserName", response.username);
							$('.loginPopUp').addClass('displayNone');
							checkLogin();
						} else{
							alert('bad login');
						}
					}
				}
				xhr.send(JSON.stringify(loginObject));
			})

			document.getElementById('register').addEventListener('click', function(){
				window.location.href = 'register.html';
			})
		}
	}
			document.getElementById('contact').addEventListener('click', function(){
				window.location.href = 'contact.html';
			})
	checkLogin();

	var single = {
		"ID": window.location.href.split('id=')[1]
	}
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost/api/getSingleListing', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = JSON.parse(xhr.responseText);
			createSingleListing(response);
		}
	}
	xhr.send(JSON.stringify(single));

	function createSingleListing(value) {

		$('.title').html(value.title);
		$('.rooms').html(value.rooms);
		$('.bath').html(value.bath);
		$('.floor').html(value.floor);
		$('.structure').html(value.structure);
		$('.year').html(value.year);
		$('.container').html(value.container);
		$('.surface').html(value.surface);
		$('.price').html(value.price);
		$('.zone').html(value.zone);
		$('.image-listing').attr('src', value.image);
		$('.desctiption-items').html(value.description);

	}
	$('#searchBar').on('keyup', function(e) {
		if(e.keyCode == 13) {
			window.location.href = 'search.html?query=' + $('#searchBar').val();
		}
	});

	$('#saveListing').on('click', function() {
		var saveObject = {
			"userID": window.localStorage.getItem("loggedUser"),
			"listingID": window.location.href.split('id=')[1]
		}

		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost/api/saveListing', true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				alert("am salvat")
			}
		}
		xhr.send(JSON.stringify(saveObject));
	});

	$('.logo').on('click', function() {
		window.location.href = 'main.html';
	});
	


})();