(function() {



	function getLatestListings() {

		var query = {
			"query": window.location.href.split('?query=')[1].replace('%20', ' ')
		}
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost/api/searchListings', true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				createNewListings(response);
			}
		}
		xhr.send(JSON.stringify(query));
	}

	getLatestListings();


	function createNewListings(data) {
		for(var i = 0 ; i < data.length ; i++) {
			var objectListing = $('<div class="col-md-4 new-items"><p>'+data[i].title+'</p><div class="image-wrapper"><img src="'+data[i].image+'"></div><p class="desctiption-new-items">'+data[i].description+'</p><span class="zona"><a href="">'+data[i].zone+'</a></span><span class="text-warning"> '+data[i].price+'/luna</span><button class="btn btn-primary details" data-id="'+data[i].ID+'">Detalii</button></div>');
			$('.search-listings').append(objectListing);
		}	
		$('.details').on('click', function() {
			window.location.href = 'singleListing.html?id=' + this.getAttribute('data-id');
		});
	}
	$('#searchBar').on('keyup', function(e) {
		if(e.keyCode == 13) {
			window.location.href = 'search.html?query=' + $('#searchBar').val();
		}
	});

	$('#loginPopUpAction').on('click', function() {
		var popup = $('.loginPopUp');
		if(popup.hasClass('displayNone')) {
			popup.removeClass('displayNone');
		} else {
			popup.addClass('displayNone');
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

	
})();