(function() {
	$('#openModal').on('click', function() {
		$('#modalTest').modal();
	});
	$('button[data-toggle="tooltip"]'). tooltip();
 	$('[data-toggle="popover"]').popover();
 	$('.carousel').carousel({
 		interval: 800,
 		pause: 'hover'
 	});
 })();