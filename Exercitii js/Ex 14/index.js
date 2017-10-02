(function() {
	$('#resolve').on('click', function(){
		var amount = $('#amount').val();
		var state = $('#state').val().toLowerCase();
		var price = 1;
		var subtotal = amount * price;
		var tax = subtotal * (5.5 / 100);
		var totalWi = subtotal + tax;
		$('#orderAmount').html('What is the order amount? ' + amount + '<br>');
		$('#stateName').html('What is the state? ' + state + '<br>');
		$('#totalNonWi').html('The total is $' + subtotal + '<br>');


		if ((state == 'wi') || (state == 'winsconsin')) {
			$('#subtotal').html('The subtotal is $' + subtotal + '<br>');
			$('#tax').html('The tax is $' + tax + '<br>');
			$('#totalWi').html('The total is $' + totalWi + '<br>');
			$('#totalNonWi').html('');
		}
	});

})();

