(function() {

	$(document).ready(function() {

		$('#execute').on('click', function() {

			var firstName = $('#firstName').val();
			var lastName = $('#lastName').val();
			var employer = $('#employer').val();
			var employeeID = $('#employeeID').val();
			var zipCode = $('#zipCode').val();
			var verifyN = verifyName(firstName, lastName);
			console.log(verifyN);
			var verifyID = verifyEmployeID(employeeID);
			console.log(verifyID);
			var verifyZip = verifyZipCode(zipCode);
			console.log(verifyZip);

			if(verifyN == true) {

				$('.col-md-4').append('<p>name and last ok!</p>');

			} else {

				$('.col-md-4').append('<p>name and last are not ok!</p>');

			}

			if(verifyID != 'ID is OK') {

				$('.col-md-4').append('<p>' + verifyID + '</p>');

			} else {

				$('.col-md-4').append('<p>' + verifyID + '</p>');

			}

			if(verifyZip != 'Zip Code is OK!') {

				$('.col-md-4').append('<p class="zipcode">' + verifyZip + '</p>');

			} else {

				$('.col-md-4').append('<p class="zipcode">' + verifyZip + '</p>');

			}


		});

		// verify name not empy and longer than 2 chars
		function verifyName(first, last) {

			if(first == '' || last == '') {
				return false
			} 

			if (first.length < 3 || last.length < 3) {
				return false;
			}
			return true;
		}


		// verify employeeID pattern AA-2321
		function verifyEmployeID(employee) {

			var z = employee.split('-');
			if ( z.length != 2) {
				return "Doesen't have a hyphen!";
			}
			
			if ( z[0].length !=2 ) {
				return "ID is not valid, should contain 2 letters in before hyphen!";
			}

			var rightOperator = z[1];
			var leftOperator = z[0].split('');

			if(parseInt(leftOperator[0]) || parseInt(leftOperator[1])) {
				return "One of the left values is a number and not a letter!"
			}

			if (rightOperator.length != 4 ) {

				return "ID is not valid, should contain 4 numbers in after hyphen!";

			}

			if (!parseInt(rightOperator)) {

				return "ID is not valid, should contain just numbers after hyphen!";

			}
			return "ID is OK!"
		}

		// verify zipcode only numbers
		function verifyZipCode(zip) {
			if(!Number(zip)) {
				return "Zip Code is not valid, should contain just numbers!"
			}
			return "Zip Code is OK!"
		}
	});

})();