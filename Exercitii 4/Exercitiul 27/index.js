(function() {


    $(document).ready(function(){

    	$('#submit').on('click',  function() {
    		var firstName = $('#firstName').val();
    		var lastName = $('#lastName').val();
    		var ID = $('#employeeID').val();
    		var ZIPCode = $('#ZIPCode').val();

    		var verifyN = verifyName(firstName, lastName);
    		var verifyID = verifyEmployeID(ID);
    		var verifyZIP =  verifyZIPCode(ZIPCode);
    		

    		if(verifyN == true) {
    			$('.col-md-4').append('<p>name and last name ok!</p>');
    		} else {
    			$('.col-md-4').append('<p>name and last name are not ok!</p>');
    		}

            if(verifyID != 'ID is OK!!!') {
            	$('.col-md-4').append('<p>' + verifyID + '</p>');
            } else {
            	$('.col-md-4').append('<p>' + verifyID + '</p>');
            }

            if(verifyZIP != 'ZipCode is ok!') {
            	$('.col-md-4').append('<p class="zipcode"> ' + verifyZIP + '</p>');
            } else {
            	$('.col-md-4').append('<p class="zipcode"> ' + verifyZIP + '</p>');
            }



    	});

    	//verify names not empty and longer than 2 chars
    	function verifyName(first, last) {
    		if(first == '' || last == '') {
    			return false;
    		}
    		if(first.length < 3 || last.length > 3) {
    			return false;
    		}
    		return true;
    	}

    	//verify employeeID pattern AA-2321
    	function verifyEmployeID(employee) {
             var z = employee.split('-');
             if(z.length !=2) {
             	return "Doesn't have a hyphen";
             }
             if(z[0].length !=2) {
             	return "ID is not valid , should contain 2 letters in front of hyphen!";
             }
             var rightOperator = z[1];
             var leftOperator = z[0].split('');
             if(parseInt(z[0].split('')) || parseInt(z[1].split(''))) {
             	return "One of the left values is a number and not a letter!";
             }
             if(rightOperator.length != 4) {
             	return "ID is not valid , should contain 4 characters in front of hyphen!";
             }
             if(parseInt(rightOperator)) {
             	return "ID is not valid , should contain just numbers after hyphen!";
             }
             return 'ID is OK!!!';

    	}

    	function verifyZIPCode(ZIP) {
            if(!Number(ZIP)) {
            	return 'ZipCode should be a number!';
            }
    		return 'ZipCode is ok!';
    	}





    });




})();