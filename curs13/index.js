(function() {
	//select all hover boxes from page
	//boxesHover is an array
	var boxesHover = document.getElementsByClassName('hover-image');

	//make a loop to go every hover box
	for(var i = 0 ; i < boxesHover.length ; i++) {
		boxesHover[i].addEventListener('click', function() {
			if(this.classList.contains('hover-image-selected')) {
				this.classList.remove('hover-image-selected');

				this.getElementsByTagName('p')[0].innerHTML = 'Select or something!';
			}else {
				this.classList.add('hover-image-selected');
				this.getElementsByTagName('p')[0].innerHTML = 'Item selected!';
			}
			var boxesHoverSelected = document.getElementsByClassName('hover-image-selected');
			if(boxesHoverSelected.length > 0 && document.getElementsByClassName('downloadBox')[0].classList.contains('displayNone')) {
				document.getElementsByClassName('downloadBox')[0].classList.remove('displayNone');

			} if (boxesHoverSelected.length == 0) {
				document.getElementsByClassName('downloadBox')[0].classList.add('displayNone');

			}
			if(boxesHoverSelected.length > 0){
				var totalSize =0;
				for(var i= 0;  i < boxesHoverSelected.length ; i++) {
					totalSize += parseFloat(boxesHoverSelected[i].getAttribute('data-size'));
					console.log(boxesHoverSelected[i].getAttribute('data-size'));
					console.log(totalSize);
				}
					console.log(totalSize.toFixed(1));
				document.getElementsByClassName('info')[0].innerHTML = boxesHoverSelected.length + 'slides ( ' + totalSize.toFixed (1) +' mb) selected for download';
			}
			alert(boxesHoverSelected.length + 'slides size='+totalSize.toFixed(1));
		}); 
	}
})();