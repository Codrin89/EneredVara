(function() {

	document.getElementById('verify-button').addEventListener('click',function() {
		
		var age = document.getElementById('age').value;

		if(age < 18) {
			document.getElementById('result-label').innerHTML = 'You are not old enough to drive!';
		} else {
			document.getElementById('result-label').innerHTML = 'You are old enough to drive!';
		}
	});	
})();