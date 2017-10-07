function isAnagram() {
	//check if words are anagrams
	var firtsWord = document.getElementById('firstString').value;
	var secondWord = document.getElementById('secondString').value;
	console.log(firtsWord);
	console.log(secondWord);
	firtsWord = firtsWord.split('');
	secondWord = secondWord.split('');
	console.log(firtsWord);
	console.log(secondWord);

	if (firtsWord.length != secondWord.length) {
		alert("not an anagram");
			return;
	}
	
	for( var i = 0; i < firtsWord.length; i++){
		var letterCheckBoolean = false;
		for(var j = 0; j < secondWord.length; j++) {
			if(firtsWord[i] == secondWord[j] && letterCheckBoolean != true) {
				//intra aici daca am gasit litera
				var letterCheckBoolean = true;
				secondWord.splice(j, 1);
				j--;

			}
		}
		
		if(letterCheckBoolean == false) {
			alert("not an anagram");
			return;
		}
	}
	alert("words are anagrams!!!");
}
