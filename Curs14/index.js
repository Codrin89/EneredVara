(function() {

	var items = [
		{
			"firstName":"Ion",
			"lastName":"Popescu",
			"age":"50",
			"occupation":"plumber",
			"nationality":"romanian"
		},
		{
			"firstName":"Vasilica",
			"lastName":"Popescu",
			"age":"32",
			"occupation":"clerk",
			"nationality":"romanian"
		},
		{
			"firstName":"Andrei",
			"lastName":"Vasilescu",
			"age":"24",
			"occupation":"fisherman",
			"nationality":"romanian"
		},
		{
			"firstName":"James",
			"lastName":"Frank",
			"age":"28",
			"occupation":"lawyer",
			"nationality":"british"
		},
		{
			"firstName":"Kevin",
			"lastName":"Smith",
			"age":"44",
			"occupation":"broker",
			"nationality":"american"
		}
	];


	// <div class="item">
	// 	<h3 class="name">Andrei</h3>
	// 	<h3 class="lastname">Popescu</h3>
	// 	<p class="age">52</p>
	// 	<p class="occupation">broker</p>
	// 	<p class="nationality">romanian</p>
	// </div>
	function renderItems() {
		for(var i = 0 ; i < items.length ; i++) {
		//create <div class="item"></div>
		var wrapperDiv = document.createElement('div');
		wrapperDiv.setAttribute('class', 'item');
		console.log(wrapperDiv);

		//<h3 class="name">Andrei</h3>
		var nameElement = document.createElement('h3');
		nameElement.setAttribute('class','name');
		var nameText = document.createTextNode(items[i].firstName);
		nameElement.append(nameText);
		console.log(nameElement);

		//<h3 class="lastname">Popescu</h3>
		var lastnameElement = document.createElement('h3');
		lastnameElement.setAttribute('class','lastname');
		var lastnameText = document.createTextNode(items[i].lastName);
		lastnameElement.append(lastnameText);
		console.log(lastnameElement);

		//<p class="age">52</p>
		var ageElement = document.createElement('p');
		ageElement.setAttribute('class','age');
		var ageText = document.createTextNode(items[i].age);
		ageElement.append(ageText);
		console.log(ageElement);

		//<p class="occupation">broker</p>
		var occupationElement = document.createElement('p');
		occupationElement.setAttribute('class','occupation');
		var occupationText = document.createTextNode(items[i].occupation);
		occupationElement.append(occupationText);
		console.log(occupationElement);

		//<p class="nationality">romanian</p>
		var nationalityElement = document.createElement('p');
		nationalityElement.setAttribute('class','nationality');
		var nationalityText = document.createTextNode(items[i].nationality);
		nationalityElement.append(nationalityText);
		console.log(nationalityElement);

		wrapperDiv.append(nameElement);
		wrapperDiv.append(lastnameElement);
		wrapperDiv.append(ageElement);
		wrapperDiv.append(occupationElement);
		wrapperDiv.append(nationalityElement);
		document.getElementsByClassName('itemContainer')[0].append(wrapperDiv);
		}
	}

	function renderItem(item) {
		//create <div class="item"></div>
		var wrapperDiv = document.createElement('div');
		wrapperDiv.setAttribute('class', 'item');
		console.log(wrapperDiv);

		//<h3 class="name">Andrei</h3>
		var nameElement = document.createElement('h3');
		nameElement.setAttribute('class','name');
		var nameText = document.createTextNode(item.firstName);
		nameElement.append(nameText);
		console.log(nameElement);

		//<h3 class="lastname">Popescu</h3>
		var lastnameElement = document.createElement('h3');
		lastnameElement.setAttribute('class','lastname');
		var lastnameText = document.createTextNode(item.lastName);
		lastnameElement.append(lastnameText);
		console.log(lastnameElement);

		//<p class="age">52</p>
		var ageElement = document.createElement('p');
		ageElement.setAttribute('class','age');
		var ageText = document.createTextNode(item.age);
		ageElement.append(ageText);
		console.log(ageElement);

		//<p class="occupation">broker</p>
		var occupationElement = document.createElement('p');
		occupationElement.setAttribute('class','occupation');
		var occupationText = document.createTextNode(item.occupation);
		occupationElement.append(occupationText);
		console.log(occupationElement);

		//<p class="nationality">romanian</p>
		var nationalityElement = document.createElement('p');
		nationalityElement.setAttribute('class','nationality');
		var nationalityText = document.createTextNode(item.nationality);
		nationalityElement.append(nationalityText);
		console.log(nationalityElement);

		wrapperDiv.append(nameElement);
		wrapperDiv.append(lastnameElement);
		wrapperDiv.append(ageElement);
		wrapperDiv.append(occupationElement);
		wrapperDiv.append(nationalityElement);
		document.getElementsByClassName('itemContainer')[0].append(wrapperDiv);
	}
		
	renderItems();

	// for(var i = 0 ; i < items.length ; i++) {
	// 	renderItem(items[i]);
	// }
	document.getElementById('createItem').addEventListener('click', function() {
		if(document.getElementById('name').value == '' ||
			document.getElementById('lastname').value == '' ||
			document.getElementById('age').value == '' ||
			document.getElementById('occupation').value == '' ||
			document.getElementById('nationality').value == '') {
			alert('Nu ai completat toate campurile');
			return;
		}
			
		var dataObject = {
			"firstName": document.getElementById('name').value,
			"lastName": document.getElementById('lastname').value,
			"age": document.getElementById('age').value,
			"occupation": document.getElementById('occupation').value,
			"nationality": document.getElementById('nationality').value
		};
		renderItem(dataObject);
		document.getElementById('name').value = '';
		document.getElementById('lastname').value = '';
		document.getElementById('age').value = '';
		document.getElementById('occupation').value = '';
		document.getElementById('nationality').value = '';
	});

	document.getElementById('itemRemove').addEventListener('click', function() {
		var number = document.getElementById('itemNumber').value;
		if(parseInt(number)) {
			if(number < 1 || 
				number > document.getElementsByClassName('item').length) {
				alert('Number not good!');
			return;
			} else {
				document.getElementsByClassName('item')[number - 1].remove();
			}
		} else {
			alert('Not a number');
		}
		});

})();