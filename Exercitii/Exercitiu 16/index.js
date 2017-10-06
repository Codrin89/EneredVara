(function() {
	var database = [
		{
			"Age": "18",
			"Country": "Romania"
		},
		{
			"Age": "16",
			"Country": "USA"
		},
		{
			"Age": "21",
			"Country": "Germany"
		},
		{
			"Age": "21",
			"Country": "Japan"
		},
		{
			"Age": "22",
			"Country": "China"
		},
		{
			"Age": "17",
			"Country": "Indonesia"
		},
		{
			"Age": "15",
			"Country": "France"
		},
		{
			"Age": "16",
			"Country": "Mexic"
		}
	]


	$('.btn-primary').on('click', function() {
		var age = $('#age').val()

		for (var i = 0 ; i < database.length ; i++) {
			
			if ( database[i].Age == age) {

				$('#error-label').html('In ' + database[i].Country + " you are allowed to drive at " + database[i].Age);
				return;

			} else {

				$('#error-label').html('No age in database');

			}

			if ( age < 15) {
				$('#error-label').html('Too young to drive');
			}			
		}		

	});

})();

