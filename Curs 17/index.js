(function() {
	var id = window.location.href.split('?id=')[1];
	console.log(id);



	var xhrSingle = new XMLHttpRequest();
	xhrSingle.open("GET", 'https://swapi.co/api/planets/' + id, true);

	xhrSingle.onreadystatechange = function() {
		if (xhrSingle.readyState == 4 && xhrSingle.status == 200) {
			var dataPlanet = JSON.parse(xhrSingle.responseText);
			populatePlanetItem(dataPlanet);
		}
	}
	xhrSingle.send();

	function populatePlanetItem(data) {

		document.getElementsByClassName('titlePlanete')[0].innerHTML += data.name;
		document.getElementsByClassName('climate')[0].innerHTML += data.climate;
		document.getElementsByClassName('diameter')[0].innerHTML += data.diameter;
		document.getElementsByClassName('edited')[0].innerHTML += data.edited;
		document.getElementsByClassName('graviti')[0].innerHTML += data.graviti;
		document.getElementsByClassName('name')[0].innerHTML += data.name;
		document.getElementsByClassName('orbital_period')[0].innerHTML += data.orbital_period;
		document.getElementsByClassName('population')[0].innerHTML += data.population;
		document.getElementsByClassName('rotation_period')[0].innerHTML += data.rotation_period;
		document.getElementsByClassName('surface_water')[0].innerHTML += data.surface_water;
		document.getElementsByClassName('terrain')[0].innerHTML += data.terrain;
		document.getElementsByClassName('url')[0].innerHTML += data.url;


         
		for(var i = 0 ; i < data.residents.length ; i++) {
			var itemResident = document.createElement('p');
			var itemResidentText = document.createTextNode(data.residents[i]);
			itemResident.append(itemResidentText);

			document.getElementsByClassName('residents')[0].append(itemResident);
		}

		for(var i = 0 ; i < data.films.length ; i++) {
			var itemFilms = document.createElement('p');
			var itemFilmsText = document.createTextNode(data.films[i]);
			itemFilms.append(itemFilmsText);

			document.getElementsByClassName('films')[0].append(itemFilms);
        }

	}





})();