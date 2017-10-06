(function() {
	$('.btn-primary').on('click', function() {
		var ppl = ($('#pplNo').val());
		var pizza = ($('#pizzaNo').val());
		var slices = ($('#slicesNo').val());

		var totalSlices = pizza * slices ;

		var numberOfSlicesPerPpl = Math.floor(totalSlices / ppl);

		var numberOfSlicesUsed = numberOfSlicesPerPpl * ppl;
		var numbberOfSlicesRemaining = totalSlices - numberOfSlicesUsed;

		$('#pplNumber').html(ppl);
		$('#pizzaNumber').html(pizza);
		$('#pplNumber2').html(ppl);
		$('#pizzaNumber2').html(pizza);
		$('#slicesNumber').html(numberOfSlicesPerPpl);

		if (numberOfSlicesPerPpl == 1) {
			$('#pluralization').html('Each person gets ' + ('<span>') + numberOfSlicesPerPpl + ('</span>') + ' piece of pizza.');
		} else {
			$('#pluralization').html('Each person gets ' + ('<span>') + numberOfSlicesPerPpl + ('</span>') + ' pieces of pizza.')
		};		
		$('#slicesRemaining').html(numbberOfSlicesRemaining);

	});

})();