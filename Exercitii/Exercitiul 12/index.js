(function(){
	$('.btn-primary').on('click',function(){
		var principal =$('#principalNo').val();
		var interest =$('#interestNO').val();
		var years =$('#yearsNo').val();

		var total = principal * (1+ years *interest/100);

		$('#principalNo2').html(principal);
		$('#interestNO2').html(interest);
		$('#interestNO3').html(interest);
		$('#yearsNo2').html(years);
		$('#yearsNo3').html(years);
		$('#resultNo').html(total);

	});


})();