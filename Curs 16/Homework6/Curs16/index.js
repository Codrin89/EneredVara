(function() {

    //REQUEST TO SERVER

    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://swapi.co/api/people', true);

    xhr.onreadystatechange = function() { //Call a function when the st
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText).results;
            createPersonItem(data);
        }

    }
    xhr.send();

    function createPersonItem(value) {
        for (var i = 0; i < value.length; i++) {

            // <div class="personItem text-center">
            var divItem = document.createElement('div');
            divItem.setAttribute('class', 'personItem col-md-4 text-center');

            // <h3 class="Name">Beru Whitesun lars</h3>
            var nameItem = document.createElement('h3');
            nameItem.setAttribute('class', 'Name');
            var nameItemText = document.createTextNode(value[i].name);
            nameItem.append(nameItemText);

            //<h6 class="info">General Info:</h6>
            var infoItem = document.createElement('h6');
            infoItem.setAttribute('class', 'info');
            var infoItemText = document.createTextNode("General Info");
            infoItem.append("General Info");

            //<ul class="">
            var ulItem = document.createElement('ul');

            //<li class="height">165</li>
            var heightItem = document.createElement('li');
            heightItem.setAttribute('class', 'height');
            var heightItemText = document.createTextNode(value[i].height);
            heightItem.append(heightItemText);
            //<li class="mass">75</li>
            var massItem = document.createElement('li');
            massItem.setAttribute('class', 'mass');
            var massItemText = document.createTextNode(value[i].mass);
            massItem.append(massItemText);

            //<li class="hair_color">brown</li>
            var hairItem = document.createElement('li');
            hairItem.setAttribute('class', 'hair_color');
            var hairItemText = document.createTextNode(value[i].hair_color);
            hairItem.append(hairItemText);

            //<li class="skin_color">light</li>
            var skinItem = document.createElement('li');
            skinItem.setAttribute('class', 'skin_color');
            var skinItemText = document.createTextNode(value[i].skin_color);
            skinItem.append(skinItemText);

            //<li class="eye_color">blue</li>
            var eyeItem = document.createElement('li');
            eyeItem.setAttribute('class', 'eye_color');
            var eyeItemText = document.createTextNode(value[i].eye_color);
            eyeItem.append(eyeItemText);

            //<li class="birth_year">47BBY</li>
            var birthItem = document.createElement('li');
            birthItem.setAttribute('class', 'birth_year');
            var birthItemText = document.createTextNode(value[i].birth_year);
            birthItem.append(birthItemText);

            //<li class="gender">female</li>
            var genderItem = document.createElement('li');
            genderItem.setAttribute('class', 'gender');
            var genderItemText = document.createTextNode(value[i].gender);
            genderItem.append(genderItemText);

            //<li class="homeworld">https:/swapi.co/api/planets/1/</li>
            var homeworldItem = document.createElement('li');
            homeworldItem.setAttribute('class', 'homeworld');
            var homeworldItemText = document.createTextNode(value[i].homeworld);
            homeworldItem.append(homeworldItemText);

            divItem.append(nameItem);
            divItem.append(infoItem);
            ulItem.append(heightItem);
            ulItem.append(massItem);
            ulItem.append(hairItem);
            ulItem.append(skinItem);
            ulItem.append(eyeItem);
            ulItem.append(birthItem);
            ulItem.append(genderItem);
            ulItem.append(homeworldItem);
            divItem.append(ulItem);
            document.getElementsByClassName('personContainer')[0].append(divItem);


            console.log(value[i]);
        }



    }

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
            nameItemPlanet.append(nameItemTextPlanet);

            // <h6 class="info">General Info:</h6>
            var infoItemPlanet = document.createElement('h6');
            infoItemPlanet.setAttribute('class', 'info');
            var infoItemTextPlanet = document.createTextNode("General Info");
            infoItemPlanet.append("General Info");

            //<ul class="">
            var ulItemPlanet = document.createElement('ul');

            // 	<li class="rotation_period">24</li>
            var rotation_periodItem = document.createElement('li');
            rotation_periodItem.setAttribute('class', 'rotation_period');
            var rotation_periodItemText = document.createTextNode(value[i].rotation_period);
            rotation_periodItem.append(rotation_periodItemText);

            // 	<li class="orbital_period">4818</li>
            var orbital_periodItem = document.createElement('li');
            orbital_periodItem.setAttribute('class', 'orbital_period');
            var orbital_periodItemText = document.createTextNode(value[i].orbital_period);
            orbital_periodItem.append(orbital_periodItemText);

            // 	<li class="diameter">10200</li>
            var diameterItem = document.createElement('li');
            diameterItem.setAttribute('class', 'diameter');
            var diameterItemText = document.createTextNode(value[i].diameter);
            diameterItem.append(diameterItemText);

            // 	<li class="climate">temperate</li>
            var climateItem = document.createElement('li');
            climateItem.setAttribute('class', 'climate');
            var climateItemText = document.createTextNode(value[i].climate);
            climateItem.append(climateItemText);

            // 	<li class="gravity">standard</li>
            var gravityItem = document.createElement('li');
            gravityItem.setAttribute('class', 'gravity');
            var gravityItemText = document.createTextNode(value[i].gravity);
            gravityItem.append(gravityItemText);

            // 	<li class="terrain">jungle</li>
            var terrainItem = document.createElement('li');
            terrainItem.setAttribute('class', 'terrain');
            var terrainItemText = document.createTextNode(value[i].terrain);
            terrainItem.append(terrainItemText);

            // 	<li class="surface_water">8</li>
            var surface_waterItem = document.createElement('li');
            surface_waterItem.setAttribute('class', 'surface_water');
            var surface_waterItemText = document.createTextNode(value[i].surface_water);
            surface_waterItem.append(surface_waterItemText);

            // 	<li class="population">1000</li>
            var populationItem = document.createElement('li');
            populationItem.setAttribute('class', 'population');
            var populationItemText = document.createTextNode(value[i].population);
            populationItem.append(populationItemText);

            // 	<li class="residents">[]</li>
            var residentsItem = document.createElement('li');
            residentsItem.setAttribute('class', 'residents');
            var residentsItemText = document.createTextNode(value[i].residents);
            residentsItem.append(residentsItemText);

            // 	<li class="films">https://swapi.co/api/planets/1/</li>
            var filmsItem = document.createElement('li');
            filmsItem.setAttribute('class', 'films');
            var filmsItemText = document.createTextNode(value[i].films);
            filmsItem.append(filmsItemText);


            divItemPlanet.append(nameItemPlanet);
            divItemPlanet.append(infoItemPlanet);
            ulItemPlanet.append(rotation_periodItem);
            ulItemPlanet.append(orbital_periodItem);
            ulItemPlanet.append(diameterItem);
            ulItemPlanet.append(climateItem);
            ulItemPlanet.append(gravityItem);
            ulItemPlanet.append(terrainItem);
            ulItemPlanet.append(surface_waterItem);
            ulItemPlanet.append(populationItem);
            ulItemPlanet.append(residentsItem);
            ulItemPlanet.append(filmsItem);
            divItemPlanet.append(ulItemPlanet);
            document.getElementsByClassName('planetContainer')[0].append(divItemPlanet);

           	//ADAUGA BACKGROUND PLANETE

    		


         }
    }
})();