(function() {

	function resizeCheckBoxes() {

	var boxItem = $('.box-item')[0];
	var widthValue = boxItem.offsetWidth;
	console.log(widthValue);
	$('.box-item').css('height', widthValue);
	
	}

	resizeCheckBoxes();

	function lineHeight() {

	var boxItem = $('.box-item')[0];
	var widthValue = boxItem.offsetWidth;
	console.log(lineHeight);
	$('.box-item').css('line-height', widthValue - 220 );
	
	}

	lineHeight();

	var whatIsNext = 'X';

	var winningCombo = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8] ]

	$('.box-item').on('click', function() {
		
		

		if (this.innerHTML == '') {			

			this.innerHTML = whatIsNext;

			if (whatIsNext == 'X') {

				whatIsNext = '0';

			} else {

				whatIsNext = 'X';

			}
			
			checkWinning();
		}

		function checkWinning() {
			for (var i = 0 ; i < winningCombo.length ; i++) {
				if($('.box-item')[winningCombo[i][0]].innerHTML == $('.box-item')[winningCombo[i][1]].innerHTML && $('.box-item')[winningCombo[i][0]].innerHTML == $('.box-item')[winningCombo[i][2]].innerHTML && $('.box-item')[winningCombo[i][0]].innerHTML != '' ) {
					alert($('.box-item')[winningCombo[i][0]].innerHTML + ' has won!')
				}
			}
		}
	});

	

	

})();
