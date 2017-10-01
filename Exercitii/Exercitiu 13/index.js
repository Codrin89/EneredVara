(function() {
	$('.btn-primary').on('click', function(){

		var principalAmmountValue = $('#principalAmmountValue').val();
		var rateOfInterestValue = $('#rateOfInterestValue').val();
		var numberOfYearsValue = $('#numberOfYearsValue').val();
		var compoundYearTimes = $('#compoundYearTimes').val();

		
		var endOfInvestment = (principalAmmountValue * Math.pow(( 1 + (( rateOfInterestValue / 100 ) / compoundYearTimes)),  (compoundYearTimes * numberOfYearsValue))).toFixed(2);
		console.log(rateOfInterestValue);

		$('#principalAmmount').html(principalAmmountValue);
		$('#rateOfInterest').html(rateOfInterestValue);
		$('#numberOfYears').html(numberOfYearsValue);
		$('#principalAmmount2').html(principalAmmountValue);
		$('#compoundTimes').html(compoundYearTimes);
		$('#numberOfYears2').html(numberOfYearsValue);
		$('#rateOfInterest2').html(rateOfInterestValue);

		$('#endOfInvestment').html(endOfInvestment);

	});

})();