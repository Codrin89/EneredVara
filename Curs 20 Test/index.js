(function() {
	/*ex 1 */
	function sortNumberEx1(a,b) {
    return a - b;
}
var numArray = [20, -11, 9, 0, -1, 34, -7];
numArray.sort(sortNumberEx1);
$('#ex1').html(numArray.join(", "));

/* Ex 2 */

var numArray2 = [1,2,3,4,2,5,7,2,2];
for(i = 0; i < numArray2.length; i++){
	if(numArray2[i] == 2) {
		numArray2.splice(i,1)
		i--;
	}
}
$('#ex2').html(numArray2.join(", "));

/* Ex 3 */

var letters = ["a", "b", "c", "dd", "a"];
for(i = 0; i < letters.length; i++) {
	if(letters[i] != "c" && letters[i] != "b") {
		letters.splice(i, 1);
		i--;
	}
}
$('#ex3').html(letters.join(", "));

/* Ex 4 */

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = dd+'-'+mm+'-'+yyyy;
$('#ex4').html(today);

/* Ex 5 */
var obj = { 0: 'a', 1: 'b', 2: 'c' };
arrayEx5 = (Object.values(obj)); 
$('#ex5').html(arrayEx5.join(", ")); 


/* Ex 6 */
$('#butonEx6').on('click', function() {
	var no1 = parseInt($('#nr1').val());
	var no2 = parseInt($('#nr2').val());
	if (no1 + no2 > 20){ 
		$('#ex6').html(no1 + no2);
	}
});

/* Ex 7 */

var numArray7 = [1,2,3,4,2,5,7,2,2];
for(i = 0; i < numArray7.length; i++){
	if(numArray7[i] == 2) {
		
		$('#ex7').html($('#ex7').html() + i + ', ');
	}
}

/* Ex 8 */

var numArray8 = [1,2,3,4,2,5,7,2,2];
for(i = 0; i < numArray8.length; i++){
	if(numArray8[i] == 2) {
		numArray8.splice(i,1)
		i--;
	}
}
$('#ex8').html(numArray8.join(", "));

/* Ex 9 */
var str = "This is some text";
var res = str.split(" ");
$('#ex9').html(res.join(", "));

/* EX 10 */

var arrayEx10 = [0,"text",9,undefined,"undefined",-5,null,"null"];
arrayEx5 = (Object.values(arrayEx10)); 
for(i = 0; i < arrayEx10.length; i++) {
	$('#ex10').html($('#ex10').html() + arrayEx10[i] + ' is a ' + typeof(arrayEx10[i]) + '<br>');
}












})();