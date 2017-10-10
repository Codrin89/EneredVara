(function() {

	var result = 0;
	var operator = '+';

	// EGAL
	$('.btn-primary').on('click', function() {
		calculate();
		operator = '+';
		result = 0;

	})

	// PLUS
	$('.btn-success').on('click', function() {
		calculate();
		operator = '+';
	})

	// PLUS
	$('.btn-warning').on('click', function() {
		calculate();
		operator = '-';
	})

	function calculate() {
		if ($('#number').val() != '') {

			if(operator == '+') {
				result += parseInt($('#number').val());
			}
			if(operator == '-') {
				result -= parseInt($('#number').val());
			}

		}
		$('#number').val('');
		$('#result').html(result);
	}

})();