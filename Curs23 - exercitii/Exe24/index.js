function isAnagram() {
	// body...

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


	for(var i = 0 ; i < firstWord.length ; i++ ){
		var letterCheckBoolen = false;
		for (var j = 0 ; j < secondWord.length; j++) {
			if (firstWord[i] == secondWord[j] && letterCheckBoolen != true) {
				var letterCheckBoolen = true;
				secondWord.splice(j, 1);
				j--;
			}
		}
		if (!letterCheckBoolen == false) {
			alert('not an anagram');
			return;
		}
	}
	alert('words are anagrams!!!');
}


document.getElementByTagName('body').addEventListener('keydown', function(e){
if (e.keyCode == 13) {
	alert('you pressed enter');
}
})