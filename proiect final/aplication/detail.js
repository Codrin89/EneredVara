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

	var single = {
		"ID": window.location.href.split('id=')[1]
	}
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost/api/getSingleListing', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = JSON.parse(xhr.responseText);
			createSingleListing(response);
		}
	}
	xhr.send(JSON.stringify(single));

	function createSingleListing(value) {
        $('#image').attr('src', value.photo);
		$('#title').html(value.nume);
		$('#ingrediente').html(value.ingrediente);
		$('#alergeni').html(value.alergieni);
		$('#gramaj').html(value.gramaj);
		$('#pret').html(value.pret + " lei");
        $('.comanda')[0].setAttribute("dataid", value.id);
		
	}

   

    function actionB() {
       
        $('#searchBar').on('keyup', function(e) {
            if(e.which == 13) {
                console.log("The search is")
                window.location.href = 'search.html?query=' + $('#searchBar').val();
            }

        }) 

        $('.comanda').click(function() {
            var code = this.getAttribute("dataid");
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

    actionB();

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
        window.location.href = 'login.html';
    })

//SingUp
     $("#logoutB").click(function() {
        window.location.href = 'datail.html';
    })

//Cart
     $("#CART").click(function() {
        window.location.href = 'cos.html';
    })     



   


    




   
 

    
         
    


	
	





	
			

			
	

	

       


})();