$(document).ready(function() {
	$.ajax({
		url: "data.json",
		success: function(result){

			for(i = 0; i < result.products.length; i++) {
				var element = $('<div class="col-md-6 col-md-offset-3 text-center text-primary"><p id="name"><b>Title</b>: ' + result.products[i].name + '</p><p id="price"><b>Price</b>: ' + result.products[i].price + '$</p><p id="quantity"><b>Quantity</b>: ' + result.products[i].quantity + ' pcs</p><hr></div>');

				$('.container-product').append(element);
			}
		}
	});

	$('#buton').on('click', function() {
		var prodName = $('#input').val();
		$('.container-product-search').html('');

		$.ajax({
		url: "data.json",
		success: function(result){
			for(i = 0; i < result.products.length; i++) {
				if(result.products[i].name.toLowerCase().indexOf(prodName.toLowerCase()) > -1 && prodName.length > 2) {
				var element = $('<div class="col-md-6 col-md-offset-3 text-center text-primary"><p id="name"><b>Title</b>: ' + result.products[i].name + '</p><p id="price"><b>Price</b>: ' + result.products[i].price + '$</p><p id="quantity"><b>Quantity</b>: ' + result.products[i].quantity + ' pcs</p><hr></div>');

				$('.container-product-search').append(element);
				}
			}
		}
	});

	})

	

});