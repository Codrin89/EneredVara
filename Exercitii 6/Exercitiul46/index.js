$(document).ready(function() {

    $.ajax({
    	url: "data.txt",
    	success: function(result){
            var words = ['badger', 'snake', 'mushroom']
    		console.log(result);
        }    

    });

});