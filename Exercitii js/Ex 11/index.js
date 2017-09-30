(function(){


	$('#resolve').on('click', function() {
		var euro = $('#euroNo').val();
		var rateFrom = 137.51;
		var rateTo = 100;
		var dollar = (euro * rateFrom) / rateTo;
			dollar = Math.ceil(dollar * 100) / 100;
			console.log(dollar);
		$('#euroNumber').html(euro);
		$('#exchangeRate').html(rateFrom);
		$('#euroNumber2').html(euro);
		$('#exchangeRate2').html(rateFrom);
		$('#dollarNumber').html(dollar);
	})

})();