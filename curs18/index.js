(function() {

	var items = [
		{
			'imgSrc': 'slide7.jpg',
			'title': 'Slide1',
			'timelapse': '5 hours ago',
			'tags': [
				'tag1slide_1','tag2slide_1','tag3slide_1'
			],
			'data_id': '20'
		},
		{
			'imgSrc': 'slide7.jpg',
			'title': 'Slide1',
			'timelapse': '2 mins ago',
			'tags': [
				'tag1slide_2','tag2slide_2','tag3slide_2'
			],
			'data_id': '22'
		},
		{
			'imgSrc': 'slide7.jpg',
			'title': 'Slide1',
			'timelapse': '2 days ago',
			'tags': [
				'tag1slide_3','tag2slide_3','tag3slide_3'
			],
			'data_id': '42'
		},
		{
			'imgSrc': 'slide7.jpg',
			'title': 'Slide1',
			'timelapse': '8 hours ago',
			'tags': [
				'tag1slide_4','tag2slide_4','tag3slide_4'
			],
			'data_id': '74'
		}
	];




	function createBox () {
		for (var i = 0 ; i < items.length ; i++) {
			var boxDiv = $('<div class="boxItem"><div class="imageBoxItem"><img src="img/Untitled-1.jpg"><div class="overlay"></div></div><div class="detailsBoxItem"><h4 class="title">' + items[i].title + '</h4><p class="timelapse">' + items[i].timelapse + '</p><div class="tags"><p class="tagsTitle">Tags(25)</p><span>Tag1</span><span>Tag2</span>span>Tag3</span><span>Tag4</span></div><div class="detailsButtons"><button id="previewSlide" data-id="20">Preview slide</button><button id="downloadSilde" data-id="20">DownloadSide</button></div></div></div>');
			document.getElementsByClassName('box-wrapper')[0].append(boxDiv[0]);
			}

		}


	createBox();

})();