(function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://swapi.co/api/people", true);

	xhr.onreadystatechange = function() {
	   if(xhr.readyState == 4 && xhr.status == 200) {
	   	 var data = JSON.parse(xhr.responseText).results;
	   	 createPersonItem(data);
	   	
	   }
     }
     xhr.send();
    
     function createPersonItem(value){
     	for(var i = 0 ; i < value.length ; i++) {
     		var divItem = document.createElement("div");
     		divItem.setAttribute("class", "personItem col-md-4 text-center");

     		var nameItem = document.createElement("h3");
     		nameItem.setAttribute("class", "name");
     		var nameItemText = document.createTextNode(value[i].name);
     		nameItem.appendChild(nameItemText);

     		var Generalinfoitem = document.createElement("h6");
     		var generalinfoText = document.createTextNode("General info")
     		Generalinfoitem.appendChild(generalinfoText);
            


               var ulItem = document.createElement('ul');


     		var heightItem = document.createElement("li");
     		heightItem.setAttribute("class", "height");
     		var heightItemText = document.createTextNode(value[i].height);
     		heightItem.appendChild(heightItemText);

     		var massItem = document.createElement("li");
     		massItem.setAttribute("class", "mass");
     		var massItemText = document.createTextNode(value[i].mass);
     		massItem.appendChild(massItemText);

     		var hair_colorItem = document.createElement("li");
     		hair_colorItem.setAttribute("class", "hair_color");
     		var hair_colorItemText = document.createTextNode(value[i].hair_color);
     		hair_colorItem.appendChild(hair_colorItemText);

     		var skin_colorItem = document.createElement("li");
     		skin_colorItem.setAttribute("class", "skin_color");
     		var skin_colorItemText = document.createTextNode(value[i].skin_color);
     		skin_colorItem.appendChild(skin_colorItemText);

     		var eye_colorItem = document.createElement("li");
     		eye_colorItem.setAttribute("class", "eye_color");
     		var eye_colorItemText = document.createTextNode(value[i].eye_color);
     		eye_colorItem.appendChild(eye_colorItemText);

     		var birth_yearItem = document.createElement("li");
     		birth_yearItem.setAttribute("class", "birth_year");
     		var birth_yearItemText = document.createTextNode(value[i].birth_year);
     		birth_yearItem.appendChild(birth_yearItemText);

     		var genderItem = document.createElement("li");
     		genderItem.setAttribute("class", "gender");
     		var genderItemText = document.createTextNode(value[i].gender);
     		genderItem.appendChild(genderItemText);

     		var homeworldItem = document.createElement("li");
     		homeworldItem.setAttribute("class", "height");
     		var homeworldItemText = document.createTextNode(value[i].homeworld);
     		homeworldItem.appendChild(homeworldItemText);


     		divItem.appendChild(nameItem);
     		divItem.appendChild(Generalinfoitem);
     		ulItem.appendChild(heightItem);
     		ulItem.appendChild(massItem);
     		ulItem.appendChild(hair_colorItem);
     		ulItem.appendChild(skin_colorItem);
     		ulItem.appendChild(eye_colorItem);
     		ulItem.appendChild(birth_yearItem);
     		ulItem.appendChild(genderItem);
     		ulItem.appendChild(homeworldItem);
     		divItem.appendChild(ulItem);


     		document.getElementsByClassName("personContainer")[0].appendChild(divItem);


     		console.log(value[i]);

     	}
     }
})();