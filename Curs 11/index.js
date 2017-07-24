(function() {

	$('#carousel-inner').on('click', function() {
		$('#carousel-inner').modal();
	});
	$('.carousel').carousel({
		interval: 1000,
		pause:'hover'
	});


})();