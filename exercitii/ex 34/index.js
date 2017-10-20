(function() {


	document.getElementById('removeEmployee').addEventListener('click', function() {

		var employeeName = document.getElementById('employeeName').value; 
		console.log(employeeName);

		var nameList = document.getElementsByTagName('li');
		var nameFound = false;


		for (var i = 0 ; i < nameList.length ; i++) {
			
			if( employeeName == nameList[i].innerHTML) {
				nameFound = true;
			  nameList[i].parentElement.removeChild(nameList[i]);
			}
			
		} 
		if(!nameFound) {
			alert('Name not found!!!!');
		}
		document.getElementById('employeeName').value = '';

	});
})();