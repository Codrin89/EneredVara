(function() {
	$('#resolve').on('click', function() {
		var principal = $('#principal').val();
		var rateOfInterest = $('#rateOfInterest').val();
		var numberOfYears = $('#numberOfYears').val();
		$('#years').html(numberOfYears);
		$('#rateValue').html(rateOfInterest);
		var totalInterest = (principal * (rateOfInterest /100) * numberOfYears);
		$('#totalAmount').html(parseInt(principal) + parseInt(totalInterest));
	})

})();