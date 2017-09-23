(function() {

	var items = [
		{
			'imgSrc': 'box1.png',
			'title': 'Slide1',
			'timelapse': '5 hours ago',
			'tags': [
				'tag1slide_1','tag2slide_1','tag3slide_1'
			],
			'data_id': '20'
		},
		{
			'imgSrc': 'box1.png/*/**/*/',
			'title': 'Slide2',
			'timelapse': '2 mins ago',
			'tags': [
				'tag1slide_2','tag2slide_2','tag3slide_2'
			],
			'data_id': '22'
		},
		{
			'imgSrc': 'box1.png',
			'title': 'Slide3',
			'timelapse': '2 days ago',
			'tags': [
				'tag1slide_3','tag2slide_3','tag3slide_3'
			],
			'data_id': '42'
		},
		{
			'imgSrc': 'box1.png',
			'title': 'Slide4',
			'timelapse': '8 hours ago',
			'tags': [
				'tag1slide_4','tag2slide_4','tag3slide_4', 'testjQuery',
			],
			'data_id': '74'
		}
	];

	function createBoxes() {
		for(var i = 0 ; i < items.length ; i++) {
			var boxDiv ='<div class="boxItem"><div class="imageBoxItem"><img src="box1.png"><div class="overlay"></div></div><div class="detailsBoxItem"><h4 class="title">' + items[i].title + '</h4><p class="timelapse">' + items[i].timelapse + '</p><div class="tags"><p class="tagsTitle">' + items[i].tags.length + '</p>';
			for(var j = 0 ; j < items[i].tags.length ; j++) {
				boxDiv += '<span>'+items[i].tags[j]+'</span>';
			}
			boxDiv += '</div><div class="detailsButtons"><button id="previewSlide" data_id="' + items[i].data_id + '">Preview slide</button><button id="downloadSlide" data_id="' + items[i].data_id + '">Download slide</button></div></div></div>';
			boxDiv = $(boxDiv);
		document.getElementsByClassName('box-wrapper')[0].append(boxDiv[0]);
		}
		
	}

	createBoxes();

})();