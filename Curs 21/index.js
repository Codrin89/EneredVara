(function() {
	


	function ex1() {		
		var exe1 = [20, -11, 9, 0, -1, 34, -7];
	    exe1.sort(function(a, b) {

	    	return a-b;
	    });

	    $('#ex1').html(" " + exe1);
	}

	ex1();


	
	function ex2() {
		var exe2 = [1,2,3,4,2,5,7,2,2];

		var remove2 = exe2.join("");

		var res = remove2.replace(/2/g, '');

	    $('#ex2').html(res);
	}

	ex2();

	function ex3() {
		var exe3 = ["a", "b", "c", "dd", "a"];
		
	}

	ex3();


// EXERCITIUL 4

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+ dd
	} 

	if(mm<10) {
	    mm = '0'+ mm
	} 

	today = mm + '/' + dd + '/' + yyyy;
	$('#ex4').html(today);

// EXERCITIU 5

	function ex5() {
		var exe5 = 
		{ 
			0: 'a', 
			1: 'b', 
			2: 'c' 
		};

		$('#ex5').html(Object.values(exe5));
	}

	ex5();

// EXERCITIU 6

	$('#btn-primary6').on('click', function() {
		
		var nr1 = $('#nr1').val();
		var nr2 = $('#nr2').val();

		var total = Number(nr1) + Number(nr2);
		
		if (total > 20) {
			$('#ex6').html(total);
		} else {
			$('#ex6').html('Value to low!!');
		};
	});

// EXERCITIU 7
	
	var array7 = [1,2,3,4,2,5,7,2,2];

	for (i = 0; i < array7.length; i++) {
		
		console.log(array7[i]);

		if (array7[i] == 2) {
			$('#ex7').html( $('#ex7').html() + i);
		}     
	}


// EXERCITIU 9	
	
	var text = 'This is some text';
	var textStringed = text.split(' ');
	$('#ex9').html(textStringed);;

})();
