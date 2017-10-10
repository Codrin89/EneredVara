(function () {
	$('#calculate').on('click', function() {
		calculateMonthsUntilPaidOff();
	})

	function calculateMonthsUntilPaidOff() {
		var balance = $('#balance').val();
		var apr = $('#apr').val();
		var monthly_payment = $('#monthly_payment').val();
		var i_ulAlaMareSiTareFara_deAsemanare_candESingur_inParcare = (apr / 365) / 100;
		console.log(i_ulAlaMareSiTareFara_deAsemanare_candESingur_inParcare);
		var totalMonths = -(1 / 30) * (Math.log(1 + (balance / monthly_payment) * (1 - (Math.pow((1 + i_ulAlaMareSiTareFara_deAsemanare_candESingur_inParcare), 30))))) / (Math.log(1 + i_ulAlaMareSiTareFara_deAsemanare_candESingur_inParcare));
		totalMonths = Math.ceil(totalMonths);
		console.log(totalMonths);
		$('#theAnswer').html('<p>What is your balance? <b>' + balance + '</b></p><br>' + '<p>What is the APR on the card (as a percent)? <b>' + apr + '%</b></p><br>' + '<p>What is the monthly payment you can make? <b>' + monthly_payment + '</b></p><hr>' + '<p style="font-weight: bold; font-size:1.5em; color:red;">It will take you ' + totalMonths + ' months to pay off this card.</p><br>');

	}

})();

