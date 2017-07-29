(function(){
	//select all hover boxes from page
	var boxesHover = document.getElementsByClassName('hover-image');
	//make a loop to go over every hover box
	for(var i = 0 ; i < boxesHover.length ; i++){
		//console.log(boxesHover[i]);
		boxesHover[i].addEventListener('click' , function() {
			alert('am dat click pe item')
		});

	}

})();

	
