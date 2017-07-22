(function() {
	var  numberArray =[];
	document.getElementById('add').addEventListener('click', function() {
		numberArray.push(parseInt(document.getElementsByClassName('text-operator')[0].value));
		console.log(numberArray);
		document.getElementsByClassName('text-operator')[0].value='';		

	});
document.getElementById('calculateMa').addEventListener('click', function() {
	var ma = 0;
	for(var i = 0; i < numberArray.length; i++) {
		ma += numberArray[i];
	}
	ma = ma/numberArray.length;
	document.getElementById('result') .innerHTML = ma;

		
	
});

})();