(function() {	

	var z = 'Ana';
	console.log(z);
	z = z + ' are';
	console.log(z);
	z = z + ' mere';
	console.log(z);


	var w = '10'/2;
	console.log(w);

	var array = ['one', 'two', 'three', 'seven'];

	console.log(array);
	console.log(array[0]);



	for (var i = 0 ; i < array.length; i++) {
		console.log(array[i]);
	}

	var object = {
		'object1': 123123123,
		'object2': 'something',
		'object3': 'Ana are mere',
	}
	console.log(object);
	console.log(object.object3);

	var boolean1 = true;
	var boolean2 = false;
	var mosica = 'true';

	console.log(boolean1);
	console.log(boolean2);
	console.log(mosica);

	// alert('something');
	// prompt('What is your name?');
	

	if(1 == 1) {
		console.log('Eva are mere');
	} else {
		console.log('Ana are mere');
	}
	var z = 2;
	while(z <= 10) {	
		console.log(z);	
		z = z + 2;
		console.log(z);			
	}

	for (var i = 0; i < 6 ; i++) {		

	}
	console.log(i);

	var condition = 'Dimitri';
	switch(condition) {
		case 'Eva':
			console.log('Eva');
			break;
		case 'Andreea':
			console.log('Andreea');
			break;
		case 'Marian':
			console.log('Marian');
		default:
			console.log('Default');
			break;
	}

	var input = document.getElementById('username');
	console.log(input);
	var input2 = document.getElementsByClassName('usernameClass');
	console.log(input2);

	document.getElementById('btn-submit').addEventListener('click', function() {
		// alert('Parola gresita');
		var input = document.getElementById('username');
		console.log(input.value);
		var input2 = document.getElementById('username2');
		console.log(input2.value);
		if(input2.value.length < 8) {
			alert('Password is to short');
		} else {
			alert('Parola corecta');
		}
	});
})();