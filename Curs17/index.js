(function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://swapi.co/api/planets', true);

	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText).results;
			createPersonItem(data);
		}
	}
	xhr.send();
	function createPersonItem(value) {
		for(var i = 0 ; i < value.length ; i++) {
			
			var divItem = document.createElement('div');
			divItem.setAttribute('class', 'personItem');

			var nameItem = document.createElement('h1');
			nameItem.setAttribute('class', 'Name');
			var nameItemText = document.createTextNode(value[i].name);
			nameItem.append(nameItemText);
			
			var GeneralInfoItem = document.createElement('h6');
			var generalItemText = document.createTextNode('General Info');
			GeneralInfoItem.append(generalItemText);

			var ulItem = document.createElement('ul');
			
			var rotation_periodItem = document.createElement('li');
			rotation_periodItem.setAttribute('class', 'rotation_period');
			var rotation_periodItemText = document.createTextNode(value[i].rotation_period);
			rotation_periodItem.append(rotation_periodItemText);

			var orbital_periodItem = document.createElement('li');
			orbital_periodItem.setAttribute('class', 'orbital_period');
			var orbital_periodItemText = document.createTextNode(value[i].orbital_period);
			orbital_periodItem.append(orbital_periodItemText);

			var diameterItem = document.createElement('li');
			diameterItem.setAttribute('class', 'diameter');
			var diameterItemText = document.createTextNode(value[i].diameter);
			diameterItem.append(diameterItemText);

			var climateItem = document.createElement('li');
			climateItem.setAttribute('class', 'climate');
			var climateItemText = document.createTextNode(value[i].climate);
			climateItem.append(climateItemText);

			var gravityItem = document.createElement('li');
			gravityItem.setAttribute('class', 'gravity');
			var gravityItemText = document.createTextNode(value[i].gravity);
			gravityItem.append(gravityItemText);

			var terrainItem = document.createElement('li');
			terrainItem.setAttribute('class', 'terrain');
			var terrainItemText = document.createTextNode(value[i].terrain);
			terrainItem.append(terrainItemText);

			var surface_waterItem = document.createElement('li');
			surface_waterItem.setAttribute('class', 'surface_water');
			var surface_waterItemText = document.createTextNode(value[i].surface_water);
			surface_waterItem.append(surface_waterItemText);

			var populationItem = document.createElement('li');
			populationItem.setAttribute('class', 'population');
			var populationItemText = document.createTextNode(value[i].population);
			populationItem.append(populationItemText);

			var urlItem = document.createElement('li');
			urlItem.setAttribute('class', 'url');
			var urlItemText = document.createTextNode(value[i].url);
			urlItem.append(urlItemText);

			var anchorToSinglePlanetItem = document.createElement('a');
			anchorToSinglePlanetItem.setAttribute('class', 'planetButton');
			anchorToSinglePlanetItem.setAttribute('href','singlePlanet.html?id='+ (i + 2));
			var anchorToSinglePlanetItemText = document.createTextNode('Go to Planet ' + value[i].name);
			anchorToSinglePlanetItem.append(anchorToSinglePlanetItemText);


			divItem.append(nameItem);
			divItem.append(GeneralInfoItem);
			ulItem.append(rotation_periodItem);
			ulItem.append(orbital_periodItem);
			ulItem.append(diameterItem);
			ulItem.append(climateItem);
			ulItem.append(gravityItem);
			ulItem.append(terrainItem);
			ulItem.append(surface_waterItem);
			ulItem.append(populationItem);
			ulItem.append(urlItem);
			divItem.append(ulItem);
			divItem.append(anchorToSinglePlanetItem);
			document.getElementsByClassName("personContainer")[0].append(divItem);
			

		}
	}
})();