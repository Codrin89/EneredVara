(function() {

//1
var points = [20, -11, 9, 0, -1, 34, -7];
points.sort(function(a, b){return a - b});
document.getElementById("ex1").innerHTML = points;


//2

var numbers = [1,2,3,4,2,5,7,2,2];

for (var i = 0; i < numbers.length; i++) {
	if(numbers[i]==2){
		numbers.splice(i,1);
			i--;
	}

	}
document.getElementById("ex2").innerHTML = numbers;


//3
var letters = ["a", "b", "c", "dd", "a"];
for (var i = 0; i < letters.length; i++) {
	if(letters[i] !='c' && letters[i] !='b') {
		letters.splice(i,1);
		i--;
	}
}

document.getElementById("ex3").innerHTML = letters;


//4
var d = new Date();
document.getElementById("ex4").innerHTML = d.getDate() + '-' + (d.getMonth() + 1) + '-' +d.getFullYear();

//5
var obj = { 0: 'a', 1: 'b', 2: 'c' };
document.getElementById("ex5").innerHTML = Object.values(obj);

//6


document.getElementById('button').addEventListener('click', function () {
	var nr1=document.getElementById("nr1").value;
	var nr2=document.getElementById("nr2").value;
	var sum = parseInt(nr1)+parseInt(nr2);
	if (sum > 20) {
		document.getElementById("ex6").innerHTML="Suma acestor 2 numere este mai mare de 20"
	}
	else {
		document.getElementById("ex6").innerHTML="Suma este mai mica de 20"
	}

});

//7
var numbers = [1,2,3,4,2,5,7,2,2];

for (var i = 0; i < numbers.length; i++) {
	if(numbers[i]==2){
		document.getElementById("ex7").innerHTML += i;
	}

}

//8

var numbers = [1,2,3,4,2,5,7,2,2];

for (var i = 0; i < numbers.length; i++) {
	if(numbers[i]==2){
		numbers.splice(i,1);
			i--;
	}

	}
document.getElementById("ex8").innerHTML = numbers;






})();