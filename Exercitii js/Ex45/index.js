$(document).ready(function() {
	$.ajax({
		url: "data.txt",
		success: function(result){
			console.log(result);
			var nextResult = result.split('utilize').join('use');
			console.log(nextResult);

			var file = new Blob([nextResult], {type: 'txt'});
			console.log(file);
			var a = document.createElement('a');

			a.href = URL.createObjectURL(file);
			a.download = "newFile.txt";
			document.body.appendChild(a);
			a.click();
		}
	});
})