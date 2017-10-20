(function() {

	$('#button').on('click', function() {
		
		var employeeName = $('#employeeName').val();

		var nameList = $('li');
		var nameFound = false ;
		
		console.log(nameList);

		for (var i = 0; i < nameList.length ; i++) {
			var nameListValue = nameList[i].innerHTML;
			
			if (employeeName == nameListValue) {
				nameFound = true ;
				alert('Name Found!!!!!');
				nameList[i].parentElement.removeChild(nameList[i]);
			}

			
		}

		if (!nameFound) {
			alert('Name not found!!!!');
		}

		employeeName = '';

	});
})();