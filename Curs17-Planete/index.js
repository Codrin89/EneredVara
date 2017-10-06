(function() {

    

    //Start Planete


    var xhrPlanet = new XMLHttpRequest();
    xhrPlanet.open("GET", 'https://swapi.co/api/planets/?page=4', true);
    

    xhrPlanet.onreadystatechange = function() {
        if (xhrPlanet.readyState == 4 && xhrPlanet.status == 200) {
            var dataPlanet = JSON.parse(xhrPlanet.responseText).results;
            createPlanetItem(dataPlanet);
        }

    }
    xhrPlanet.send();

    function createPlanetItem(value) {
        for (var i = 0; i < value.length; i++) {

            // 	<div class="planetItem text-center">
            var divItemPlanet = document.createElement('div');
            divItemPlanet.setAttribute('class', 'planetItem text-center alderaan');


            // <h3 class="Name">ce nume are</h3>
            var nameItemPlanet = document.createElement('h3');
            nameItemPlanet.setAttribute('class', 'Name');
            var nameItemTextPlanet = document.createTextNode(value[i].name);
            nameItemPlanet.appendChild(nameItemTextPlanet);

            // <h6 class="info">General Info:</h6>
            var infoItemPlanet = document.createElement('h6');
            infoItemPlanet.setAttribute('class', 'info');
            var infoItemTextPlanet = document.createTextNode("General Info");
            infoItemPlanet.appendChild(infoItemTextPlanet);

            //<ul class="">
            var ulItemPlanet = document.createElement('ul');

            // 	<li class="rotation_period">24</li>
            var rotation_periodItem = document.createElement('li');
            rotation_periodItem.setAttribute('class', 'rotation_period');
            var rotation_periodItemText = document.createTextNode(value[i].rotation_period);
            rotation_periodItem.appendChild(rotation_periodItemText);

            // 	<li class="orbital_period">4818</li>
            var orbital_periodItem = document.createElement('li');
            orbital_periodItem.setAttribute('class', 'orbital_period');
            var orbital_periodItemText = document.createTextNode(value[i].orbital_period);
            orbital_periodItem.appendChild(orbital_periodItemText);

            // 	<li class="diameter">10200</li>
            var diameterItem = document.createElement('li');
            diameterItem.setAttribute('class', 'diameter');
            var diameterItemText = document.createTextNode(value[i].diameter);
            diameterItem.appendChild(diameterItemText);

            // 	<li class="climate">temperate</li>
            var climateItem = document.createElement('li');
            climateItem.setAttribute('class', 'climate');
            var climateItemText = document.createTextNode(value[i].climate);
            climateItem.appendChild(climateItemText);

            // 	<li class="gravity">standard</li>
            var gravityItem = document.createElement('li');
            gravityItem.setAttribute('class', 'gravity');
            var gravityItemText = document.createTextNode(value[i].gravity);
            gravityItem.appendChild(gravityItemText);

            // 	<li class="terrain">jungle</li>
            var terrainItem = document.createElement('li');
            terrainItem.setAttribute('class', 'terrain');
            var terrainItemText = document.createTextNode(value[i].terrain);
            terrainItem.appendChild(terrainItemText);

            // 	<li class="surface_water">8</li>
            var surface_waterItem = document.createElement('li');
            surface_waterItem.setAttribute('class', 'surface_water');
            var surface_waterItemText = document.createTextNode(value[i].surface_water);
            surface_waterItem.appendChild(surface_waterItemText);

            // 	<li class="population">1000</li>
            var populationItem = document.createElement('li');
            populationItem.setAttribute('class', 'population');
            var populationItemText = document.createTextNode(value[i].population);
            populationItem.appendChild(populationItemText);

            // 	<li class="residents">[]</li>
            var residentsItem = document.createElement('li');
            residentsItem.setAttribute('class', 'residents');
            var residentsItemText = document.createTextNode(value[i].residents);
            residentsItem.appendChild(residentsItemText);

            // 	<li class="films">https://swapi.co/api/planets/1/</li>
            var filmsItem = document.createElement('li');
            filmsItem.setAttribute('class', 'films');
            var filmsItemText = document.createTextNode(value[i].films);
            filmsItem.appendChild(filmsItemText);

            
            divItemPlanet.appendChild(nameItemPlanet);
            divItemPlanet.appendChild(infoItemPlanet);
            ulItemPlanet.appendChild(rotation_periodItem);
            ulItemPlanet.appendChild(orbital_periodItem);
            ulItemPlanet.appendChild(diameterItem);
            ulItemPlanet.appendChild(climateItem);
            ulItemPlanet.appendChild(gravityItem);
            ulItemPlanet.appendChild(terrainItem);
            ulItemPlanet.appendChild(surface_waterItem);
            ulItemPlanet.appendChild(populationItem);
            ulItemPlanet.appendChild(residentsItem);
            ulItemPlanet.appendChild(filmsItem);
            divItemPlanet.appendChild(ulItemPlanet);
            document.getElementsByClassName('planetContainer')[0].appendChild(divItemPlanet);

           	//ADAUGA BACKGROUND PLANETE

    		


         }
    }
})();