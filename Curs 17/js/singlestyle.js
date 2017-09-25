(function() {
	if ($('div').hasClass('singleResidentContainer')) {

		var idPeople = window.location.href.split('?id=')[1];
		var xhrSingleResident = new XMLHttpRequest();
			xhrSingleResident.open("GET", "http://swapi.co/api/people/" + idPeople, true);

			xhrSingleResident.onreadystatechange = function() {
				if(xhrSingleResident.readyState == 4 && xhrSingleResident.status == 200) {
					var dataPeople = JSON.parse(xhrSingleResident.responseText);
					populatePeopleItem(dataPeople);
				}
				
			}
			xhrSingleResident.send();

		function populatePeopleItem(data) {
			document.getElementsByClassName('titleName')[0].innerHTML += data.name;
			document.getElementsByClassName('height')[0].innerHTML = data.height;
			document.getElementsByClassName('mass')[0].innerHTML = data.mass;
			document.getElementsByClassName('hair_color')[0].innerHTML = data.hair_color;
			document.getElementsByClassName('skin_color')[0].innerHTML = data.skin_color;
			document.getElementsByClassName('eye_color')[0].innerHTML = data.eye_color;
			document.getElementsByClassName('birth_year')[0].innerHTML = data.birth_year;
			document.getElementsByClassName('gender')[0].innerHTML = data.gender;
			

			
			var xhrPlanets = [];
			for(var i = 0 ; i < data.homeworld.length ; i++) {
				xhrPlanets.push(new XMLHttpRequest());
				xhrPlanets[i].open("GET", data.homeworld[i], true);
				xhrPlanets[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataHomePlanet = JSON.parse(data.currentTarget.responseText);
						var itemHomeworld = document.createElement('p');
						var itemHomeworldText = document.createTextNode(dataHomePlanet.homeworld);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagespecies.html?id='+(i + 1));

						itemHomeworld.append(itemHomeworldText);
						document.getElementsByClassName('homeworld')[0].append(aLinkName);
					}
					
				}	

			xhrPlanets[i].send();	
			};


			var xhrFilms = [];
			for(var i = 0 ; i < data.films.length ; i++) {
				xhrFilms.push(new XMLHttpRequest());
				xhrFilms[i].open("GET", data.films[i], true);

				xhrFilms[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						
						var xhrFilmsName = new XMLHttpRequest();
							xhrFilmsName.open("GET", "http://swapi.co/api/films/", true);

							xhrFilmsName.onreadystatechange = function() {
								if(xhrFilmsName.readyState == 4 && xhrFilmsName.status == 200) {
									var data = JSON.parse(xhrFilmsName.responseText).results;
									createSpeciesItem(data);
								}
							}
							xhrFilmsName.send();

							function createSpeciesItem(value) {
								for(var i = 0 ; i < value.length ; i++) {

							var dataFilms = JSON.parse(data.currentTarget.responseText);
							var itemFilm = document.createElement('p');
							var itemFilmText = document.createTextNode(dataFilms.title);

							var aLinkName = document.createElement('a');
							aLinkName.setAttribute('class', 'linkName');
							aLinkName.setAttribute('href', 'singlepagefilms.html?id='+(i + 1));
							
							aLinkName.append(itemFilm);
							itemFilm.append(itemFilmText);
							document.getElementsByClassName('films')[0].append(aLinkName);
						}
					}
				}
			}	
			xhrFilms[i].send();	
			};


			var xhrSpecies = [];
				for(var i = 0 ; i < data.species.length ; i++) {
					xhrSpecies.push(new XMLHttpRequest());
					xhrSpecies[i].open("GET", data.species[i], true);

					xhrSpecies[i].onreadystatechange = function(data) {
						if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
							
							var xhrSpeciesName = new XMLHttpRequest();
							xhrSpeciesName.open("GET", "http://swapi.co/api/species/", true);

							xhrSpeciesName.onreadystatechange = function() {
								if(xhrSpeciesName.readyState == 4 && xhrSpeciesName.status == 200) {
									var data = JSON.parse(xhrSpeciesName.responseText).results;
									createSpeciesItem(data);
								}
							}
							xhrSpeciesName.send();

							function createSpeciesItem(value) {
								for(var i = 0 ; i < value.length ; i++) {
							var dataSpecies = JSON.parse(data.currentTarget.responseText);
							var itemSpecies = document.createElement('p');
							var itemSpeciesText = document.createTextNode(dataSpecies.name);

							var aLinkName = document.createElement('a');
							aLinkName.setAttribute('class', 'linkName');
							aLinkName.setAttribute('href', 'singlepagespecies.html?id='+ (i + 1));
							
							aLinkName.append(itemSpecies);
							itemSpecies.append(itemSpeciesText);
							document.getElementsByClassName('species')[0].append(aLinkName);
						}
					}
				}
			}	
			xhrSpecies[i].send();	
			};

			var xhrVehicles = [];
			for(var i = 0 ; i < data.vehicles.length ; i++) {
				xhrVehicles.push(new XMLHttpRequest());
				xhrVehicles[i].open("GET", data.vehicles[i], true);

				xhrVehicles[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataVehicles = JSON.parse(data.currentTarget.responseText);
						var itemVehicles = document.createElement('p');
						var itemVehiclesText = document.createTextNode(dataVehicles.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagevehicles.html?id='+(i + 1));
						
						aLinkName.append(itemVehicles);
						itemVehicles.append(itemVehiclesText);
						document.getElementsByClassName('vehicles')[0].append(aLinkName);
					}
				}	
			xhrVehicles[i].send();	
			};

			var xhrStarships = [];
			for(var i = 0 ; i < data.starships.length ; i++) {
				xhrStarships.push(new XMLHttpRequest());
				xhrStarships[i].open("GET", data.starships[i], true);

				xhrStarships[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataStarships = JSON.parse(data.currentTarget.responseText);
						var itemStarships = document.createElement('p');
						var itemStarshipsText = document.createTextNode(dataStarships.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagestarships.html?id='+(i + 1));
						
						aLinkName.append(itemStarships);
						itemStarships.append(itemStarshipsText);
						document.getElementsByClassName('starships')[0].append(aLinkName);
					}
				}	
			xhrStarships[i].send();	
			};
		}

	} else if ($('div').hasClass('singlePlanetContainer')) {

		var idPlanet = window.location.href.split('?id=')[1];
		var xhrSinglePlanet = new XMLHttpRequest();
			xhrSinglePlanet.open("GET", "http://swapi.co/api/planets/" + idPlanet, true);

			xhrSinglePlanet.onreadystatechange = function() {
				if(xhrSinglePlanet.readyState == 4 && xhrSinglePlanet.status == 200) {
					var dataPlanet = JSON.parse(xhrSinglePlanet.responseText);
					populatePlanetItem(dataPlanet);
				}
				
			}
			xhrSinglePlanet.send();

		function populatePlanetItem(data) {
			document.getElementsByClassName('titleName')[0].innerHTML += data.name;
			document.getElementsByClassName('rotation_period')[0].innerHTML = data.rotation_period;
			document.getElementsByClassName('orbital_period')[0].innerHTML = data.orbital_period;
			document.getElementsByClassName('diameter')[0].innerHTML = data.diameter;
			document.getElementsByClassName('climate')[0].innerHTML = data.climate;
			document.getElementsByClassName('gravity')[0].innerHTML = data.gravity;
			document.getElementsByClassName('terrain')[0].innerHTML = data.terrain;
			document.getElementsByClassName('surface_water')[0].innerHTML = data.surface_water;
			document.getElementsByClassName('population')[0].innerHTML = data.population;
			

			var xhrResidents = [];
			for(var i = 0 ; i < data.residents.length ; i++) {
				xhrResidents.push(new XMLHttpRequest());
				xhrResidents[i].open("GET", data.residents[i], true);			

				xhrResidents[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataPlanet = JSON.parse(data.currentTarget.responseText);
						var itemResident = document.createElement('p');
						var itemResidentText = document.createTextNode(dataPlanet.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepageresident.html?id='+(i + 1));
						
						aLinkName.append(itemResident);
						itemResident.append(itemResidentText);
						document.getElementsByClassName('residents')[0].append(aLinkName);
					}
				}

			xhrResidents[i].send();				
			};
			


			var xhrFilms = [];
			for(var i = 0 ; i < data.films.length ; i++) {
				xhrFilms.push(new XMLHttpRequest());
				xhrFilms[i].open("GET", data.films[i], true);

				xhrFilms[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataFilms = JSON.parse(data.currentTarget.responseText);
						var itemFilm = document.createElement('p');
						var itemFilmText = document.createTextNode(dataFilms.title);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagefilms.html?id='+(i + 1));
						
						aLinkName.append(itemFilm);
						itemFilm.append(itemFilmText);
						document.getElementsByClassName('films')[0].append(aLinkName);
					}
				}	
			xhrFilms[i].send();	
			};


			
		}

	} else if ($('div').hasClass('singleSpeciesContainer')) {

		var idSpecie = window.location.href.split('?id=')[1];
		var xhrSingleSpecie = new XMLHttpRequest();
			xhrSingleSpecie.open("GET", "http://swapi.co/api/species/" + idSpecie, true);

			xhrSingleSpecie.onreadystatechange = function() {
				if(xhrSingleSpecie.readyState == 4 && xhrSingleSpecie.status == 200) {
					var dataSpecie = JSON.parse(xhrSingleSpecie.responseText);
					populateSpeciesItem(dataSpecie);
				}
				
			}
			xhrSingleSpecie.send();

		function populateSpeciesItem(data) {
			document.getElementsByClassName('titleName')[0].innerHTML += data.name;
			document.getElementsByClassName('classification')[0].innerHTML = data.classification;
			document.getElementsByClassName('designation')[0].innerHTML = data.designation;
			document.getElementsByClassName('average_height')[0].innerHTML = data.average_height;
			document.getElementsByClassName('skin_colors')[0].innerHTML = data.skin_colors;
			document.getElementsByClassName('hair_colors')[0].innerHTML = data.hair_colors;
			document.getElementsByClassName('eye_colors')[0].innerHTML = data.eye_colors;
			document.getElementsByClassName('average_lifespan')[0].innerHTML = data.average_lifespan;
			document.getElementsByClassName('language')[0].innerHTML = data.language;			
			


			var xhrHomeworld = [];
			for(var i = 0 ; i < data.homeworld.length ; i++) {
				xhrHomeworld.push(new XMLHttpRequest());
				xhrHomeworld[i].open("GET", data.homeworld[i], true);

				xhrHomeworld[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataHomeworld = JSON.parse(data.currentTarget.responseText);
						var itemHomeworld = document.createElement('p');
						var itemHomeworldText = document.createTextNode(dataHomeworld.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepageplanet.html?id='+(i + 1));
						
						aLinkName.append(itemHomeworld);
						itemHomeworld.append(itemHomeworldText);
						document.getElementsByClassName('homeworld')[0].append(aLinkName);
					}
				}	
			xhrHomeworld[i].send();	
			};

			var xhrResidents = [];
			for(var i = 0 ; i < data.people.length ; i++) {
				xhrResidents.push(new XMLHttpRequest());
				xhrResidents[i].open("GET", data.people[i], true);			

				xhrResidents[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataPlanet = JSON.parse(data.currentTarget.responseText);
						var itemResident = document.createElement('p');
						var itemResidentText = document.createTextNode(dataPlanet.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepageresident.html?id='+(i + 1));
						
						aLinkName.append(itemResident);
						itemResident.append(itemResidentText)
						document.getElementsByClassName('people')[0].append(aLinkName);
					}
				}

			xhrResidents[i].send();				
			};

			var xhrFilms = [];
			for(var i = 0 ; i < data.films.length ; i++) {
				xhrFilms.push(new XMLHttpRequest());
				xhrFilms[i].open("GET", data.films[i], true);

				xhrFilms[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataFilms = JSON.parse(data.currentTarget.responseText);
						var itemFilm = document.createElement('p');
						var itemFilmText = document.createTextNode(dataFilms.title);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagefilms.html?id='+(i + 1));
						
						aLinkName.append(itemFilm);
						itemFilm.append(itemFilmText);
						document.getElementsByClassName('films')[0].append(aLinkName);
					}
				}	
			xhrFilms[i].send();	
			};			
		}

	} else if ($('div').hasClass('singleFilmContainer')) {

		var idFilm = window.location.href.split('?id=')[1];
		var xhrSingleFilm = new XMLHttpRequest();
			xhrSingleFilm.open("GET", "http://swapi.co/api/films/" + idFilm, true);

			xhrSingleFilm.onreadystatechange = function() {
				if(xhrSingleFilm.readyState == 4 && xhrSingleFilm.status == 200) {
					var dataFilm = JSON.parse(xhrSingleFilm.responseText);
					populateFilmItem(dataFilm);
				}
				
			}
			xhrSingleFilm.send();

		function populateFilmItem(data) {
			document.getElementsByClassName('titleName')[0].innerHTML += data.title;
			document.getElementsByClassName('episode_id')[0].innerHTML = data.episode_id;
			document.getElementsByClassName('opening_crawl')[0].innerHTML = data.opening_crawl;
			document.getElementsByClassName('director')[0].innerHTML = data.director;
			document.getElementsByClassName('producer')[0].innerHTML = data.producer;
			document.getElementsByClassName('release_date')[0].innerHTML = data.release_date;
			
			
			var xhrResidents = [];
			for(var i = 0 ; i < data.characters.length ; i++) {
				xhrResidents.push(new XMLHttpRequest());
				xhrResidents[i].open("GET", data.characters[i], true);			

				xhrResidents[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataResident = JSON.parse(data.currentTarget.responseText);
						var itemResident = document.createElement('p');
						var itemResidentText = document.createTextNode(dataResident.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepageresident.html?id='+(i + 1));

						aLinkName.append(itemResident);
						itemResident.append(itemResidentText);
						document.getElementsByClassName('characters')[0].append(aLinkName);
					}
				}

			xhrResidents[i].send();				
			};		

			var xhrPlanets = [];
			for(var i = 0 ; i < data.planets.length ; i++) {
				xhrPlanets.push(new XMLHttpRequest());
				xhrPlanets[i].open("GET", data.planets[i], true);			

				xhrPlanets[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataPlanet = JSON.parse(data.currentTarget.responseText);
						var itemPlanet = document.createElement('p');
						var itemPlanetText = document.createTextNode(dataPlanet.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepageplanet.html?id='+(i + 1));
						
						aLinkName.append(itemPlanet);
						itemPlanet.append(itemPlanetText);
						document.getElementsByClassName('planets')[0].append(aLinkName);
					}
				}

			xhrPlanets[i].send();				
			};

			var xhrStarships = [];
			for(var i = 0 ; i < data.starships.length ; i++) {
				xhrStarships.push(new XMLHttpRequest());
				xhrStarships[i].open("GET", data.starships[i], true);			

				xhrStarships[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataStarships = JSON.parse(data.currentTarget.responseText);
						var itemStarships = document.createElement('p');
						var itemStarshipsText = document.createTextNode(dataStarships.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagestarships.html?id='+(i + 1));
						
						aLinkName.append(itemStarships);
						itemStarships.append(itemStarshipsText);
						document.getElementsByClassName('starships')[0].append(aLinkName);
					}
				}

			xhrStarships[i].send();				
			};	


			var xhrVehicles = [];
			for(var i = 0 ; i < data.vehicles.length ; i++) {
				xhrVehicles.push(new XMLHttpRequest());
				xhrVehicles[i].open("GET", data.vehicles[i], true);

				xhrVehicles[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataVehicles = JSON.parse(data.currentTarget.responseText);
						var itemVehicles = document.createElement('p');
						var itemVehiclesText = document.createTextNode(dataVehicles.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagevehicles.html?id='+(i + 1));
						
						aLinkName.append(itemVehicles);
						itemVehicles.append(itemVehiclesText);
						document.getElementsByClassName('vehicles')[0].append(aLinkName);
					}
				}	
			xhrVehicles[i].send();	
			};

			var xhrSpecies = [];
			for(var i = 0 ; i < data.species.length ; i++) {
				xhrSpecies.push(new XMLHttpRequest());
				xhrSpecies[i].open("GET", data.species[i], true);

				xhrSpecies[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataSpecies = JSON.parse(data.currentTarget.responseText);
						var itemSpecies = document.createElement('p');
						var itemSpeciesText = document.createTextNode(dataSpecies.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagespecies.html?id='+(i + 1));
						
						aLinkName.append(itemSpecies);
						itemSpecies.append(itemSpeciesText);
						document.getElementsByClassName('species')[0].append(aLinkName);
					}
				}	
			xhrSpecies[i].send();	
			};			
		}

	} else if ($('div').hasClass('singleStarshipContainer')) {

		var idStarship = window.location.href.split('?id=')[1];
		var xhrSingleStarships = new XMLHttpRequest();
			xhrSingleStarships.open("GET", "http://swapi.co/api/starships/" + idStarship, true);

			xhrSingleStarships.onreadystatechange = function() {
				if(xhrSingleStarships.readyState == 4 && xhrSingleStarships.status == 200) {
					var dataSpecie = JSON.parse(xhrSingleStarships.responseText);
					populateStarshipsItem(dataSpecie);
				}
				
			}
			xhrSingleStarships.send();

		function populateStarshipsItem(data) {
			document.getElementsByClassName('titleName')[0].innerHTML += data.name;
			document.getElementsByClassName('manufacturer')[0].innerHTML = data.manufacturer;
			document.getElementsByClassName('cost_in_credits')[0].innerHTML = data.cost_in_credits;
			document.getElementsByClassName('length')[0].innerHTML = data.length;
			document.getElementsByClassName('release_date')[0].innerHTML = data.release_date;
			document.getElementsByClassName('crew')[0].innerHTML = data.crew;
			document.getElementsByClassName('passengers')[0].innerHTML = data.passengers;
			document.getElementsByClassName('cargo_capacity')[0].innerHTML = data.cargo_capacity;
			document.getElementsByClassName('hyperdrive_rating')[0].innerHTML = data.hyperdrive_rating;
			document.getElementsByClassName('MGLT')[0].innerHTML = data.MGLT;
			document.getElementsByClassName('starship_class')[0].innerHTML = data.starship_class;
			
			var xhrResidents = [];
			for(var i = 0 ; i < data.pilots.length ; i++) {
				xhrResidents.push(new XMLHttpRequest());
				xhrResidents[i].open("GET", data.pilots[i], true);			

				xhrResidents[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataPlanet = JSON.parse(data.currentTarget.responseText);
						var itemResident = document.createElement('p');
						var itemResidentText = document.createTextNode(dataPlanet.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepageresident.html?id='+(i + 1));
						
						aLinkName.append(itemResident);
						itemResident.append(itemResidentText)
						document.getElementsByClassName('people')[0].append(aLinkName);
					}
				}

			xhrResidents[i].send();
				
			};
			


			var xhrFilms = [];
			for(var i = 0 ; i < data.films.length ; i++) {
				xhrFilms.push(new XMLHttpRequest());
				xhrFilms[i].open("GET", data.films[i], true);

				xhrFilms[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataFilms = JSON.parse(data.currentTarget.responseText);
						var itemFilm = document.createElement('p');
						var itemFilmText = document.createTextNode(dataFilms.title);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagefilms.html?id='+(i + 1));
						
						aLinkName.append(itemFilm);
						itemFilm.append(itemFilmText)
						document.getElementsByClassName('films')[0].append(aLinkName);
					}
				}	
			xhrFilms[i].send();	
			};			
		}

	} else if ($('div').hasClass('singleVehiclesContainer')) {

		var idVehicle = window.location.href.split('?id=')[1];
		var xhrSingleVehicle = new XMLHttpRequest();
			xhrSingleVehicle.open("GET", "http://swapi.co/api/vehicles/" + idVehicle, true);

			xhrSingleVehicle.onreadystatechange = function() {
				if(xhrSingleVehicle.readyState == 4 && xhrSingleVehicle.status == 200) {
					var dataVehicle = JSON.parse(xhrSingleVehicle.responseText);
					populateVehiclesItem(dataVehicle);
				}
				
			}
			xhrSingleVehicle.send();

		function populateVehiclesItem(data) {
			document.getElementsByClassName('titleName')[0].innerHTML += data.name;
			document.getElementsByClassName('manufacturer')[0].innerHTML = data.manufacturer;
			document.getElementsByClassName('cost_in_credits')[0].innerHTML = data.cost_in_credits;
			document.getElementsByClassName('length')[0].innerHTML = data.length;
			document.getElementsByClassName('release_date')[0].innerHTML = data.release_date;
			document.getElementsByClassName('crew')[0].innerHTML = data.crew;
			document.getElementsByClassName('passengers')[0].innerHTML = data.passengers;
			document.getElementsByClassName('cargo_capacity')[0].innerHTML = data.cargo_capacity;
			document.getElementsByClassName('hyperdrive_rating')[0].innerHTML = data.hyperdrive_rating;
			document.getElementsByClassName('MGLT')[0].innerHTML = data.MGLT;
			document.getElementsByClassName('starship_class')[0].innerHTML = data.starship_class;
			
			var xhrResidents = [];
			for(var i = 0 ; i < data.pilots.length ; i++) {
				xhrResidents.push(new XMLHttpRequest());
				xhrResidents[i].open("GET", data.pilots[i], true);			

				xhrResidents[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataPlanet = JSON.parse(data.currentTarget.responseText);
						var itemResident = document.createElement('p');
						var itemResidentText = document.createTextNode(dataPlanet.name);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepageresident.html?id='+(i + 1));
						
						aLinkName.append(itemResident);
						itemResident.append(itemResidentText)
						document.getElementsByClassName('people')[0].append(aLinkName);
					}
				}

			xhrResidents[i].send();
				
			};
			


			var xhrFilms = [];
			for(var i = 0 ; i < data.films.length ; i++) {
				xhrFilms.push(new XMLHttpRequest());
				xhrFilms[i].open("GET", data.films[i], true);

				xhrFilms[i].onreadystatechange = function(data) {
					if(data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
						var dataFilms = JSON.parse(data.currentTarget.responseText);
						var itemFilm = document.createElement('p');
						var itemFilmText = document.createTextNode(dataFilms.title);

						var aLinkName = document.createElement('a');
						aLinkName.setAttribute('class', 'linkName');
						aLinkName.setAttribute('href', 'singlepagefilms.html?id='+(i + 1));
						
						aLinkName.append(itemFilm);
						itemFilm.append(itemFilmText)
						document.getElementsByClassName('films')[0].append(aLinkName);
					}
				}	
			xhrFilms[i].send();	
			};			
		}

	}
})();