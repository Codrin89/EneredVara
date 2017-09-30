(function() {

	$('.btn-primary').on('click', function() {

	var principalAmount = $('#principalAmount').val();
	var rateOfInterest = $('#rateOfInterest').val();
	var numberOfyears = $('#numberOfyears').val();



	var result = principalAmount * (1 + (rateOfInterest / 100) * numberOfyears);

	$('#numberOfYears').html(numberOfyears);
	$('#rateOfInterest2').html(rateOfInterest);
	$('#result').html(result);



	});




})();