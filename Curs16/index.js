(function() {

	//REQUEST TO SERVER

	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://swapi.co/api/people', true);

	xhr.onreadystatechange = function() {//Call a function when the st
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText).results;
			createPersonItem(data);
		}
		
	}
	xhr.send();

	function createPersonItem(value) {
		for(var i = 0; i < value.length; i++) {

			// <div class="personItem text-center">
			var divItem = document.createElement('div');
			divItem.setAttribute('class', 'personItem col-md-3 text-center');

		// <h3 class="Name">Beru Whitesun lars</h3>
			var nameItem = document.createElement('h3');
			nameItem.setAttribute('class', 'Name');
			var nameItemText = document.createTextNode(value[i].name);
			nameItem.append(nameItemText);

		//<h6 class="info">General Info:</h6>
			var infoItem = document.createElement('h6');
			infoItem.setAttribute('class', 'info');
			var infoItemText = document.createTextNode("General Info");
			infoItem.append("General Info");

		//<ul class="">
			var ulItem = document.createElement('ul');
			
			//<li class="height">165</li>
			var heightItem = document.createElement('li');
			heightItem.setAttribute('class', 'height');
			var heightItemText = document.createTextNode(value[i].height);
			heightItem.append(heightItemText);
			//<li class="mass">75</li>
			var massItem = document.createElement('li');
			massItem.setAttribute('class', 'mass');
			var massItemText = document.createTextNode(value[i].mass);
			massItem.append(massItemText);

			//<li class="hair_color">brown</li>
			var hairItem = document.createElement('li');
			hairItem.setAttribute('class', 'hair_color');
			var hairItemText = document.createTextNode(value[i].hair_color);
			hairItem.append(hairItemText);

			//<li class="skin_color">light</li>
			var skinItem = document.createElement('li');
			skinItem.setAttribute('class', 'skin_color');
			var skinItemText = document.createTextNode(value[i].skin_color);
			skinItem.append(skinItemText);

			//<li class="eye_color">blue</li>
			var eyeItem = document.createElement('li');
			eyeItem.setAttribute('class', 'eye_color');
			var eyeItemText = document.createTextNode(value[i].eye_color);
			eyeItem.append(eyeItemText);

			//<li class="birth_year">47BBY</li>
			var birthItem = document.createElement('li');
			birthItem.setAttribute('class', 'birth_year');
			var birthItemText = document.createTextNode(value[i].birth_year);
			birthItem.append(birthItemText);

			//<li class="gender">female</li>
			var genderItem = document.createElement('li');
			genderItem.setAttribute('class', 'gender');
			var genderItemText = document.createTextNode(value[i].gender);
			genderItem.append(genderItemText);

			//<li class="homeworld">https:/swapi.co/api/planets/1/</li>
			var homeworldItem = document.createElement('li');
			homeworldItem.setAttribute('class', 'homeworld');
			var homeworldItemText = document.createTextNode(value[i].homeworld);
			homeworldItem.append(homeworldItemText);

		divItem.append(nameItem);
		divItem.append(infoItem);
		ulItem.append(heightItem);
		ulItem.append(massItem);
		ulItem.append(hairItem);
		ulItem.append(skinItem);
		ulItem.append(eyeItem);
		ulItem.append(birthItem);
		ulItem.append(genderItem);
		ulItem.append(homeworldItem);
		divItem.append(ulItem);
		document.getElementsByClassName('personContainer')[0].append(divItem);
		

			console.log(value[i]);
		}
		

		
	}
})();



