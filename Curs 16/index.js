(function() {

	//REQUEST TO SERVER
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://swapi.co/api/people/',true);

	xhr.onreadystatechange = function() {//Call a function when the state change:
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText).results;
			createPersonItem(data);
		
		} 
		
	}
	xhr.send();

	function createPersonItem(value) {
		for (var i = 0 ; i < value.length ; i++) {
			//<div class="personItem col-md-4 text-center">
			var divItem = document.createElement('div');
			divItem.setAttribute('class','personItem col-md-4 text-center');

			//<h3 class="name">R2-D2</h3>
			var nameItem = document.createElement('h3');
			nameItem.setAttribute('class','name');
			var nameItemText = document.createTextNode(value[i].name);
			nameItem.append(nameItemText);

			// <h6>General info:</h6>
			var InfoElement = document.createElement('h6');

			
			//	<li class="height">176</li>
			var heightItem = document.createElement('li');
			heightItem.setAttribute('class','height');
			var heightItemText = document.createTextNode(value[i].height);
			heightItem.append(heightItemText);
			
			//	<li class="mass">72</li>
			var massItem = document.createElement('li');
			massItem.setAttribute('class','mass');
			var massItemText = document.createTextNode(value[i].mass);
			massItem.append(massItemText);
			
			//	<li class="hair_color">grey</li>
			var hair_colorItem = document.createElement('li');
			hair_colorItem.setAttribute('class','hair_color');
			var hair_colorItemText = document.createTextNode(value[i].hair_color);
			hair_colorItem.append(hair_colorItemText);
		
			// <li class="skin_color">white</li>
			var skin_colorItem = document.createElement('li');
			skin_colorItem.setAttribute('class','skin_color');
			var skin_colorItemText = document.createTextNode(value[i].skin_color);
			skin_colorItem.append(skin_colorItemText);
			
			//	<li class="eye_color">blue</li>
			var eye_colorItem = document.createElement('li');
			eye_colorItem.setAttribute('class','eye_color');
			var eye_colorItemText = document.createTextNode(value[i].eye_color);
			eye_colorItem.append(eye_colorItemText);
			
			//	<li class="birth_year">3242</li>
			var birth_yearItem = document.createElement('li');
			birth_yearItem.setAttribute('class','birth_year');
			var birth_yearItemText = document.createTextNode(value[i].birth_year);
			birth_yearItem.append(birth_yearItemText);
			
			//	<li class="gender">femele</li>
			var genderItem = document.createElement('li');
			genderItem.setAttribute('class','gender');
			var genderItemText = document.createTextNode(value[i].gender);
			genderItem.append(genderItemText);
			
			//	<li class="homeworld">https://swapi.co/api/planets/1/</li>
			var homeworldItem = document.createElement('li');
			homeworldItem.setAttribute('class','homeworld');
			var homeworldItemText = document.createTextNode(value[i].homeworld);
			homeworldItem.append(homeworldItemText);
			
			// <ul class="textleft">
			var ulItem = document.createElement('ul');
			ulItem.setAttribute('class','textleft');

			//	</ul>

			// </div>

			

			divItem.append(nameItem);
			divItem.append(heightItem);
			divItem.append(massItem);
			divItem.append(hair_colorItem);
			divItem.append(skin_colorItem);
			divItem.append(eye_colorItem);
			divItem.append(birth_yearItemText);
			divItem.append(genderItemText);
			divItem.append(homeworldItemText);
			divItem.append(ulItem);
			document.getElementsByClassName('itemContainer')[0].append(divItem);
		}
	}

})();