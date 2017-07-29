(function () {
 //select all hover boxes from page
 var boxesHover = document.getElementsByClassName('hover-image');

 //select a loop to go over every hover box
 for (var i = 0; i < boxesHover.length ; i++) {
 	boxesHover[i].addEventListener('click' , function() {
        alert('am dat click pe item');
 	});
 }

})();