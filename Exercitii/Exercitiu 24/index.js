function isAnagram() {
	
	var firstWord = $('#firstInput').val()
	var secondWord = $('#secondInput').val()	
	console.log(firstWord);
	console.log(secondWord);


	firstWord = firstWord.split('').sort().join('');
	secondWord = secondWord.split('').sort().join('');
	console.log(firstWord);
	console.log(secondWord);

	if (firstWord === secondWord && firstWord.length == secondWord.length) {

		$('#error-label').html( $('#firstInput').val() + " & " + $('#secondInput').val() + " are anagrams!")

	} else {

		$('#error-label').html( firstWord + " & " + secondWord + " are not anagrams!");

	}


	// firstWord = firstWord.split('');
	// secondWord = secondWord.split('');

	// if (firstWord.length == secondWord.length) {

	// 	for (var i = 0; i < firstWord.length; i++) {
	// 	var letterCheckBoolean = false;
	// 	for (var j = 0; j < secondWord.length; j++) {
	// 		if (firstWord[i] == secondWord[j] && letterCheckBoolean == false) {
	// 			var letterCheckBoolean = true;				
	// 			secondWord.splice(j, 1);
	// 			j--;				
	// 		}
	// 	}

	// 	if (!letterCheckBoolean) {
			
	// 		$('#error-label').html( $('#firstInput').val() + " & " + $('#secondInput').val() + " are not anagrams!");
	// 		return;

	// 	}
	// }
	// 	$('#error-label').html( $('#firstInput').val() + " & " + $('#secondInput').val() + " are anagrams!");
	// } else {
	// 	$('#error-label').html( $('#firstInput').val() + " & " + $('#secondInput').val() + " are not anagrams and don't have the same length!");
	// }

	
}

