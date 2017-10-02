(function() {
	$('.btn-primary').on('click', function(){
    
    var taxValue = 0;
    var total = Number(orderAmount) + taxValue;
    
    
		var orderAmount = $('#orderAmount').val();
		var state = $('option').val();
		
    if( state == "WI") {
      var tax = 5.5;
      var taxValue = orderAmount * tax / 100;
      var total = Number(orderAmount) + taxValue;
      $('#total').html(total);
      $(".output").append("<p>" + "The subtotal is " + "<span>" + "$" + orderAmount +"</span>" + "." + "</p>");
      $(".output").append("<p>" + "The tax is " + "<span>" + "$" + taxValue +"</span>" + "." + "</p>");
      
    }
      $('#total').html(total);
   
    
   
    
	});

})();
