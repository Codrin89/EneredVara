(function() {

	var items = [
		{
			'imgSrc': 'imagine.png',
			'title': 'Slide1',
			'timelapse': '5 hours ago',
			'tags': [
				'tag1slide_1','tag2slide_1','tag3slide_1'
			],
			'data_id': '20'
		},
		{
			'imgSrc': 'imagine.png',
		    'title': 'Slide2',
			'timelapse': '2 mins ago',
			'tags': [
				'tag1slide_2','tag2slide_2','tag3slide_2'
			],
			'data_id': '22'
		},
		{
			'imgSrc': 'imagine.png',
			'title': 'Slide3',
			'timelapse': '2 days ago',
			'tags': [
				'tag1slide_3','tag2slide_3','tag3slide_3'
			],
			'data_id': '42'
		},
		{
			'imgSrc': 'imagine.png',
			'title': 'Slide4',
			'timelapse': '8 hours ago',
			'tags': [
				'tag1slide_4','tag2slide_4','tag3slide_4'
			],
			'data_id': '74'
		}
	];


	function createBoxes() {
		for(var i = 0 ; i < items.length ; i++) {
			var boxDiv = $('<div class="boxItem"><div class="imageBoxItem"><img src="imagine.png"><div class="overlay"></div></div><div class="detailsBoxItem"><h4 class="title">' + items[i].title + '</h4></div></div>');
			document.getElementsByClassName('box-wrapper')[0].append(boxDiv[0]);
		}		
	}

	// <div class="boxItem">
	// 	<div class="imageBoxItem">
	// 		<img src="'+'+items[i].imgSrc+'+'">
	// 		<div class="overlay"></div>
	// 	</div>
	// 	<div class="detailsBoxItem">
	// 		<h4 class="title">'+items[i].title+'</h4>
	// 		<p class="timelapse">'+items[i].timelapse+'</p>
	// 		<div class="tags">
	// 			<p class="tagsTitle">Tags(25)</p>
	// 			<span>Tag1</span>
	// 			<span>Tag2</span>
	// 			<span>Tag3</span>
	// 			<span>Tag4</span>
	// 		</div>
	// 		<div class="detailsButtons">
	// 			<button id="previewSlide" data-id="'+items[i].data-id+'">Preview slide</button>
	// 			<button id="downloadSlide" data-id="'+items[i].data-id+'">DownloadSlide</button>
	// 		</div>
	// 	</div>
	// </div>
	function createBoxesStepByStep() {
		for(var i = 0 ; i < items.length ; i++) {
			var text = '<div class="boxItem">';
			text += '<div class="imageBoxItem">';
			text += '<img src="'+items[i].imgSrc+'">';
			text += '<div class="overlay"></div>';
			text += '</div>';
			text += '<div class="detailsBoxItem">';
			text += '<h4 class="title">'+items[i].title+'</h4>';
			text += '<p class="timelapse">'+items[i].timelapse+'</p>';
			

			text += '<div class="tags">';
			text += '<p class="tagsTitle">Tags('+items[i].tags.length+')</p>';
			for(var j = 0 ; j < items[i].tags.length ; j++) {
				text += '<span>'+ items[i].tags[j]+'</span>';
			}
			text += '</div>';
			text += '<div class="detailsButtons">';
			text += '<button id="previewSlide" data-id="'+items[i].data_id+'">Preview slide</button>';
			text += '<button id="downloadSlide" data-id="'+items[i].data_id+'">DownloadSlide</button>';
	        text += '</div>';
	        text += '</div>';
	        text += '</div>';
			boxDiv = $(text);
			document.getElementsByClassName('box-wrapper')[0].append(boxDiv[0]);
		}		
	}

	createBoxesStepByStep();

})();