(function() {
	$('.btn-primary').on('click', function(){

		var principalAmmountValue = $('#principalAmmountValue').val();
		var rateOfInterestValue = $('#rateOfInterestValue').val();
		var numberOfYearsValue = $('#numberOfYearsValue').val();

		
		var totalAmmount = principalAmmountValue * ( 1 + ( rateOfInterestValue / 100 ) * numberOfYearsValue);


		$('#principalAmmount').html(principalAmmountValue);
		$('#rateOfInterest').html(rateOfInterestValue);
		$('#numberOfYears').html(numberOfYearsValue);
		$('#principalAmmount2').html(numberOfYearsValue);
		$('#rateOfInterest2').html(rateOfInterestValue);
		$('#totalAmmount').html(totalAmmount);

	});

})();