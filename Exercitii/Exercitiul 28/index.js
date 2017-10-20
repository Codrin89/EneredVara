(function(){
	var result = 0;
	var operator = '+';

	//Egal
	$('.btn-primary').on('click',function() {
		calculate();
		operator = '+';
		result = 0;
	});
	//Egal
	$('.btn-success').on('click',function() {
		calculate();
		operator = '+'
	});
	$('.btn-warning').on('click',function() {
		calculate();
		operator = '-'
	});


	function calculate() {
		if(operator == '+') {
			result += parseInt($('#numbers').val());
		}
		if(operator == '-') {
			result -= parseInt($('#numbers').val());
		}
		$('#numbers').val('');
		$('#result').html(result);
	}

})();