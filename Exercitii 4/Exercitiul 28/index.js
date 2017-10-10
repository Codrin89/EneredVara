(function() {
    
    var result = 0;
    var operator = '+';

    //EGAL
    $('.btn-primary').on('click', function() {
    	calculate();
    	operator = '+';
    	result = 0;
    });
    //EGAL
    $('.btn-success').on('click', function() {
    	calculate();
    	operator= '+';
    });
    $('.btn-warning').on('click', function() {
    	calculate();
    	operator = '-';
    });

    function calculate() {
    	if($('#numbers').val() !='') {
	    	if(operator == '+') {
	    		result += parseInt($('#numbers').val());
	    	}
	    	if(operator == '-') {
	    		result -= parseInt($('#numbers').val());
	    	}
	    	$('#numbers').val('');
	    	$('#result').html(result);
        }
    }

})();