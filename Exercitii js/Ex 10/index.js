(function() {
	$('#resolve').on('click', function() {
		var mar = $('#marItem').val();
		var para = $('#paraItem').val();
		var gutuie = $('#gutuieItem').val();
		var marQuantity = $('#mar').val();
		var paraQuantity = $('#para').val();
		var gutuieQuantity = $('#gutuie').val();
		var subtotal = (mar * marQuantity) + (para * paraQuantity) + (gutuie * gutuieQuantity);
		var tax = subtotal * 5.5 / 100;
		var total = subtotal + tax;
		/* keep it separate?! */
		/*Be sure you explicitly convert input to numerical data
		before doing any calculations.
		Revise the program to ensure that prices and quantities
		are entered as numeric values. Don’t allow the user to
		proceed if the value entered is not numeric.
 		Input is type=number so are only numbers ---- No need */
		$('#marPrice').html(mar);
		$('#marQuantity').html(marQuantity);
		$('#paraPrice').html(para);
		$('#paraQuantity').html(paraQuantity);
		$('#gutuiePrice').html(gutuie);
		$('#gutuieQuantity').html(gutuieQuantity);
		$('#subtotal').html(subtotal);
		$('#tax').html(tax);
		$('#total').html(total);

	})

})();

	// 	<div class="col-md-6 col-md-offset-3 result">
	// 	<p>Enter the price of item mar: <span id="marPrice"></span></p>
	// 	<p>Enter the quantity of item mar: <span id="marQuantity"></span></p>
	// 	<p>Enter the price of item para: <span id="paraPrice"></span></p>
	// 	<p>Enter the quantity of item para: <span id="paraQuantity"></span></p>
	// 	<p>Enter the price of item gutuie: <span id="gutuiePrice"></span></p>
	// 	<p>Enter the quantity of item gutuie: <span id="gutuieQuantity"></span></p>
	// 	<p>Subtotal: <span id="subtotal"></span></p>
	// 	<p>Tax: <span id="tax"></span></p>
	// 	<p>Total: <span id="total"></span></p>
	// </div>