(function() {
$('#buton').on('click', function() {
	var employeeName = $('#input').val();
	var nameList = $('li');
	for(var i = 0; i < nameList.length; i++) {
		if(employeeName == nameList[i].innerHTML) {
			nameFound = true;
			$(nameList[i]).remove();
		}
	}
	if(!nameFound) {
		alert('Not Gasit');
	}
})
	
})();