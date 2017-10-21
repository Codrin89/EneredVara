$(document).ready(function() {

	$.ajax({
		url: "data.json", 
		success: function(result){
			console.log(result);
		}
	});
});