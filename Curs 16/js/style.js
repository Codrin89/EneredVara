(function() {

// ----------------------------------
// 			  PEOPLE
// ----------------------------------

	// request to server	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://swapi.co/api/people/", true);

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText).results;
			createPersonsItem(data);
		}
	}
	xhr.send();


	function createPersonsItem(value) {
		for(var i = 0 ; i < value.length ; i++) {

			var divPersonItem = document.createElement('div');
			divPersonItem.setAttribute('class', 'personItem col-lg-4 textcenter');

			var nameItem = document.createElement('h3');
			nameItem.setAttribute('class', 'name');
			var nameItemText = document.createTextNode('Name: ' + value[i].name);
			nameItem.append(nameItemText);

			var infoItem = document.createElement('h5');
			infoItem.setAttribute('class', 'info');
			var infoItemText = document.createTextNode('General info:');
			infoItem.append(infoItemText);

			var ulItem = document.createElement('ul');
			ulItem.setAttribute('class', 'text-left');

			var heightItem = document.createElement('li');
			heightItem.setAttribute('class', 'height');
			var heightItemText = document.createTextNode('Height: ' + value[i].height);
			heightItem.append(heightItemText);

			var massItem = document.createElement('li');
			massItem.setAttribute('class', 'mass');
			var massItemText = document.createTextNode('Mass: ' + value[i].mass);
			massItem.append(massItemText);

			var hair_colorItem = document.createElement('li');
			hair_colorItem.setAttribute('class', 'hair_color');
			var hair_colorItemText = document.createTextNode('Hair Color: ' + value[i].hair_color);
			hair_colorItem.append(hair_colorItemText);

			var skin_colorItem = document.createElement('li');
			skin_colorItem.setAttribute('class', 'skin_color');
			var skin_colorItemText = document.createTextNode('Skin Color: ' + value[i].skin_color);
			skin_colorItem.append(skin_colorItemText);

			var eye_colorItem = document.createElement('li');
			eye_colorItem.setAttribute('class', 'eye_color');
			var eye_colorItemText = document.createTextNode('Eye Color: ' + value[i].eye_color);
			eye_colorItem.append(eye_colorItemText);

			var birth_yearItem = document.createElement('li');
			birth_yearItem.setAttribute('class', 'birth_year');
			var birth_yearItemText = document.createTextNode('Birth Year: ' + value[i].birth_year);
			birth_yearItem.append(birth_yearItemText);

			var genderItem = document.createElement('li');
			genderItem.setAttribute('class', 'gender');
			var genderItemText = document.createTextNode('Gender: ' + value[i].gender);
			genderItem.append(genderItemText);

			var homeworldItem = document.createElement('li');
			homeworldItem.setAttribute('class', 'homeworld');
			var homeworldItemText = document.createTextNode('Homeworld: ' + value[i].homeworld);
			homeworldItem.append(homeworldItemText);

			divPersonItem.append(nameItem);
			divPersonItem.append(infoItem);
			divPersonItem.append(ulItem);
			ulItem.append(heightItem);
			ulItem.append(massItem);
			ulItem.append(hair_colorItem);
			ulItem.append(skin_colorItem);
			ulItem.append(eye_colorItem);
			ulItem.append(birth_yearItem);
			ulItem.append(genderItem);
			ulItem.append(homeworldItem);
			document.getElementsByClassName('personsContainer')[0].append(divPersonItem);
		}
	}


// ----------------------------------
// 			  PLANETS
// ----------------------------------


	var xhrPlanets = new XMLHttpRequest();
	xhrPlanets.open("GET", "http://swapi.co/api/planets/", true);

	xhrPlanets.onreadystatechange = function() {
		if(xhrPlanets.readyState == 4 && xhrPlanets.status == 200) {
			var data = JSON.parse(xhrPlanets.responseText).results;
			createPlanetsItem(data);
		}
	}
	xhrPlanets.send();

	function createPlanetsItem(value) {
		for(var i = 0 ; i < value.length ; i++) {

			var divPlanetsItem = document.createElement('div');
			divPlanetsItem.setAttribute('class', 'planetItem col-lg-4 text-center');

			var nameItem = document.createElement('h3');
			nameItem.setAttribute('class', 'name');
			var nameItemText = document.createTextNode('Name: ' + value[i].name);
			nameItem.append(nameItemText);

			var infoItem = document.createElement('h5');
			infoItem.setAttribute('class', 'info');
			var infoItemText = document.createTextNode('General info:');
			infoItem.append(infoItemText);

			var ulItem = document.createElement('ul');
			ulItem.setAttribute('class', 'text-left');

			var rotation_periodItem = document.createElement('li');
			rotation_periodItem.setAttribute('class', 'rotation_period');
			var rotation_periodItemText = document.createTextNode('Rotation period: ' + value[i].rotation_period);
			rotation_periodItem.append(rotation_periodItemText);

			var orbital_periodItem = document.createElement('li');
			orbital_periodItem.setAttribute('class', 'orbital_period');
			var orbital_periodItemText = document.createTextNode('Orbital period: ' + value[i].orbital_period);
			orbital_periodItem.append(orbital_periodItemText);

			var diameterItem = document.createElement('li');
			diameterItem.setAttribute('class', 'diameter');
			var diameterItemText = document.createTextNode('Diameter: ' + value[i].diameter);
			diameterItem.append(diameterItemText);

			var climateItem = document.createElement('li');
			climateItem.setAttribute('class', 'climate');
			var climateItemText = document.createTextNode('Skin Color: ' + value[i].climate);
			climateItem.append(climateItemText);

			var gravityItem = document.createElement('li');
			gravityItem.setAttribute('class', 'gravity');
			var gravityItemText = document.createTextNode('Gravity: ' + value[i].gravity);
			gravityItem.append(gravityItemText);

			var terrainItem = document.createElement('li');
			terrainItem.setAttribute('class', 'terrain');
			var terrainItemText = document.createTextNode('Terrain: ' + value[i].terrain);
			terrainItem.append(terrainItemText);

			var surface_waterItem = document.createElement('li');
			surface_waterItem.setAttribute('class', 'surface_water');
			var surface_waterItemText = document.createTextNode('Surface Water: ' + value[i].surface_water);
			surface_waterItem.append(surface_waterItemText);

			var populationItem = document.createElement('li');
			populationItem.setAttribute('class', 'population');
			var populationItemText = document.createTextNode('Population: ' + value[i].population);
			populationItem.append(populationItemText);

			divPlanetsItem.append(nameItem);
			divPlanetsItem.append(infoItem);
			divPlanetsItem.append(ulItem);
			ulItem.append(rotation_periodItem);
			ulItem.append(orbital_periodItem);
			ulItem.append(diameterItem);
			ulItem.append(climateItem);
			ulItem.append(gravityItem);
			ulItem.append(terrainItem);
			ulItem.append(surface_waterItem);
			ulItem.append(populationItem);
			document.getElementsByClassName('planetsContainer')[0].append(divPlanetsItem);
		}
	}

})();
	



