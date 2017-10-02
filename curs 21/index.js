(function () {

	var points = [20, -11, 9, 0, -1, 34, -7];
	points.sort(function(a, b){return a-b});
	console.log(points);

	var numbers = [1, 2, 3, 4, 2, 5, 7, 2, 2];
	for (var i = 0; i < numbers.length; i++) {
	
		if (numbers[i] == 2) {
			numbers.splice (i , 1);
			i--;
		}
	}
	console.log(numbers);

	var array = ['a', 'b', 'c', 'dd', 'a'];
	for (var i = 0; i < array.length; i++) {
	
		if (array[i] != 'b' && array[i] != 'c') {
			array.splice (i , 1);
			i--;
		}
	}
	console.log(array);

	var d = new Date();
	var n = d.getFullYear();
	var x = d.getMonth() + 1;
	var z = d.getDate();

	console.log(z + '-' + x + '-' + n);


	var object = {0: 'a', 1: 'b', 2: 'c'};
	console.log(Object.values(object));

	document.getElementById('button').addEventListener('click',function() {
		var nr1=document.getElementById("nr1").value;
		var nr2=document.getElementById("nr2").value;
		var sum = parseInt(nr1)+parseInt(nr2);
		if(sum > 20){
			document.getElementById("button").innerHTML="Suma acestor 2 numere este:"+sum;
		}
		else {
			document.getElementById("button").innerHTML="Suma este mai mica de 20"
		}

	});
	console.log();

	var data = [1, 2, 3, 4, 2, 5, 7, 2, 2];
	for (var i = 0; i < data.length; i++) {
	
		if (data[i] == 2) {
			document.getElementById('ex7').innerHTML += i;
		}
	}
	console.log(numbers);

	var number1 = [1, 2, 3, 4, 2, 5, 7, 2, 2];
	for (var i = 0; i < number1.length; i++) {
	
		if (number1[i] == 2) {
			number1.splice (i , 1);
			i--;
		}
	}
	document.getElementById('ex8').innerHTML += number1;


})();