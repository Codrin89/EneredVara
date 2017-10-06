(function() {
	$('.btn-primary').on('click', function(){

		var amountFrom = $('#euroNumbers').val();
		var rateFrom = 137.51;
		var rateTo = 100;
		console.log(rateTo);
		var amountTo = (( amountFrom * rateFrom ) / rateTo).toFixed(2);

		$('#numberEuros').html(amountFrom);
		$('#exchangeRate').html(rateFrom);
		$('#numberEuros2').html(amountFrom);
		$('#exchangeRate2').html(rateFrom);
		$('#numberDollars').html(amountTo);

	});

})();