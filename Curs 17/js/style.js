(function() {

	if ($('div').hasClass('personsContainer')) {

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
				divPersonItem.setAttribute('class', 'profileItem');

				var divImageWrapperItem = document.createElement('div');
				divImageWrapperItem.setAttribute('class', 'imageWrapper');

				var imgWrapperItem = document.createElement('img');
				imgWrapperItem.setAttribute('src', 'css/img/captain-planet.jpg');

				var divTextWrapperItem = document.createElement('div');
				divTextWrapperItem.setAttribute('class', 'textWrapper');

				var aLinkName = document.createElement('a');
				aLinkName.setAttribute('class', 'linkName');
				aLinkName.setAttribute('href', 'singlepageresident.html?id='+(i + 1));

				var titleName = document.createElement('h3');
				titleName.setAttribute('class', 'name');
				var titleNameText = document.createTextNode(value[i].name);
				titleName.append(titleNameText);

				var databankParagraph = document.createElement('p');
				var faSpinnerIcon = document.createElement('i');
				faSpinnerIcon.setAttribute('class', 'fa fa-spinner');
				faSpinnerIcon.setAttribute('aria-hidden', 'true');
				var databankParagraphText = document.createTextNode(' Databank');
				databankParagraph.append(faSpinnerIcon);
				databankParagraph.append(databankParagraphText);

				divPersonItem.append(divImageWrapperItem);
				divImageWrapperItem.append(imgWrapperItem);
				divPersonItem.append(divTextWrapperItem);
				divTextWrapperItem.append(aLinkName);
				aLinkName.append(titleName);
				divTextWrapperItem.append(databankParagraph);
				document.getElementsByClassName('personsContainer')[0].append(divPersonItem);


				// var nameItem = document.createElement('h3');
				// nameItem.setAttribute('class', 'name');
				// var nameItemText = document.createTextNode('Name: ' + value[i].name);
				// nameItem.append(nameItemText);

				// var infoItem = document.createElement('h5');
				// infoItem.setAttribute('class', 'info');
				// var infoItemText = document.createTextNode('General info:');
				// infoItem.append(infoItemText);

				// var ulItem = document.createElement('ul');
				// ulItem.setAttribute('class', 'text-left');

				// var heightItem = document.createElement('li');
				// heightItem.setAttribute('class', 'height');
				// var heightItemText = document.createTextNode('Height: ' + value[i].height);
				// heightItem.append(heightItemText);

				// var massItem = document.createElement('li');
				// massItem.setAttribute('class', 'mass');
				// var massItemText = document.createTextNode('Mass: ' + value[i].mass);
				// massItem.append(massItemText);

				// var hair_colorItem = document.createElement('li');
				// hair_colorItem.setAttribute('class', 'hair_color');
				// var hair_colorItemText = document.createTextNode('Hair Color: ' + value[i].hair_color);
				// hair_colorItem.append(hair_colorItemText);

				// var skin_colorItem = document.createElement('li');
				// skin_colorItem.setAttribute('class', 'skin_color');
				// var skin_colorItemText = document.createTextNode('Skin Color: ' + value[i].skin_color);
				// skin_colorItem.append(skin_colorItemText);

				// var eye_colorItem = document.createElement('li');
				// eye_colorItem.setAttribute('class', 'eye_color');
				// var eye_colorItemText = document.createTextNode('Eye Color: ' + value[i].eye_color);
				// eye_colorItem.append(eye_colorItemText);

				// var birth_yearItem = document.createElement('li');
				// birth_yearItem.setAttribute('class', 'birth_year');
				// var birth_yearItemText = document.createTextNode('Birth Year: ' + value[i].birth_year);
				// birth_yearItem.append(birth_yearItemText);

				// var genderItem = document.createElement('li');
				// genderItem.setAttribute('class', 'gender');
				// var genderItemText = document.createTextNode('Gender: ' + value[i].gender);
				// genderItem.append(genderItemText);

				// var homeworldItem = document.createElement('li');
				// homeworldItem.setAttribute('class', 'homeworld');
				// var homeworldItemText = document.createTextNode('Homeworld: ' + value[i].homeworld);
				// homeworldItem.append(homeworldItemText);

				// divPersonItem.append(nameItem);
				// divPersonItem.append(infoItem);
				// divPersonItem.append(ulItem);
				// ulItem.append(heightItem);
				// ulItem.append(massItem);
				// ulItem.append(hair_colorItem);
				// ulItem.append(skin_colorItem);
				// ulItem.append(eye_colorItem);
				// ulItem.append(birth_yearItem);
				// ulItem.append(genderItem);
				// ulItem.append(homeworldItem);
				// document.getElementsByClassName('personsContainer')[0].append(divPersonItem);
			}
		}
	} else if ($('div').hasClass('planetsContainer')) {

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

				var divPlanetItem = document.createElement('div');
				divPlanetItem.setAttribute('class', 'profileItem');

				var divImageWrapperItem = document.createElement('div');
				divImageWrapperItem.setAttribute('class', 'imageWrapper');

				var imgWrapperItem = document.createElement('img');
				imgWrapperItem.setAttribute('src', 'css/img/Info-Star-Wars-Planets.jpg');

				var divTextWrapperItem = document.createElement('div');
				divTextWrapperItem.setAttribute('class', 'textWrapper');

				var aLinkName = document.createElement('a');
				aLinkName.setAttribute('class', 'linkName');
				aLinkName.setAttribute('href', 'singlepageplanet.html?id='+(i + 2));

				var titleName = document.createElement('h3');
				titleName.setAttribute('class', 'name');
				var titleNameText = document.createTextNode(value[i].name);
				titleName.append(titleNameText);

				var databankParagraph = document.createElement('p');
				var faSpinnerIcon = document.createElement('i');
				faSpinnerIcon.setAttribute('class', 'fa fa-spinner');
				faSpinnerIcon.setAttribute('aria-hidden', 'true');
				var databankParagraphText = document.createTextNode(' Databank');
				databankParagraph.append(faSpinnerIcon);
				databankParagraph.append(databankParagraphText);

				divPlanetItem.append(divImageWrapperItem);
				divImageWrapperItem.append(imgWrapperItem);
				divPlanetItem.append(divTextWrapperItem);
				divTextWrapperItem.append(aLinkName);
				aLinkName.append(titleName);
				divTextWrapperItem.append(databankParagraph);
				document.getElementsByClassName('planetsContainer')[0].append(divPlanetItem);

				// var nameItem = document.createElement('h3');
				// nameItem.setAttribute('class', 'name');
				// var nameItemText = document.createTextNode('Name: ' + value[i].name);
				// nameItem.append(nameItemText);

				// var infoItem = document.createElement('h5');
				// infoItem.setAttribute('class', 'info');
				// var infoItemText = document.createTextNode('General info:');
				// infoItem.append(infoItemText);

				// var ulItem = document.createElement('ul');
				// ulItem.setAttribute('class', 'text-left');

				// var rotation_periodItem = document.createElement('li');
				// rotation_periodItem.setAttribute('class', 'rotation_period');
				// var rotation_periodItemText = document.createTextNode('Rotation period: ' + value[i].rotation_period);
				// rotation_periodItem.append(rotation_periodItemText);

				// var orbital_periodItem = document.createElement('li');
				// orbital_periodItem.setAttribute('class', 'orbital_period');
				// var orbital_periodItemText = document.createTextNode('Orbital period: ' + value[i].orbital_period);
				// orbital_periodItem.append(orbital_periodItemText);

				// var diameterItem = document.createElement('li');
				// diameterItem.setAttribute('class', 'diameter');
				// var diameterItemText = document.createTextNode('Diameter: ' + value[i].diameter);
				// diameterItem.append(diameterItemText);

				// var climateItem = document.createElement('li');
				// climateItem.setAttribute('class', 'climate');
				// var climateItemText = document.createTextNode('Skin Color: ' + value[i].climate);
				// climateItem.append(climateItemText);

				// var gravityItem = document.createElement('li');
				// gravityItem.setAttribute('class', 'gravity');
				// var gravityItemText = document.createTextNode('Gravity: ' + value[i].gravity);
				// gravityItem.append(gravityItemText);

				// var terrainItem = document.createElement('li');
				// terrainItem.setAttribute('class', 'terrain');
				// var terrainItemText = document.createTextNode('Terrain: ' + value[i].terrain);
				// terrainItem.append(terrainItemText);

				// var surface_waterItem = document.createElement('li');
				// surface_waterItem.setAttribute('class', 'surface_water');
				// var surface_waterItemText = document.createTextNode('Surface Water: ' + value[i].surface_water);
				// surface_waterItem.append(surface_waterItemText);

				// var populationItem = document.createElement('li');
				// populationItem.setAttribute('class', 'population');
				// var populationItemText = document.createTextNode('Population: ' + value[i].population);
				// populationItem.append(populationItemText);


				// var anchorToSinglePlanetItem = document.createElement('a');
				// anchorToSinglePlanetItem.setAttribute('class', 'planetButton');
				// anchorToSinglePlanetItem.setAttribute('href', 'singlepageplanet.html?id='+(i + 2));
				// anchorToSinglePlanetItem.setAttribute('target', '_blank')
				// var anchorToSinglePlanetItemText = document.createTextNode('Go to planet ' + value[i].name);
				// anchorToSinglePlanetItem.append(anchorToSinglePlanetItemText);


				// divPlanetsItem.append(nameItem);
				// divPlanetsItem.append(infoItem);
				// divPlanetsItem.append(ulItem);
				// ulItem.append(rotation_periodItem);
				// ulItem.append(orbital_periodItem);
				// ulItem.append(diameterItem);
				// ulItem.append(climateItem);
				// ulItem.append(gravityItem);
				// ulItem.append(terrainItem);
				// ulItem.append(surface_waterItem);
				// ulItem.append(populationItem);
				// divPlanetsItem.append(anchorToSinglePlanetItem);
				// document.getElementsByClassName('planetsContainer')[0].append(divPlanetsItem);
			}
		}	
	} else if ($('div').hasClass('filmsContainer')) {

	// ----------------------------------
	// 			  FILMS
	// ----------------------------------


		var xhrFilms = new XMLHttpRequest();
		xhrFilms.open("GET", "http://swapi.co/api/films/", true);

		xhrFilms.onreadystatechange = function() {
			if(xhrFilms.readyState == 4 && xhrFilms.status == 200) {
				var data = JSON.parse(xhrFilms.responseText).results;
				createFilmsItem(data);
			}
		}
		xhrFilms.send();

		function createFilmsItem(value) {
			for(var i = 0 ; i < value.length ; i++) {

				var divProfileItem = document.createElement('div');
				divProfileItem.setAttribute('class', 'profileItem');

				var divImageWrapperItem = document.createElement('div');
				divImageWrapperItem.setAttribute('class', 'imageWrapper');

				var imgWrapperItem = document.createElement('img');
				imgWrapperItem.setAttribute('src', 'css/img/Info-Star-Wars-Planets.jpg');

				var divTextWrapperItem = document.createElement('div');
				divTextWrapperItem.setAttribute('class', 'textWrapper');

				var aLinkName = document.createElement('a');
				aLinkName.setAttribute('class', 'linkName');
				aLinkName.setAttribute('href', 'singlepagefilms.html?id='+(i + 2));

				var titleName = document.createElement('h3');
				titleName.setAttribute('class', 'name');
				var titleNameText = document.createTextNode(value[i].title);
				titleName.append(titleNameText);

				var databankParagraph = document.createElement('p');
				var faSpinnerIcon = document.createElement('i');
				faSpinnerIcon.setAttribute('class', 'fa fa-spinner');
				faSpinnerIcon.setAttribute('aria-hidden', 'true');
				var databankParagraphText = document.createTextNode(' Databank');
				databankParagraph.append(faSpinnerIcon);
				databankParagraph.append(databankParagraphText);

				divProfileItem.append(divImageWrapperItem);
				divImageWrapperItem.append(imgWrapperItem);
				divProfileItem.append(divTextWrapperItem);
				divTextWrapperItem.append(aLinkName);
				aLinkName.append(titleName);
				divTextWrapperItem.append(databankParagraph);
				document.getElementsByClassName('filmsContainer')[0].append(divProfileItem);
			}
		}
	} else if ($('div').hasClass('vehiclesContainer')) {

	// ----------------------------------
	// 			  VEHICLES
	// ----------------------------------


		var xhrVehicles = new XMLHttpRequest();
		xhrVehicles.open("GET", "http://swapi.co/api/vehicles/", true);

		xhrVehicles.onreadystatechange = function() {
			if(xhrVehicles.readyState == 4 && xhrVehicles.status == 200) {
				var data = JSON.parse(xhrVehicles.responseText).results;
				createVehiclesItem(data);
			}
		}
		xhrVehicles.send();

		function createVehiclesItem(value) {
			for(var i = 0 ; i < value.length ; i++) {

				var divProfileItem = document.createElement('div');
				divProfileItem.setAttribute('class', 'profileItem');

				var divImageWrapperItem = document.createElement('div');
				divImageWrapperItem.setAttribute('class', 'imageWrapper');

				var imgWrapperItem = document.createElement('img');
				imgWrapperItem.setAttribute('src', 'css/img/Info-Star-Wars-Planets.jpg');

				var divTextWrapperItem = document.createElement('div');
				divTextWrapperItem.setAttribute('class', 'textWrapper');

				var aLinkName = document.createElement('a');
				aLinkName.setAttribute('class', 'linkName');
				aLinkName.setAttribute('href', 'singlepagevehicles.html?id='+(i + 1));

				var titleName = document.createElement('h3');
				titleName.setAttribute('class', 'name');
				var titleNameText = document.createTextNode(value[i].name);
				titleName.append(titleNameText);

				var databankParagraph = document.createElement('p');
				var faSpinnerIcon = document.createElement('i');
				faSpinnerIcon.setAttribute('class', 'fa fa-spinner');
				faSpinnerIcon.setAttribute('aria-hidden', 'true');
				var databankParagraphText = document.createTextNode(' Databank');
				databankParagraph.append(faSpinnerIcon);
				databankParagraph.append(databankParagraphText);

				divProfileItem.append(divImageWrapperItem);
				divImageWrapperItem.append(imgWrapperItem);
				divProfileItem.append(divTextWrapperItem);
				divTextWrapperItem.append(aLinkName);
				aLinkName.append(titleName);
				divTextWrapperItem.append(databankParagraph);
				document.getElementsByClassName('vehiclesContainer')[0].append(divProfileItem);
			}
		}
	} else if ($('div').hasClass('starshipsContainer')) {

	// ----------------------------------
	// 			  STARSHIPS
	// ----------------------------------


		var xhrStarships = new XMLHttpRequest();
		xhrStarships.open("GET", "http://swapi.co/api/starships/", true);

		xhrStarships.onreadystatechange = function() {
			if(xhrStarships.readyState == 4 && xhrStarships.status == 200) {
				var data = JSON.parse(xhrStarships.responseText).results;
				createStarshipsItem(data);
			}
		}
		xhrStarships.send();

		function createStarshipsItem(value) {
			for(var i = 0 ; i < value.length ; i++) {

				var divProfileItem = document.createElement('div');
				divProfileItem.setAttribute('class', 'profileItem');

				var divImageWrapperItem = document.createElement('div');
				divImageWrapperItem.setAttribute('class', 'imageWrapper');

				var imgWrapperItem = document.createElement('img');
				imgWrapperItem.setAttribute('src', 'css/img/Info-Star-Wars-Planets.jpg');

				var divTextWrapperItem = document.createElement('div');
				divTextWrapperItem.setAttribute('class', 'textWrapper');

				var aLinkName = document.createElement('a');
				aLinkName.setAttribute('class', 'linkName');
				aLinkName.setAttribute('href', 'singlepagestarships.html?id='+(i + 1));

				var titleName = document.createElement('h3');
				titleName.setAttribute('class', 'name');
				var titleNameText = document.createTextNode(value[i].name);
				titleName.append(titleNameText);

				var databankParagraph = document.createElement('p');
				var faSpinnerIcon = document.createElement('i');
				faSpinnerIcon.setAttribute('class', 'fa fa-spinner');
				faSpinnerIcon.setAttribute('aria-hidden', 'true');
				var databankParagraphText = document.createTextNode(' Databank');
				databankParagraph.append(faSpinnerIcon);
				databankParagraph.append(databankParagraphText);

				divProfileItem.append(divImageWrapperItem);
				divImageWrapperItem.append(imgWrapperItem);
				divProfileItem.append(divTextWrapperItem);
				divTextWrapperItem.append(aLinkName);
				aLinkName.append(titleName);
				divTextWrapperItem.append(databankParagraph);
				document.getElementsByClassName('starshipsContainer')[0].append(divProfileItem);
			}
		}
	} else if ($('div').hasClass('speciesContainer')) {

	// ----------------------------------
	// 			  SPECIES
	// ----------------------------------


		var xhrSpecies = new XMLHttpRequest();
		xhrSpecies.open("GET", "http://swapi.co/api/species/", true);

		xhrSpecies.onreadystatechange = function() {
			if(xhrSpecies.readyState == 4 && xhrSpecies.status == 200) {
				var data = JSON.parse(xhrSpecies.responseText).results;
				createSpeciesItem(data);
			}
		}
		xhrSpecies.send();

		function createSpeciesItem(value) {
			for(var i = 0 ; i < value.length ; i++) {

				var divProfileItem = document.createElement('div');
				divProfileItem.setAttribute('class', 'profileItem');

				var divImageWrapperItem = document.createElement('div');
				divImageWrapperItem.setAttribute('class', 'imageWrapper');

				var imgWrapperItem = document.createElement('img');
				imgWrapperItem.setAttribute('src', 'css/img/Info-Star-Wars-Planets.jpg');

				var divTextWrapperItem = document.createElement('div');
				divTextWrapperItem.setAttribute('class', 'textWrapper');

				var aLinkName = document.createElement('a');
				aLinkName.setAttribute('class', 'linkName');
				aLinkName.setAttribute('href', 'singlepagespecies.html?id='+(i + 1));

				var titleName = document.createElement('h3');
				titleName.setAttribute('class', 'name');
				var titleNameText = document.createTextNode(value[i].name);
				titleName.append(titleNameText);

				var databankParagraph = document.createElement('p');
				var faSpinnerIcon = document.createElement('i');
				faSpinnerIcon.setAttribute('class', 'fa fa-spinner');
				faSpinnerIcon.setAttribute('aria-hidden', 'true');
				var databankParagraphText = document.createTextNode(' Databank');
				databankParagraph.append(faSpinnerIcon);
				databankParagraph.append(databankParagraphText);

				divProfileItem.append(divImageWrapperItem);
				divImageWrapperItem.append(imgWrapperItem);
				divProfileItem.append(divTextWrapperItem);
				divTextWrapperItem.append(aLinkName);
				aLinkName.append(titleName);
				divTextWrapperItem.append(databankParagraph);
				document.getElementsByClassName('speciesContainer')[0].append(divProfileItem);
			}
		}
	}
})();

	



// http://swapi.co/api/planets/1/

// Films

// http://swapi.co/api/films/2/
// ,http://swapi.co/api/films/6/
// ,http://swapi.co/api/films/3/
// ,http://swapi.co/api/films/1/
// ,http://swapi.co/api/films/7/