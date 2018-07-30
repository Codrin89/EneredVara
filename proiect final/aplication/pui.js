(function() {

     function checkLogin() {
       
            
        if(window.localStorage.getItem("loggedUser")) {
            console.log(window.localStorage.getItem('loggedUser'))
            $('#loginB').hide();
            $('#liveUser').show();
            $('#logoutB').show();
            $('#liveUser').html(window.localStorage.getItem("loggedUserName"));
            $('#logoutB').on('click', function() {
                window.localStorage.removeItem("loggedUser");
                window.localStorage.removeItem("loggedUserName");
                
            });
        } else {
            $('#loginB').show();
            $('#liveUser').hide();
            $('#logoutB').hide();
           
        }
       

    }

    checkLogin();        



	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost/api/produsepui", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = JSON.parse(xhr.responseText);
			createProducts(response);
			console.log(xhr.response);
			
		}
	}
	xhr.send();


	function createProducts(value) {
        for(var i = 0; i < value.length ; i++) {
            var object = $('<div class="card" style="width: 30rem;"><img class="card-img-top imag" src="'+value[i].photo+'" alt="Card image cap"><div class="card-body"><h4 class="card-title-nume">'+value[i].nume+'</h4><p class="card-text">'+value[i].ingrediente+'</p><h4 class="card-title">'+value[i].pret+' lei</h4><p id="ident"></p><a href="#" class="btn btn-primary detalii" data="'+value[i].id+'" >Detalii</a><a href="#" class="btn btn-success comanda" data-id="'+value[i].id+'" >Comanda</a></div></div>');
            $('.midle').append(object);
        }

        $('.detalii').on('click', function() {
            window.location.href = 'detail.html?id=' + this.getAttribute('data');
        });
        
        $('#searchBar').on('keyup', function(e) {
            if(e.which == 13) {
                console.log("The search is")
                window.location.href = 'search.html?query=' + $('#searchBar').val();
            }

        }) 

        $('.comanda').click(function() {
            var code = this.getAttribute('data-id');
            var saveObject = {
                "userID": window.localStorage.getItem("loggedUser"),
                "productID": code
            }

            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://localhost/api/saveListing', true);
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    alert("Produsul a fost salvat in lista dumneavoastra.")
                }
            }

            xhr.send(JSON.stringify(saveObject));

        });

    }
 
 //Logo
    $("#logo").click(function() {
        window.location.href = "main.html";
    })       
	
//Home
    $("#home").click(function() {
        window.location.href = 'main.html';
    })

//Preparate_porc
    $("#porc").click(function() {
        window.location.href = 'pork.html';
    })

//Preparate_pui
    $("#pui").click(function() {
        window.location.href = 'pui.html';
    })

//Preprate_vitel
    $("#vitel").click(function() {
        window.location.href = 'vita.html';
    })

//Fructe_mare
    $("#fructemare").click(function() {
        window.location.href = 'fructemare.html';
    })

//Garnituri_salate
    $("#garnituri").click(function() {
        window.location.href = 'garnituri.html';
    })

//Desert
    $("#desert").click(function() {
        window.location.href = 'desert.html';
    })

//Bauturi
    $("#bauturi").click(function() {
        window.location.href = 'bauturi.html';
    })

//Contact
    $("#contact").click(function() {
        window.location.href = 'contact.html';
    })

//Despre
    $("#despre").click(function() {
        window.location.href = 'despre.html';
    })

//Login
      $("#loginB").click(function() {
         window.location.href = 'login.php';
    })

//SingUp
     $("#logoutB").click(function() {
        window.location.href = 'main.html';
    })

//Cart
     $("#CART").click(function() {
        window.location.href = 'cos.html';
    })     


	

	

       


})();