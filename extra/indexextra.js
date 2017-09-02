(function() {

	var myCars = [
	{
		"marca" : "Volkswagen",
		"model" : "Golf",
		"anulFabricatiei" : "2007",
		"putere" : "140CP",
		"pret" : "4500 Euro"
	},
	{
		"marca" : "Volkswagen",
		"model" : "Passat",
		"anulFabricatiei" : "2012",
		"putere" : "170CP",
		"pret" : "11450 Euro"
	},
	{
		"marca" : "Skoda",
		"model" : "Superb",
		"anulFabricatiei" : "2010",
		"putere" : "140CP",
		"pret" : "10500 Euro"
	},
	{
		"marca" : "Mercedes",
		"model" : "S320",
		"anulFabricatiei" : "2012",
		"putere" : "250CP",
		"pret" : "18300 Euro"
	}
	];

	/* <div class="item">
	<h3>BMWM</h3>
	<h3>F10</h3>
	<p>2013</p>
	<p>270CP</p>
	<p>15500Euro</p>
	</div> */

	function showMyCars() {
		for(i = 0; i < myCars.length; i++) {
			// Creeaza divul //
			var divulMeu = document.createElement('div');
			divulMeu.setAttribute('class', 'item');
			console.log(divulMeu);
		}
	}

})