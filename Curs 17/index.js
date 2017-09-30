(function () {
	//REQUEST TO SERVER
	var xhr = new XMLHttpRequest();
	xhr.open("GET",'http://swapi.co/api/planets',true);
	
	xhr.onreadystatechange = function() {//Call a function when the  changes.
		if(xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText).results;
			createPlanetItem(data);
			}
		
		}

	xhr.send();
	
	function createPlanetItem(value) {
		for(var i= 0; i<value.length ; i++) {
			var divItem = document.createElement('div');
			divItem.setAttribute('class',' PlanetItem col-md-4 text-center');
			

			var nameItem = document.createElement('h3');
			nameItem.setAttribute('class','Name');
			var nameItemText = document.createTextNode(value[i].name);
			nameItem.append(nameItemText);

			var GeneralInfoItem = document.createElement('h6');
			var generalInfoText = document.createTextNode("General info");
			GeneralInfoItem.append(generalInfoText);

			var ulItem = document.createElement('ul')

			var rotation_periodItem = document.createElement('li');
			rotation_periodItem.setAttribute('class','rotation_period');
			var rotation_periodItemText = document.createTextNode(value[i].rotation_period);
			rotation_periodItem.append(rotation_periodItemText);

			var orbital_periodItem = document.createElement('li');
			orbital_periodItem.setAttribute('class','orbital_period');
			var orbital_periodItemText = document.createTextNode(value[i].orbital_period);
			orbital_periodItem.append(orbital_periodItemText);

			var diameterItem = document.createElement('li');
			diameterItem.setAttribute('class','diameter');
			var diameterItemText = document.createTextNode(value[i].diameter);
			diameterItem.append(diameterItemText);


			var climateItem = document.createElement('li');
			climateItem.setAttribute('class','climate');
			var climateItemText = document.createTextNode(value[i].sclimate);
			climateItem.append(climateItemText);

			var gravityItem = document.createElement('li');
			gravityItem.setAttribute('class','gravity');
			var gravityItemText = document.createTextNode(value[i].gravity);
			gravityItem.append(gravityItemText);

			var terainItem = document.createElement('li');
			terainItem.setAttribute('class','terain');
			var terainItemText = document.createTextNode(value[i].terain);
			terainItem.append(terainItemText);

			var surface_waterItem = document.createElement('li');
			surface_waterItem.setAttribute('class','surface_water');
			var surface_waterItemText = document.createTextNode(value[i].surface_water);
			surface_waterItem.append(surface_waterItemText);
			
			var populationItem = document.createElement('li');
			populationItem.setAttribute('class','population');
			var populationItemText = document.createTextNode(value[i].population);
			populationItem.append(populationItemText);
			
			var residanceItem = document.createElement('li');
			residanceItem.setAttribute('class','residance');
			var residanceItemText = document.createTextNode(value[i].residance);
			residanceItem.append(residanceItemText);
			
			var filmsItem = document.createElement('li');
			filmsItem.setAttribute('class','films');
			var filmsItemText = document.createTextNode(value[i].films);
			filmsItem.append(filmsItemText);
			
			var anchorToSinglePlanetItem = document.createElement('a');	
			anchorToSinglePlanetItem.setAttribute('class','PlanetButton');
			anchorToSinglePlanetItem.setAttribute('href','singlePLanet.html?id'+ (i+2));
			var anchorToSinglePlanetItemText = document.createTextNode('Go to Planet' + value[i].name);
			anchorToSinglePlanetItem.append(anchorToSinglePlanetItemText);






			divItem.append(nameItem);
			divItem.append(GeneralInfoItem);
			ulItem.append(orbital_periodItem);
			ulItem.append(diameterItem);
			ulItem.append(climateItem);
			ulItem.append(gravityItem);
			ulItem.append(terainItem);
			ulItem.append(surface_waterItem);
			ulItem.append(populationItem);
			ulItem.append(residanceItem);
			ulItem.append(filmsItem);
			divItem.append(anchorToSinglePlanetItem);
			divItem.append(ulItem);

			document.getElementsByClassName("PlanetContainer")[0].append(divItem);





			console.log(value[i]);



		}
	}

})();