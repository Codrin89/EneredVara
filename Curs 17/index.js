(function() {

	//request to server
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://swapi.co/api/planets/', true);

	xhr.onreadystatechange = function() {//call a function when the state change:
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText).results;
			createPlanetItem(data);
		}
		
	}
	xhr.send();
	function createPlanetItem(value) {
		for(var i = 0 ; i < value.length ; i++) {
			//<div class="planetItem col-md-4 text-center">
			var divItem = document.createElement('div');
			divItem.setAttribute('class' , 'planetItem col-md-4 text-center');
			
			//<h3 class="name">Alderaan</h3>
			var nameItem = document.createElement('h3');
			nameItem.setAttribute('class' , 'name');
			var nameItemText = document.createTextNode(value[i].name);
			nameItem.append(nameItemText);
			
			//<h6>General info:</h6>
			var infoElement = document.createElement('h6');
			
			//<li class="rotation_period">364</li>
			var rotation_periodItem = document.createElement('li');
			rotation_periodItem.setAttribute('class' , 'rotation_period');
			var rotation_periodItemText = document.createTextNode(value[i].rotation_period);
			rotation_periodItem.append(rotation_periodItemText);

			//<li class="orbital_period">75</li>
			var orbital_periodItem = document.createElement('li');
			orbital_periodItem.setAttribute('class' , 'orbital_period');
			var orbital_periodItemText = document.createTextNode(value[i].orbital_period);
			orbital_periodItem.append(orbital_periodItemText);
			
			
			//<li class="diameter">12500</li>
			var diameterItem = document.createElement('li');
			diameterItem.setAttribute('class' , 'diameter');
			var diameterItemText = document.createTextNode(value[i].diameter);
			diameterItem.append(diameterItemText);

			
			//<li class="climate">temperate</li>
			var climateItem = document.createElement('li');
			climateItem.setAttribute('class' , 'climate');
			var climateItemText = document.createTextNode(value[i].climate);
			climateItem.append(climateItemText);

			
			//<li class="gravity">1 standard</li>
			var gravityItem = document.createElement('li');
			gravityItem.setAttribute('class' , 'gravity');
			var gravityItemText = document.createTextNode(value[i].gravity);
			gravityItem.append(gravityItemText);

			
			//<li class="terrain">grasslands, mountains</li>
			var terrainItem = document.createElement('li');
			terrainItem.setAttribute('class' , 'terrain');
			var terrainItemText = document.createTextNode(value[i].terrain);
			terrainItem.append(terrainItemText);

			
			//<li class="surface_water">40</li>
			var surface_waterItem = document.createElement('li');
			surface_waterItem.setAttribute('class' , 'surface_water');
			var surface_waterItemText = document.createTextNode(value[i].surface_water);
			surface_waterItem.append(surface_waterItemText);

			
			//<li class="population">2000000000</li>
			var populationItem = document.createElement('li');
			populationItem.setAttribute('class' , 'population');
			var populationItemText = document.createTextNode(value[i].population);
			populationItem.append(populationItemText);

			


			//<ul class="textleft">
			var textleftItem = document.createElement('ul');
			textleftItem.setAttribute('class' , 'textleft');


			var anchorToSinglePlanetItem = document.createElement('a');
			anchorToSinglePlanetItem.setAttribute('class' , 'planetButton');
			anchorToSinglePlanetItem.setAttribute('href' , 'singleplanet.html?id=' + (i + 2));
			var anchorToSinglePlanetItemText = document.createTextNode('Go to planet' + value[i].name);
			anchorToSinglePlanetItem.append(anchorToSinglePlanetItemText);



			divItem.append(nameItem);
			divItem.append(rotation_periodItem);
			divItem.append(orbital_periodItem);
			divItem.append(diameterItem);
			divItem.append(climateItem);
			divItem.append(gravityItem);
			divItem.append(terrainItem);
			divItem.append(surface_waterItem);
			divItem.append(populationItem);
			divItem.append(anchorToSinglePlanetItem);
			divItem.append(textleftItem);
			document.getElementsByClassName('itemContainer')[0].append(divItem);
		}	
	}
})();