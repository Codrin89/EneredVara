(function() {
	//DEBUG
	var z = 10;
	console.log(z);
	z = z + 5;
	console.log(z);
	z = z + ' mere! ';
	console.log(z);

	var w = '10' / 2;
	console.log(w);
	var array = ['one', 'two', 'three', 'seven'];
	console.log(array);
	console.log(array[0]);

	var object = {
		'object1': 12321312,
		'object1': 'something',
		'object1': 'Ana are mnere'
	}
	console.log(object);
	console.log(object.object1);

	var boolean1 = true;
	var boolean2 = false;
	console.log(boolean1);
	console.log(boolean2);

	alert('something');
	prompt('What is your name?');


	if( 1 == 1 ) {
		console.log('Adevarat');
	} else {
		console.log('False');
	}
	var z = 2;
	while( z < 10 ) {
		console.log(z);
		z = z + 2;
		console.log(z);
	}
	for(var i = 0 ; i < 5 ; i++) {
		console.log(i);
	} 
	var condition = 'Ana';
	switch(condition) {
		case 'Ana':
			console.log('Ana');
			break;
		case 'Iona':
			console.log('Ioana');
			break;
		case 'Maria':
			console.log('Maria');
			break;
		default:
			console.log('default');
			break;

	}
	var input = document.getElementById('username');
	console.log(input);
	var input2 = document.getElementsByClassName('usernameClass');
	console.log(input2);

	document.getElementById('btn-submit').addEventListener('click', function() {
		alert('I have clicked the button');
		var input = document.getElementById('username');
		console.log(input.value);
		var input2 = document.getElementById('username2');
		console.log(input2.value);
		if(input2.value.length < 8){
			alert('password is too short');
		} else {
			alert('password is long enough');
		
		}
	});
})();