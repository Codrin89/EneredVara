(function() {

    //REQUEST TO SERVER
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://swapi.co/api/people/', true);

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

        var height = document.createElement('li');
        height.setAttribute('class', 'height');
        var heightText = document.createTextNode(value[i].height)
        height.append(heightText);

        var mass = document.createElement('li');
        mass.setAttribute('class', 'mass');
        var massText = document.createTextNode(value[i].mass)
        mass.append(massText);

        var hair_color = document.createElement('li');
        hair_color.setAttribute('class', 'hair_color');
        var hair_colorText = document.createTextNode(value[i].hair_color)
        hair_color.append(hair_colorText);

        var skin_color = document.createElement('li');
        skin_color.setAttribute('class', 'skin_color');
        var skin_colorText = document.createTextNode(value[i].skin_color)
        skin_color.append(skin_colorText);

        var eye_color = document.createElement('li');
        eye_color.setAttribute('class', 'eye_color');
        var eye_colorText = document.createTextNode(value[i].eye_color)
        eye_color.append(eye_colorText);

        var birth_year = document.createElement('li');
        birth_year.setAttribute('class', 'birth_year');
        var birth_yearText = document.createTextNode(value[i].birth_year)
        birth_year.append(birth_yearText);

        var gender = document.createElement('li');
        gender.setAttribute('class', 'gender');
        var genderText = document.createTextNode(value[i].gender)
        gender.append(genderText);

        var homeworld = document.createElement('li');
        homeworld.setAttribute('class', 'homeworld');
        var homeworldText = document.createTextNode(value[i].homeworld)
        homeworld.append(homeworldText);

        divItem.append(nameItem);
        divItem.append(Generalinfoitem);
        ulItem.append(height);
        ulItem.append(mass);
        ulItem.append(hair_color);
        ulItem.append(skin_color);
        ulItem.append(eye_color);
        ulItem.append(birth_year);
        ulItem.append(gender);
        ulItem.append(homeworld);
        divItem.append(ulItem);
        document.getElementsByClassName("personContainer")[0].append(divItem);




    	
    }  
    	}

   
})();