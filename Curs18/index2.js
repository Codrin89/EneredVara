(function() {

	var items = [
		{
			'imgSrc': 'imagine.jpg',
			'title': 'Slide1',
			'timelapse': '5 hours ago',
			'tags': [
				'tag1slide_1','tag2slide_1','tag3slide_1'
			],
			'data_id': '20'
		},
		{
			'imgSrc': 'imagine.jpg',
			'title': 'Slide1',
			'timelapse': '2 mins ago',
			'tags': [
				'tag1slide_2','tag2slide_2','tag3slide_2'
			],
			'data_id': '22'
		},
		{
			'imgSrc': 'imagine.jpg',
			'title': 'Slide1',
			'timelapse': '2 days ago',
			'tags': [
				'tag1slide_3','tag2slide_3','tag3slide_3'
			],
			'data_id': '42'
		},
		{
			'imgSrc': 'imagine.jpg',
			'title': 'Slide1',
			'timelapse': '8 hours ago',
			'tags': [
				'tag1slide_4','tag2slide_4','tag3slide_4'
			],
			'data_id': '74'
		}
	];

      function createBoxes() {
      	for(var i = 0 ; i < items.length ; i++) {
      		var boxDiv = $('<div class="boxItem"><div class="imageBoxItem"><img src="imagine.png"><div class="overlay"></div></div> <div class="detailIsBoxItem"><h4 class="title">Slide title</h4>');
  
            document.getElementsByClassName('box-wrapper')[0].append(boxDiv[0]);
  }
}

    createBoxes();

})();