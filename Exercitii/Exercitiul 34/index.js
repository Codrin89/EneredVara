(function() {

	document.getElementById('removeEmployee').addEventListener('click',function(){

		var employeeName = document.getElementById('employeeName').value;
		console.log(employeeName);

		var nameList = document.getElementsByTagName('li');
		var nameFound = false;
		//console.log(nameList);

		
		for (var i = 0; i < nameList.length ; i++) {
			nameList[i].innerHTML;
			console.log(nameList[i].innerHTML);
			if(employeeName == nameList[i].innerHTML) {
				nameFound = true;
				nameList[i].parentElement.removeChild(nameList[i]);
				alert('Name Found !!!!');

			}

		}
		if(!nameFound) {
			alert('Name not Found !!!!')
		}
		document.getElementById('employeeName').value = '';
	});

})();