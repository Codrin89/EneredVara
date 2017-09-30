(function() {
	var id = window.location.href.split('?id=')[1];
	console.log(id);
	
	var xhrSingle = new XMLHttpRequest();
	xhrSingle.open('GET','https://swapi.co/api/person/' + id,true);
	
	xhrSingle.onreadystatechange = function(){
		if (xhrSingle.readyState == 4 && xhrSingle.status == 200){
			var dataPlanet = JSON.parse(xhrSingle.responseText);
			populatepersonItem(dataPlanet);
		}
	}

	xhrSingle.send();
	function populatepersonItem(data) {
		document.getElementsByClassName('name')[0].innerHTML += data.name;
		document.getElementsByClassName('')[0].innerHTML += data.climate;
		document.getElementsByClassName('')[0].innerHTML += data.created;
		document.getElementsByClassName('')[0].innerHTML += data.diameter;
		document.getElementsByClassName('')[0].innerHTML += data.edited;
		document.getElementsByClassName('')[0].innerHTML += data.gravity;
		document.getElementsByClassName('')[0].innerHTML += data.orbital_period;
		document.getElementsByClassName('')[0].innerHTML += data.population;
		document.getElementsByClassName('')[0].innerHTML += data.rotation_period;
		document.getElementsByClassName('')[0].innerHTML += data.surface_water;
		document.getElementsByClassName('')[0].innerHTML += data.terain;
		document.getElementsByClassName('url')[0].innerHTML += data.url;
		
		for (var i =0; i < data.residents.length ;i++) {
			var itemResident = document.createElement('p');
			var itemResidentText = document.createTextNode(data.residents[i]);
			itemResident.append(itemResidentText);
			document.getElementsByClassName('')[0].append(itemResident);
}
		for (var i =0; i < data.films.length ;i++) {
			var itemfilms = document.createElement('p');
			var itemfilmsText = document.createTextNode(data.films[i]);
			itemfilms.append(itemfilmsText);
			document.getElementsByClassName('')[0].append(itemfilms);

		}
	}
	})();
