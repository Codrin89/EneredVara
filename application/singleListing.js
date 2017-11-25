(function(){

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

	$('.logo').on('click', function() {
		window.location.href = 'main.html';
	});


})();