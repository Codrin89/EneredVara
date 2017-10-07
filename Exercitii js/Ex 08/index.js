(function() {

	$('#resolve').on('click', function() {
		var ppl = $('#pplNo').val();
		var pizza = $('#pizzaNo').val();
		var slices = $('#sliceNo').val();
		var totalSlices = pizza * slices;
		console.log('total: ' + totalSlices );

		var numberOfSlicesPerPpl = Math.floor(totalSlices / ppl);
		console.log('slices per ppl: ' + numberOfSlicesPerPpl);
		var numberOfSlicesUsed = numberOfSlicesPerPpl * ppl;
		var numberOfSlicesRemaining = totalSlices - numberOfSlicesUsed;
		console.log('slices remaining: ' + numberOfSlicesRemaining);
		$('#pplNumber').html(ppl);
		$('#pizzaNumber').html(pizza);
		$('#pplNUmber2').html(ppl);
		$('#pizzaNumber2').html(totalSlices);
		$('#slicesNumber').html(numberOfSlicesPerPpl);
		$('#slicesRemaining').html(numberOfSlicesRemaining);

	});
	
})();