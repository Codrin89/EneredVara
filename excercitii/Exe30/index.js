(function(){

	var number = 12;

	function generateMultitable() {
		var divItem = $('<div></div>');
		divItem.append($('<span class="number"> </span>'));
		for(var i = 0 ; i <= number; i++){
			var numberItem = $('<span class="number">' + i + '</span>');
			divItem.append(numberItem);
		}
		$('.col-md-12').append(divItem);

		for(var i = 0 ; i < number; i++) {
			var divItem = $('<div></div>');
			divItem.append($('<span class="number"> </span>'));
			for(var j = 0 ; j <= number; j++){
				var numberItem = $('<span class="number">' *j '</span>');
				divItem.append(numberItem);

			}
			$('.col-md-12').append(divItem);
		}


	}
	generateMultitable();
})();