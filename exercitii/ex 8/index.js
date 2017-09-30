(function() {

	$('.btn-primary').on('click', function() {
		var ppl = $('#pplNo').val();
		var pizza = $('#pizzaNo').val();
		var slices = $('#slicesNo').val();
		var totalSlices = pizza * slices;
		console.log('total: ' + totalSlices);

		var numberOfSlicesPerPpl = Math.floor(totalSlices / ppl);

		console.log('slices per ppl: ' + numberOfSlicesPerPpl); 

		var numberOfSlicesUsed = numberOfSlicesPerPpl * ppl;

		var numberOfSlicesRemaining = totalSlices - numberOfSlicesUsed;

		console.log('slices remaining: ' + numberOfSlicesRemaining);


		$('#pplNumber').html(ppl);
		$('#pplNumber2') .html(ppl);
		$('#pizzaNumber').html(pizza);
		$('#pizzaNumber2').html(pizza);
		$('#slicesNumber').html(numberOfSlicesPerPpl);
		$('#slicesRemaining').html(numberOfSlicesRemaining);


	});





	// document.getElementByClassName('btn-primary')[0].addEventListener('click',function() {
		// console.log(document.getElementById('pplNo').value);
		// console.log(document.getElementById('pizzaNo').value);
		// console.log(document.getElementById('slicesNo').value);

	// });




	})();
