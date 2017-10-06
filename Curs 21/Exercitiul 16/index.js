(function() {

    document.getElementById('verify-button').addEventListener('click',function() {

    	var age = document.getElementById('age').value;
    	if(age < 18) {
    		document.getElementById('result-label').innerHTML = age + "You are not old enough to legally drive";
    	} else {
    	if(age > 18) {
    		document.getElementById('result-label').innerHTML = age + "You are old enough to legally drive";
    	}	
    	}

    	var age = document.getElementById('age').value;
    	if(age > 80) {
    		document.getElementById('result-label').innerHTML = age + "You are to old to drive";
    	}


    });



})();