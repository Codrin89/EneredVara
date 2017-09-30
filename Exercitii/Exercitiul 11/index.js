(function(){
	$('.btn-primary').on('click', function(){
		var euro = $('#euroNo').val();
		var ratefrom = 137.51;
		var rateto = 100;

		var dollar = euro * ratefrom / rateto;

	


		$('#euroNumber').html(euro);
		$('#euroNumber2').html(euro);
		$('#exchangeRate').html(ratefrom);
		$('#exchangeRate2').html(ratefrom);
		$('#dollarNumber').html(dollar.toFixed(2));
		
	

	

		
		
});

})();