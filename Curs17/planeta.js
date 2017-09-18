(function() {
	var id = window.location.href.split('?id=')[1];
	console.log(id);

	var xhrSingle = new XMLHttpRequest();
	xhrSingle.open("GET", "https://swapi.co/api/planets/" + id, true);

	xhrSingle.onreadystatechange = function() {
		if (xhrSingle.readyState == 4 && xhrSingle.status == 200) {
			var dataPlanet = JSON.parse(xhrSingle.responseText);
			populatePlanetItem(dataPlanet);
		}
	}
	xhrSingle.send();

	function populatePlanetItem(data) {
		document.getElementsByClassName('titlePlanete')[0].innerHTML += data.name;
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
		document.getElementsByClassName('url')[0].innerHTML += data.url;

		var xhrResidents = [];
		for(var i = 0; i < data.residents.length; i++) {
			xhrResidents.push(new XMLHttpRequest());
			xhrResidents[i].open("GET", data.residents[i], true);

			xhrResidents[i].onreadystatechange = function(data) {
				if (data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
					var dataPlanet = JSON.parse(data.currentTarget.responseText);
					var itemResident = document.createElement('p');
					var itemResidentText = document.createTextNode(dataPlanet.name);
					itemResident.append(itemResidentText);
					document.getElementsByClassName('residents')[0].append(itemResident);
				}
			}
			xhrResidents[i].send();
		}


		for( var i = 0; i < data.films.length; i++) {
			var itemfilms = document.createElement('p');
			var itemResidentText = document.createTextNode(data.films[i]);
			itemfilms.append(itemResidentText);

			document.getElementsByClassName('films')[0].append(itemfilms);
		}
	}

})();