(function(){


	var idPlanets = window.location.href.split('?id=')[1];

	var xhrSingle = new XMLHttpRequest();
		xhrSingle.open("GET", "http://swapi.co/api/planets/" + idPlanets, true);

		xhrSingle.onreadystatechange = function() {
			if(xhrSingle.readyState == 4 && xhrSingle.status == 200) {
				var dataPlanet = JSON.parse(xhrSingle.responseText);
				populatePlanetItem(dataPlanet);
			}

		}
		xhrSingle.send();

	function populatePlanetItem(data) {
		document.getElementsByClassName('titlePlanet')[0].innerHTML += data.name;
		document.getElementsByClassName('rotation_period')[0].innerHTML += data.rotation_period;
		document.getElementsByClassName('orbital_period')[0].innerHTML += data.orbital_period;
		document.getElementsByClassName('diameter')[0].innerHTML += data.diameter;
		document.getElementsByClassName('climate')[0].innerHTML += data.climate;
		document.getElementsByClassName('gravity')[0].innerHTML += data.gravity;
		document.getElementsByClassName('terrain')[0].innerHTML += data.terrain;
		document.getElementsByClassName('surface_water')[0].innerHTML += data.surface_water;
		document.getElementsByClassName('population')[0].innerHTML += data.population;
		document.getElementsByClassName('created')[0].innerHTML += data.created;
		document.getElementsByClassName('edited')[0].innerHTML += data.edited;
		document.getElementsByClassName('url')[1].innerHTML += data.url;
		

		
		var xhrResidents = [];
		for(var i = 0 ; i < data.residents.length ; i++) {
			xhrResidents.push(new XMLHttpRequest());
			xhrResidents[i].open("GET", data.residents[i], true);			

			xhrResidents[i].onreadystatechange = function(data) {
				if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
					var dataPlanet = JSON.parse(data.currentTarget.responseText);
					var itemResident = document.createElement('p');
					var itemResidentText = document.createTextNode(dataPlanet.name);
					
					itemResident.append(itemResidentText)
					document.getElementsByClassName('residents')[0].append(itemResident);
				}
			}

		xhrResidents[i].send();
			
		}


		var xhrFilms = [];
		for(var i = 0 ; i < data.films.length ; i++) {
			xhrFilms.push(new XMLHttpRequest());
			xhrFilms[i].open("GET", data.films[i], true);

			xhrFilms[i].onreadystatechange = function(data) {
				if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
					var dataFilms = JSON.parse(data.currentTarget.responseText);
					var itemFilm = document.createElement('p');
					var itemFilmText = document.createTextNode(dataFilms.title);
					
					itemFilm.append(itemFilmText)
					document.getElementsByClassName('films')[0].append(itemFilm);
				}
			}	
		xhrFilms[i].send();	

		}
	}

	
	// function singlePlanetView(value) {		

	// 	var divPlanetsItem = document.createElement('div');
	// 	divPlanetsItem.setAttribute('class', 'singlePlanet col-lg-12');

	// 	var nameItem = document.createElement('h3');
	// 	nameItem.setAttribute('class', 'name');
	// 	var nameItemText = document.createTextNode('Name: ' + value.name);
	// 	nameItem.append(nameItemText);

	// 	var infoItem = document.createElement('h5');
	// 	infoItem.setAttribute('class', 'info');
	// 	var infoItemText = document.createTextNode('General info:');
	// 	infoItem.append(infoItemText);

	// 	var ulItem = document.createElement('ul');
	// 	ulItem.setAttribute('class', 'text-left');

	// 	var rotation_periodItem = document.createElement('li');
	// 	rotation_periodItem.setAttribute('class', 'rotation_period');
	// 	var rotation_periodItemText = document.createTextNode('Rotation period: ' + value.rotation_period);
	// 	rotation_periodItem.append(rotation_periodItemText);

	// 	var orbital_periodItem = document.createElement('li');
	// 	orbital_periodItem.setAttribute('class', 'orbital_period');
	// 	var orbital_periodItemText = document.createTextNode('Orbital period: ' + value.orbital_period);
	// 	orbital_periodItem.append(orbital_periodItemText);

	// 	var diameterItem = document.createElement('li');
	// 	diameterItem.setAttribute('class', 'diameter');
	// 	var diameterItemText = document.createTextNode('Diameter: ' + value.diameter);
	// 	diameterItem.append(diameterItemText);

	// 	var climateItem = document.createElement('li');
	// 	climateItem.setAttribute('class', 'climate');
	// 	var climateItemText = document.createTextNode('Skin Color: ' + value.climate);
	// 	climateItem.append(climateItemText);

	// 	var gravityItem = document.createElement('li');
	// 	gravityItem.setAttribute('class', 'gravity');
	// 	var gravityItemText = document.createTextNode('Gravity: ' + value.gravity);
	// 	gravityItem.append(gravityItemText);

	// 	var terrainItem = document.createElement('li');
	// 	terrainItem.setAttribute('class', 'terrain');
	// 	var terrainItemText = document.createTextNode('Terrain: ' + value.terrain);
	// 	terrainItem.append(terrainItemText);

	// 	var surface_waterItem = document.createElement('li');
	// 	surface_waterItem.setAttribute('class', 'surface_water');
	// 	var surface_waterItemText = document.createTextNode('Surface Water: ' + value.surface_water);
	// 	surface_waterItem.append(surface_waterItemText);

	// 	var populationItem = document.createElement('li');
	// 	populationItem.setAttribute('class', 'population');
	// 	var populationItemText = document.createTextNode('Population: ' + value.population);
	// 	populationItem.append(populationItemText);



	// 	divPlanetsItem.append(nameItem);
	// 	divPlanetsItem.append(infoItem);
	// 	divPlanetsItem.append(ulItem);
	// 	ulItem.append(rotation_periodItem);
	// 	ulItem.append(orbital_periodItem);
	// 	ulItem.append(diameterItem);
	// 	ulItem.append(climateItem);
	// 	ulItem.append(gravityItem);
	// 	ulItem.append(terrainItem);
	// 	ulItem.append(surface_waterItem);
	// 	ulItem.append(populationItem);
	// 	document.getElementsByClassName('singlePlanet')[0].append(divPlanetsItem);			
	// }

})();