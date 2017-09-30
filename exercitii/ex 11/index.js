(function() {

	$('.btn-primary').on('click', function() {

	var euro = $('#euroNo').val();
	var ratefrom = 137.51;
	var rateto = 100;

	var dollar = (euro * ratefrom) / rateto;
	var dollar = dollar.toFixed(2);


	$('#euroNumber').html(euro);
	$('#exchangeRate').html(ratefrom);
	$('#euroNumber2').html(euro);
	$('#exchangeRate2').html(ratefrom);
	$('#dollarNumber').html(dollar);




	});




})();