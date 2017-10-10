(function() {
     
     var number = 12;
     //<div>
         // <span class="number"></span>
     // </div>    
     function geberateMultiTable () {
     	var divItem = $('<div></div>');
     	divItem.append($('<span class="number"> </span>'));
     	for(var i = 0 ; i < number; i++) {
     		var numberItem = $('<span class="number">' + i + '</span>');
     		divItem.append(numberItem);
     	}
     	$('.col-md-12').append(divItem);
     }
     $('.col-md-12').append(divItem);

     


     




    generateMultiTable;  
})();