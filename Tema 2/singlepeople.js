(function() {
	var id = window.location.href.split('?id=')[1];
	console.log(id);

	var xhrSingle = new XMLHttpRequest();
	xhrSingle.open("GET", 'https://swapi.co/api/peoples/' + id, true);

	xhrSingle.onreadystatechange = function() {
		if(xhrSingle.readyState == 4 && xhrSingle.status == 200) {
			var dataPeople = JSON.parse(xhrSingle.responseText);
			createPersonItem(dataPeople);
		}

	}
	xhrSingle.send();

	function createPersonItem(data) {
		document.getElementsByClassName('titlePeople')[0].innerHTML += data.name;
		document.getElementsByClassName('height')[0].innerHTML += data.height;
		document.getElementsByClassName('mass')[0].innerHTML += data.mass;
		document.getElementsByClassName('hair_color')[0].innerHTML += data.hair_color;
		document.getElementsByClassName('skin_color')[0].innerHTML += data.skin_color;
		document.getElementsByClassName('eye_color')[0].innerHTML += data.eye_color;
		document.getElementsByClassName('birth_year')[0].innerHTML += data.birth_year;
		document.getElementsByClassName('gender')[0].innerHTML += data.gender;
		document.getElementsByClassName('homeworld')[0].innerHTML += data.homeworld;
		
		var xhrResidents = [];
		for(var i = 0 ; i < data.residents.length ; i++) {
			xhrResidents.push(new XMLHttpRequest());
			xhrResidents[i].open("GET", data.residents[i] true);

		xhrResidents[i].onreadystatechange = function(data) {
			if(xhrResidents.readyState == 4 && xhrResidents.status == 200) {
			var dataPerson = JSON.parse(xhrResidents.responseText);
			var itemResident = document.createElement('p');
			var itemResidentText = document.createTextNode(data.residents[i]);
			itemResident.append(itemResidentText);

			document.getElementsByClassName('residents')[0].append(itemResident);
		}

		for(var i = 0 ; i < data.films.length ; i++) {
			var itemFilm = document.createElement('p');
			var itemFilmText = document.createTextNode(data.films[i]);
			itemFilm.append(itemFilmText);

			document.getElementsByClassName('films')[0].append(itemFilm);
		}
	}
})();