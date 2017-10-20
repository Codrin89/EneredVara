(function() {
	function resizeCheckBoxes() {
		var box = $('.box-item')[0];
		console.log(box.offsetWidth);
		$('.box-item').css("height", box.offsetWidth + 'px');
	}
	resizeCheckBoxes();

	var whatsIsNext = 'X';
	var winningCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];

	$('.box-item').on('click', function() {
		
		if(this.innerHTML == ''){
			this.innerHTML = whatsIsNext;
			$('.box-item').css("font-size", '60px');
			$('.box-item').css("text-align", 'center');
			$('.box-item').css("line-height", '90px');
			if(whatsIsNext == 'X') {
				whatsIsNext = '0';
			} else {
				whatsIsNext = 'X';
			}
			checkWinning();
		}
		
		function checkWinning() {
		for(var j =0; j <winningCombo.length; j++) {
			if($('.box-item')[winningCombo[j][0]].innerHTML == $('.box-item')[winningCombo[j][1]].innerHTML && $('.box-item')[winningCombo[j][0]].innerHTML == $('.box-item')[winningCombo[j][2]].innerHTML && $('.box-item')[winningCombo[j][2]].innerHTML != '') {
				alert($('.box-item')[winningCombo[j][0]].innerHTML + ' has won!');
			}
		}
	}

	});

	

	


})();