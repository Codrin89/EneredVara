(function() {
	
	function resizeCheckBoxes() {
      
       var box = document.getElementsByClassName('box-item')[0];
       box.style.height = box.offsetWidth + 'px';
       var boxes = document.getElementsByClassName('box-item');
       for (var i = 0; i < boxes.length ; i++){
       	boxes[i].style.height = box.offsetWidth + 'px';
       }
        
}

 resizeCheckBoxes();
  var whatIsNext = 'X';
  var winningCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,3], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];
  var boxes = document.getElementsByClassName('box-item');
 
  for(var i= 0  ; i < boxes.length ; i++) {
  	boxes[i].addEventListener('click', function() {
  		if(this.innerHTML == '') {
  		clickScreen(this);

       }
  	});
  }
      function clickScreen(element) {
  		element.innerHTML = whatIsNext;
  		if(whatIsNext == 'X') {
  			whatIsNext = '0';
  		} else {
  			whatIsNext = 'X';
  		}
  		checkWinning();
  }

  function checkWinning() {

  	for (var j = 0; j < winningCombo.length; j++) {
  			if (boxes[winningCombo[j][0]].innerHTML === boxes[winningCombo[j][1]].innerHTML && boxes[winningCombo[j][0]].innerHTML === boxes[winningCombo[j][2]].innerHTML && boxes[winningCombo[j][0]].innerHTML != '') {
  				alert(boxes[winningCombo[j][0]].innerHTML + ' has won !');
              }
       }
	}

})();
