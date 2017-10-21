$(document).ready(function(){

	$.ajax({
		url: "data.json",
		success: function(result){
			console.log(result);
			for(var i = 0 ; i < result.products.length ; i++){
				var element = $('<div class="col-md-4"><h1 class="title text-primary">' + result.products[i].name + '</h1><p class="price text-danger">' + result.products[i].price + '</p><p class="stock text-warning">' + result.products[i] .quantity+ '</p></div>');
			
				$('.container-product').append(element);
			}

		}

	});

	$('#search').on('click' , function() {

		var prodName = $('#productName').val();
		$('.container-product-search').html('');
		$.ajax({
			url: "data.json",
			success: function(result){
				
				for(var i = 0 ; i < result.products.length ; i++) {
					if(result.products[i].name.toLowerCase().indexOf(prodName.toLowerCase()) != -1) {
					var element = $('<div class="col-md-4"><h1 class="title text-primary">' + result.products[i].name + '</h1><p class="price text-danger">' + result.products[i].price + '</p><p class="stock text-warning">' + result.products[i] .quantity+ '</p></div>');
				
						$('.container-product-search').append(element);
					}
				
				}


			}
		
		});
	});
	
});