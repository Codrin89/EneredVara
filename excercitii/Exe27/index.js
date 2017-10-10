(function(){

	$(document).ready(function(){

		$('#submit').on('click', function() {
			var FirstName = $('#FirstName').val();
			var LastName = $('#LastName').val();
			var ZIPcode = $('#ZIPcode').val();
			var ID = $('#employeeID').val();

			var verifyN = verifyName(FirstName, LastName);
			var verifyID = verifyemployeeID(ID);
			var verifyZIP = verifyZIPcode(ZIPcode); 
			
			if(verifyN == true) {
				$('.col-md-4').append('<p>Name and Last name ok!</p>')
			} else {
				$('.col-md-4').append('<p>Name and Last name are not ok!</p>')
			}
			if(verifyID != 'ID is OK!') {
				$('.col-md-4').append('<p>' + verifyID + '</p>')
			} else {
				$('.col-md-4').append('<p>' + verifyID + '</p>')
			}
			if(verifyZIP != 'ZIPcode is ok!') {
				$('.col-md-4').append('<p>' + verifyZIP + '</p>')
			} else {
				$('.col-md-4').append('<p>' + verifyZIP + '</p>')
			}
		});

		function verifyName(First, Last) {
			if(First == '' || Last == '') {
				return false;
			}
			if(First.length < 3 || Last.length <3) {
				return false;
			}
			return true;
		}
		function verifyemployeeID(employee) {
			var z = employee.split('-');
			if(z.length != 2) {
				return "Doesn't have a hyphen!"
			}
			if(z[0].length != 2) {
				return "ID is not valid, should contain 2 letters in front of hyphen!"
			}
			var rightOperator = z[1];
			var leftOperator = z[0];
			if(parseInt(z[0].split('')) || parseInt(z[0].split(''))[1]) {
				return "One of the left values is a number and not a letter";
			}
			if(rightOperator.length !=4) {
				return "ID is not valid, should contain 4 characters in front of hyphen"
			}
			if(!parseInt(rightOperator)) {
				return "ID is not valid, should contain just numbers after hyphen"
			}
			return 'ID is OK!'
		}
		function verifyZIPcode(ZIP) {
			if(!Number(ZIP)) {
				return 'ZIPcode should pe a number!';
			}
			return 'ZIPcode is ok!';

		}

	});

})();