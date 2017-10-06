(function() {


var points = [20, -11, 9, 0, -1, 44, -7];

console.log(points.sort(function(a, b){return a-b}));

document.getElementById("ex1").innerHTML=points;


var array = [1, 2 , 3, 4, 2, 5, 7, 2, 2];
for(var i = 0; i < array.length; i++) {
    if(array[i] === 2) {
       array.splice(i, 1);
       i--;
    }
}

document.getElementById(`ex2`).innerHTML = array;



var array = ["a", "b", "c", "dd", "a"];
for(var i = 0; i < array.length; i++) {
    if(array[i] != 'c' && array[i] != 'b') {
       array.splice(i, 1);
       i--;
   }
}

document.getElementById(`ex3`).innerHTML = array;

var today = new Date();

document.getElementById('ex4').innerHTML= today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear() ;


var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj));

document.getElementById('ex5').innerHTML=Object.values(obj);

document.getElementById(`button`).addEventListener(`click`,function() { 
            var nr1 =document.getElementById(`nr1`).value;
            var nr2 =document.getElementById(`nr2`).value;
            var sum = parseInt(nr1)+parseInt(nr2);

       if (sum > 20 ) {
       	document.getElementById('ex6').innerHTML=`Suma acestor 2 numere este mai mare de 20`;
       
       }

       else {
       	document.getElementById('ex6').innerHTML=`Suma acestor 2 numere este mai mica de 20`;

       }        
});

var array = [1, 2 , 3, 4, 2, 5, 7, 2, 2];
for(var i = 0; i < array.length; i++) {
    if(array[i] === 2) {

    	document.getElementById('ex7').innerHTML +=i;

    }
}

var array = [1, 2 , 3, 4, 2, 5, 7, 2, 2];
for(var i = 0; i < array.length; i++) {
    if(array[i] === 2) {
       array.splice(i, 1);
       i--;
    }
}

document.getElementById(`ex8`).innerHTML = array;



var str = "This is some text";
var res = str.split(" ");
document.getElementById('ex9').innerHTML = res;

})();