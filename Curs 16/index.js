(function () {
	//REQUEST TO SERVER
	var xhr = new XMLHttpRequest();
	xhr.open("GET",'http://swapi.co/api/people/',true);
	
	xhr.onreadystatechange = function() {//Call a function when the  changes.
		if(xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText).results;
			createPersonItem(data);
			}
		
		}

	xhr.send();
	
	function createPersonItem(value) {
		for(var i= 0; i<value.length ; i++) {
			
		var divItem = document.createElement('div');
			divItem.setAttribute('class',' personItem col-md-4 text-center');
			

			var nameItem = document.createElement('h3');
			nameItem.setAttribute('class','Name');
			var nameItemText = document.createTextNode(value[i].name);
			nameItem.append(nameItemText);

			var GeneralInfoItem = document.createElement('h6');
			var generalInfoText = document.createTextNode("General info");
			GeneralInfoItem.append(generalInfoText);

			var ulItem = document.createElement('ul')

			var heightItem = document.createElement('li');
			heightItem.setAttribute('class','height');
			var heightItemText = document.createTextNode(value[i].height);
			heightItem.append(heightItemText);

			var massItem = document.createElement('li');
			massItem.setAttribute('class','mass');
			var massItemText = document.createTextNode(value[i].mass);
			massItem.append(massItemText);

			var hair_colorItem = document.createElement('li');
			hair_colorItem.setAttribute('class','hair_color');
			var hair_colorItemText = document.createTextNode(value[i].hair_color);
			hair_colorItem.append(hair_colorItemText);


			var skin_colorItem = document.createElement('li');
			skin_colorItem.setAttribute('class','skin_color');
			var skin_colorItemText = document.createTextNode(value[i].skin_color);
			skin_colorItem.append(skin_colorItemText);

			var eye_colorItem = document.createElement('li');
			eye_colorItem.setAttribute('class','eye_color');
			var eye_colorItemText = document.createTextNode(value[i].eye_color);
			eye_colorItem.append(eye_colorItemText);

			var birth_yearItem = document.createElement('li');
			birth_yearItem.setAttribute('class','birth_year');
			var birth_yearItemText = document.createTextNode(value[i].birth_year);
			birth_yearItem.append(birth_yearItemText);

			var genderItem = document.createElement('li');
			genderItem.setAttribute('class','gender');
			var genderItemText = document.createTextNode(value[i].gender);
			genderItem.append(genderItemText);
			
			var homeworldItem = document.createElement('li');
			homeworldItem.setAttribute('class','homeworld');
			var homeworldItemText = document.createTextNode(value[i].homeworld);
			homeworldItem.append(homeworldItemText);

			divItem.append(nameItem)
			divItem.append(GeneralInfoItem)
			ulItem.append(heightItem)
			ulItem.append(massItem)
			ulItem.append(hair_colorItem)
			ulItem.append(skin_colorItem)
			ulItem.append(eye_colorItem)
			ulItem.append(birth_yearItem)
			ulItem.append(genderItem)
			ulItem.append(homeworldItem)
			divItem.append(ulItem)

			document.getElementsByClassName("personContainer")[0].append(divItem);





			console.log(value[i]);



		}
	}

})();