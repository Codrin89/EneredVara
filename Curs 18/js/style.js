(function (){
	var items = [
		{
			'imgSrc': 'boxpicture.jpg',
			'title': 'Slide 1',
			'timelapse': '2 hours ago',
			'tags': [
				'tag1slide_1', 'tag2slide_1', 'tag3slide_1'
			],
			'data_id': '20'
		},
		{
			'imgSrc': 'boxpicture.jpg',
			'title': 'Slide 2',
			'timelapse': '6 hours ago',
			'tags': [
				'tag1slide_2', 'tag2slide_2', 'tag3slide_2', 'tag4slide_2'
			],
			'data_id': '25'
		},
		{
			'imgSrc': 'boxpicture.jpg',
			'title': 'Slide 3',
			'timelapse': '9 hours ago',
			'tags': [
				'tag1slide_3', 'tag2slide_3'
			],
			'data_id': '30'
		},
		{
			'imgSrc': 'boxpicture.jpg',
			'title': 'Slide 4',
			'timelapse': '24 hours ago',
			'tags': [
				'tag1slide_4', 'tag2slide_4', 'tag3slide_4', 'tag4slide_4'
			],
			'data_id': '45'
		}
	];

	function createBoxes() {
		for (var i = 0; i < items.length; i++) {		
			var boxDiv1 = '<div class="boxItem col-lg-3 col-md-3"><div class="imageBoxItem"><img src="css/' + items[i].imgSrc +'"><div class="hoverImage"><span>Select for download</span></div></div><div class="detailsBoxItem"><h4 class="title">' + items[i].title + '</h4><p class="timelapse">' + items[i].timelapse + '</p><div class="tags"><p class="tagsTitle">Tags(' + items[i].tags.length + ')</p>';

			for (var j = 0; j < items[i].tags.length; j++) {
				boxDiv1 += '<span>' + items[i].tags[j] + '</span>';
			}

			boxDiv1 += '</div><div class="detailsButtons"><button id="previewSlide" data-id=' + items[i].data_id +'>Preview slide</button><button id="downloadSlide" data-id=' + items[i].data_id +'>Download slide</button></div></div></div>';
			
			var boxDiv = $(boxDiv1);
			document.getElementsByClassName('boxesContainer')[0].append(boxDiv[0]);
		}
	}
	createBoxes();


})();