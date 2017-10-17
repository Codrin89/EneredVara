(function() {

	var number = 12;

	function generateMultiTable() {

		var divItem = $('<div></div>');
		divItem.append('<span class="number"> </span>');

		for(var i = 0 ; i <= number ; i++) {

			var numberItem = $('<span class="number">' + i + '</span>');
			divItem.append(numberItem);
		}
		$('.col-md-6').append(divItem);
		for(var i = 0 ; i <= number ; i++) {
			var divItem = $('<div></div>');
			divItem.append($('<span class="number">' + i + '</span>'));
			
			for (var i = 0; i < number; i++) {

				
			}
		}

	}
	generateMultiTable();
})();