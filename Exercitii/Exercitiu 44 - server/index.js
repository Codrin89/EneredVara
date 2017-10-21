$(document).ready(function() {

	$.ajax({

		url: "data.json",
		success: function(inventory){
			console.log(inventory);

			for (var i = 0; i < inventory.products.length; i++) {
				var element = $('<div class="margin_top col-md-4"><input id="text" class="form-control" type="text" placeholder="Write product here"><h1 id="title" class="text-primary">' + inventory.products[i].name + '</h1><p id="price" class="text-danger">' + inventory.products[i].price + '</p><p id="quantity" class="text-warning">' + inventory.products[i].quantity + '</p><p id="error-label">Total: ' + ( inventory.products[i].price * inventory.products[i].quantity ) + '</p></div>');

				$('.container').append(element);

			}

		}


	});

	$('#search').on('click', function() {

		var prodName = $('#productName').val().toLowerCase();


		$('.container-product-search').html('');
		$.ajax({

			url: "data.json",
			success: function(inventory){
				console.log(inventory);

				for (var i = 0; i < inventory.products.length; i++) {
					var inventoryProductName = inventory.products[i].name.toLowerCase();
					if ( inventoryProductName.indexOf(prodName) >= 0 && prodName.length > 2 ) {

						var element = $('<div id="searchResult" class="text-center margin_top col-md-12"><h1 id="title" class="text-primary">' + inventory.products[i].name + '</h1><p id="price" class="text-danger">' + inventory.products[i].price + '</p><p id="quantity" class="text-warning">' + inventory.products[i].quantity + '</p><p id="error-label">Total: ' + ( inventory.products[i].price * inventory.products[i].quantity ) + '</p></div>');

						$('.container-product-search').append(element);

					} else {

						$('.container-product-search').append('<p id="error-label">No results found</p>')
						
					}

				}

				

			}


		});


	});



});
