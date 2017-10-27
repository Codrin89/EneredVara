(function() {

    //REQUEST TO SERVER
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://swapi.co/api/planets/', true);

    xhr.onreadystatechange = function () {//call a function when the state changes.
    	if(xhr.readyState == 4 && xhr.status == 200) {
    		var data = JSON.parse(xhr.responseText).results;
    		createPersonItem(data);
        }

    }
    xhr.send(); 


    function createPersonItem(value)  {
       for(var i = 0 ; i < value.length ; i++) {
        //   <div class="personItem text-center">
        var divItem = document.createElement('div');
        divItem.setAttribute('class', 'personItem col-md-4 text-center');
        //   <h3 class="Name">Parau Beniamin</h3>

        var nameItem = document.createElement('h3');
        nameItem.setAttribute('class', 'name');
        var nameItemText = document.createTextNode(value[i].name);
        nameItem.append(nameItemText);

        var Generalinfoitem = document.createElement('h6');
        var generalInfotext = document.createTextNode('General Info');
        Generalinfoitem.append(generalInfotext);

        var ulItem = document.createElement('ul');

        var rotation_period = document.createElement('li');
        rotation_period.setAttribute('class', 'rotation_period');
        var rotation_periodText = document.createTextNode(value[i].rotation_period)
        rotation_period.append(rotation_periodText);

        var orbital_period = document.createElement('li');
        orbital_period.setAttribute('class', 'orbital_period');
        var orbital_periodText = document.createTextNode(value[i].orbital_period)
        orbital_period.append(orbital_periodText);

        var diameter = document.createElement('li');
        diameter.setAttribute('class', 'diameter');
        var diameterText = document.createTextNode(value[i].diameter)
        diameter.append(diameterText);

        var climate = document.createElement('li');
        climate.setAttribute('class', 'climate');
        var climateText = document.createTextNode(value[i].climate)
        climate.append(climateText);

        var gravity = document.createElement('li');
        gravity.setAttribute('class', 'gravity');
        var gravityText = document.createTextNode(value[i].gravity)
        gravity.append(gravityText);

        var terrain = document.createElement('li');
        terrain.setAttribute('class', 'terrain');
        var terrainText = document.createTextNode(value[i].terrain)
        terrain.append(terrainText);

        var surface_water = document.createElement('li');
        surface_water.setAttribute('class', 'surface_water');
        var surface_waterText = document.createTextNode(value[i].surface_water)
        surface_water.append(surface_waterText);

        var population = document.createElement('li');
        population.setAttribute('class', 'population');
        var populationText = document.createTextNode(value[i].population)
        population.append(populationText);

        var residents = document.createElement('li');
        residents.setAttribute('class', 'residents');
        var residentsText = document.createTextNode(value[i].residents)
        residents.append(residentsText);


        var anchorToSinglePlanetItem = document.createElement('a');
        anchorToSinglePlanetItem.setAttribute('class', 'planetButton');
        anchorToSinglePlanetItem.setAttribute('href', 'singlePlanet.html');
        var anchorToSinglePlanetItem = document.createTextNode('Go to planet' + value[i].name);
        anchorToSinglePlanetItem.append(anchorToSinglePlanetItemText);

        divItem.append(nameItem);
        divItem.append(Generalinfoitem);
        ulItem.append(rotation_period);
        ulItem.append(orbital_period);
        ulItem.append(diameter);
        ulItem.append(climate);
        ulItem.append(gravity);
        ulItem.append(terrain);
        ulItem.append(surface_water);
        ulItem.append(population);
        divItem.append(residents);
        document.getElementsByClassName("personContainer")[0].append(divItem);




    	
    }  
    	}

   
})();