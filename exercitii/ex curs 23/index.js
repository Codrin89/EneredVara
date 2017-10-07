function isAnagram() {
	//check is word are anagrams

	var firstWord = document.getElementById('firstWord').value;
	var secondWord = document.getElementById('secondWord').value;
	console.log(firstWord);
	console.log(secondWord);
	firstWord = firstWord.split('');
	secondWord = secondWord.split('');
	console.log(firstWord);
	console.log(secondWord);

	if (firstWord.length != secondWord.length) {
		alert('not an anagram');
		return;
	}
	for (var i = 0; i < firstWord.length; i++) {
		var letterCheckBoolean = false;
		for (var j = 0; j < secondWord.length; j++) {
			if (firstWord[i] == secondWord[j] && letterCheckBoolean != true) {
				//am gasit litera
				var letterCheckBoolean = true;
				secondWord.splice(j, 1);
				j--;
			}
		}
		if (letterCheckBoolean == false) {
			alert('not an anagram');
			return;
		}
	}
	alert('words are anagrams!!!');
}