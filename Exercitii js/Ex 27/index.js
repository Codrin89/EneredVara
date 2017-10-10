(function() {
	$(document).ready( function (){
	$('#signIn').on('click', function() {
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var employeeId = $('#employeeId').val();
		var zipcode = $('#zipcode').val();
		var verifyN = verifyName(firstName, lastName);
		var verifyID = verifyEmployeeID(employeeId);
		var verifyZip = verifyZipCode(zipcode);
		
		if (verifyN == true) {
			$('#message').append('name and last name ok!<br>')
		} else {
			$('#message').append('name and last name NOT ok!<br>')
		}

		if (verifyID != "id is Ok!!") {
			$('#message').append(verifyID + "<br>");
		} else {
			$('#message').append(verifyID + "<br>");
		}

		if (verifyZip != "ZipCode is OK") {
			$('#message').append(verifyZip + "<br>");
		} else {
			$('#message').append(verifyZip + "<br>");
		}




	});

	//verify name not empty and loger than 2 characters
	function verifyName( first, last) {
		if(first == '' || last == ''){
			return false;
		}
		if( first.length < 3 || last.length < 3) {
			return false;
		}
		return true;
	}

	//verify eployee Id patern AA-2321
	function verifyEmployeeID(employee) {
		var z =  employee.split('-');
		if (z.length != 2) {
			return "Does't have a hyphen!";
		}
		if ( z[0].length != 2) {
			return "ID is not valid, should contain 2 letters in front of hyphen";
		}
		var rightOPerator = z[1];
		var leftOperator = z[0].split('');
		if(parseInt(leftOperator[0]) || parseInt(leftOperator[1])) {
			return "One of the left values is a number and not a letter!";
		}
		if (rightOPerator.length != 4) {
			return " ID is not valid, should containd 4 numbers after hyphen";
		}
		if (!parseInt( rightOPerator)) {
			return "ID is not valid, should contain just numbers afters hyphens";
		}
		return "id is Ok!!";
	}

	function verifyZipCode(zip) {
		if(!Number(zip)) {
			return "Zipcode should be a number!";
		}
		return "ZipCode is OK";
	}

	});

})()