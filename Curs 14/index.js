(function () {
	

	var items = [
		{
			"firstName" : "Ion" ,
			"lastName" : "Popescu" ,
			"age" : "32" ,
			"occupation" : "patriot", 
			"nationality" : "romanian" 
		}, 
		{
			"firstName" : "Ionut" ,
			"lastName" : "Popescg" ,
			"age" : "28" ,
			"occupation" : "patriot", 
			"nationality" : "gipsy" 
		},
		{
			"firstName" : "Ionela" ,
			"lastName" : "Popesch" ,
			"age" : "20" ,
			"occupation" : "patriot", 
			"nationality" : "english" 
		},
		{
			"firstName" : "Ionica" ,
			"lastName" : "Popesci" ,
			"age" : "45" ,
			"occupation" : "patriot", 
			"nationality" : "indian" 
		},
		{
			"firstName" : "Ionel" ,
			"lastName" : "Popesca" ,
			"age" : "34" ,
			"occupation" : "patriot", 
			"nationality" : "american" 
		}
	];

// <div class="item col-lg-4">
// 	<h3 class="name">Andrei</h3>
// 	<h3 class="lastName">Mario</h3>
// 	<p class="age">32</p>
// 	<p class="occupation">banker</p>
// 	<p class="nationality">romanian</p>
// </div>


	function renderItems() {
		for (var i = 0 ; i < items.length ; i++) {

			// create <div class="item"></div>			
			var wrapperDiv = document.createElement('div');
			wrapperDiv.setAttribute('class', 'item');
			console.log(wrapperDiv);

			// create <h3 class="name">Andrei</h3>
			var firstNameElement = document.createElement('h3');
			firstNameElement.setAttribute('class', 'firstName');
			var firstNameText = document.createTextNode(items[i].firstName);
			firstNameElement.append(firstNameText);
			console.log(firstNameElement);

			// create <h3 class="lastName">Mario</h3>
			var lastNameElement = document.createElement('h3');
			lastNameElement.setAttribute('class', 'lastName');
			var lastNameText = document.createTextNode(items[i].lastName);
			lastNameElement.append(lastNameText);
			console.log(lastNameElement);

			// <p class="age">32</p>
			var ageElement = document.createElement('p');
			ageElement.setAttribute('class', 'age');
			var ageText = document.createTextNode(items[i].age);
			ageElement.append(ageText);
			console.log(ageElement);

			// <p class="occupation">banker</p>
			var occupationElement = document.createElement('p');
			occupationElement.setAttribute('class', 'occupation');
			var occupationText = document.createTextNode(items[i].occupation);
			occupationElement.append(occupationText);
			console.log(occupationElement);

			// <p class="nationality">romanian</p>
			var nationalityElement = document.createElement('p');
			nationalityElement.setAttribute('class', 'nationality');
			var nationalityText = document.createTextNode(items[i].nationality);
			nationalityElement.append(nationalityText);
			console.log(nationalityElement);

			wrapperDiv.append(firstNameElement);
			wrapperDiv.append(lastNameElement);
			wrapperDiv.append(ageElement);
			wrapperDiv.append(occupationElement);
			wrapperDiv.append(nationalityElement);
			document.getElementsByClassName('itemContainer')[0].append(wrapperDiv);


		}
		
	}
	function renderItem(item) {
		// create <div class="item"></div>			
			var wrapperDiv = document.createElement('div');
			wrapperDiv.setAttribute('class', 'item');
			console.log(wrapperDiv);

			// create <h3 class="name">Andrei</h3>
			var firstNameElement = document.createElement('h3');
			firstNameElement.setAttribute('class', 'firstName');
			var firstNameText = document.createTextNode(item.firstName);
			firstNameElement.append(firstNameText);
			console.log(firstNameElement);

			// create <h3 class="lastName">Mario</h3>
			var lastNameElement = document.createElement('h3');
			lastNameElement.setAttribute('class', 'lastName');
			var lastNameText = document.createTextNode(item.lastName);
			lastNameElement.append(lastNameText);
			console.log(lastNameElement);

			// <p class="age">32</p>
			var ageElement = document.createElement('p');
			ageElement.setAttribute('class', 'age');
			var ageText = document.createTextNode(item.age);
			ageElement.append(ageText);
			console.log(ageElement);

			// <p class="occupation">banker</p>
			var occupationElement = document.createElement('p');
			occupationElement.setAttribute('class', 'occupation');
			var occupationText = document.createTextNode(item.occupation);
			occupationElement.append(occupationText);
			console.log(occupationElement);

			// <p class="nationality">romanian</p>
			var nationalityElement = document.createElement('p');
			nationalityElement.setAttribute('class', 'nationality');
			var nationalityText = document.createTextNode(item.nationality);
			nationalityElement.append(nationalityText);
			console.log(nationalityElement);

			wrapperDiv.append(firstNameElement);
			wrapperDiv.append(lastNameElement);
			wrapperDiv.append(ageElement);
			wrapperDiv.append(occupationElement);
			wrapperDiv.append(nationalityElement);
			document.getElementsByClassName('itemContainer')[0].append(wrapperDiv);
	}

	renderItems();

	// for (var i = 0; i < items.length; i++) {
	// 	renderItem(items[i]);
	// }
	
		

	document.getElementById('createItem').addEventListener('click', function() {
		
			if( document.getElementById('firstName').value == '' ||
				document.getElementById('lastName').value == '' ||
				document.getElementById('age').value == '' ||
				document.getElementById('occupation').value == '' ||
				document.getElementById('nationality').value == '') {
				alert("Nu ai completat toate campurile!");
			return;
		}
		
			var dataObject = {
				"firstName" : document.getElementById('firstName').value,
				"lastName" : document.getElementById('lastName').value,
				"age" : document.getElementById('age').value,
				"occupation" : document.getElementById('occupation').value,
				"nationality" : document.getElementById('nationality').value
		};
		
			renderItem(dataObject);
				document.getElementById('firstName').value = '';
				document.getElementById('lastName').value = '';
				document.getElementById('age').value = '';
				document.getElementById('occupation').value = '';
				document.getElementById('nationality').value = '';
	});

	document.getElementById('itemRemove').addEventListener('click', function() {
		var number = document.getElementById('itemNumber').value;
		if(parseInt( number )) {
			if ( number < 1 || 
				 number > document.getElementsByClassName('item').length) {
			alert('Unexisting number!');
			return;
			} else {
			document.getElementsByClassName('item')[number - 1].remove();
			} 
		} else {
			alert('Not a number!');
			return;
		}
	});

})();