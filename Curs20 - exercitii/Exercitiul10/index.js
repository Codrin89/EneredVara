(function() {
	$('.btn-primary').on('click', function(){

		var priceItemNo1 = $('#priceItemNo1').val();
		var priceItemNo2 = $('#priceItemNo2').val();
		var priceItemNo3 = $('#priceItemNo3').val();
		var qtyItemNo1 = $('#qtyItemNo1').val();
		var qtyItemNo2 = $('#qtyItemNo2').val();
		var qtyItemNo3 = $('#qtyItemNo3').val();
		var tax = 5.5/100;

		

		var subtotal = ( priceItemNo1 * qtyItemNo1 ) + ( priceItemNo2 * qtyItemNo2 ) + ( priceItemNo3 * qtyItemNo3 );
		var valueTax = subtotal * tax ;
		var total = subtotal + valueTax ;

		$('#valPriceItemNo1').html(priceItemNo1);
		$('#valQtyItemNo1').html(qtyItemNo1);
		$('#valPriceItemNo2').html(priceItemNo2);
		$('#valQtyItemNo2').html(qtyItemNo2);
		$('#valPriceItemNo3').html(priceItemNo3);
		$('#valQtyItemNo3').html(qtyItemNo3);
		$('#subtotal').html(subtotal.toFixed(2));
		$('#taxValue').html(valueTax.toFixed(2));
		$('#total').html(total.toFixed(2));

	});

})();