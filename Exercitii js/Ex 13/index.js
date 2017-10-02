(function() {
	$('#resolve').on('click', function() {
		var principal = $('#principal').val();
		var anualRate = $('#anualRate').val();
		var	anualRatePercent = anualRate / 100;
		console.log(anualRatePercent);
		var yearsNo = $('#yearsNo').val();
		var compoundedNo = $('#compoundedNo').val();
		var total = principal * Math.pow((1 + (anualRatePercent / compoundedNo)), (compoundedNo * yearsNo));
		total = Math.ceil(total * 100) / 100;
		$('.principalSpan').html('$' + principal);
		$('.anualRateSpan').html(anualRate);
		$('.yearsNoSpan').html(yearsNo);
		$('.compoundedNoSpan').html(compoundedNo);
		$('#total').html('$' + total);
		
		
	})

})();
