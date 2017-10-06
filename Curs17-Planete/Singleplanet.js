(function() {
	var id = window.location.href.split("?id=")[1];
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

    	document.getElementsByClassName("titlePlanete")[0].innerHTML += data.name;
    	document.getElementsByClassName("climate")[0].innerHTML += data.Climate;
    	document.getElementsByClassName("created")[0].innerHTML += data.Created;
    	document.getElementsByClassName("rotation_period")[0].innerHTML += data.Rotation_period;
    	document.getElementsByClassName("orbital_period")[0].innerHTML += data.Orbital_period;
    	document.getElementsByClassName("edited")[0].innerHTML += data.Edited;
    	document.getElementsByClassName("population")[0].innerHTML += data.Population;
    	document.getElementsByClassName("name")[0].innerHTML += data.Alderaan;
    	document.getElementsByClassName("surface_water")[0].innerHTML += data.Surface_water;
    	document.getElementsByClassName("gravity")[0].innerHTML += data.Gravity;
    	document.getElementsByClassName("diameter")[0].innerHTML += data.Diameter;
    	document.getElementsByClassName("url")[0].innerHTML += data.Url;
      
      for(var i = 0 ; i <data.residents.length ; i++) {
          var itemResident = document.createElement("p");
          var itemResidentText = document.createTextNode(data.residents[i]);
          itemResident.appendChild(itemResidentText);
          document.getElementsByClassName("residents")[0].appendChild(itemResident);


          xhrResidents[i].send();
}

       for(var i = 0 ; i <data.films.length ; i++) {
          var itemFilms = document.createElement("p");
          var itemFilmsText = document.createTextNode(data.films[i]);
          itemFilms.appendChild(itemResidentText);
          document.getElementsByClassName("films")[0].appendChild(itemFilms);

      }
    }

})();