(function(){

	document.getElementById('removeEmployee').addEventListener('click', function() {

		var employeeName = document.getElementById('employeeName').value;
		var nameList = document.getElementsByTagName('li');
		var nameFound = false;

		for(var i = 0 ; i < nameList.length ; i++) {
			
			if(employeeName == nameList[i].innerHTML) {
				nameFound = true;
				nameList[i].parentElement.removeChild(nameList[i]);
			
			}
		}
		if(!nameFound) {
			alert('Name Not Found!!!');
		}
		document.getElementById('employeeName').value = '';

	});

})();