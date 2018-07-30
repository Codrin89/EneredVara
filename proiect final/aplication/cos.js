(function() { 

function getLatestListings() {
        var sub = {
			"theID" : window.localStorage.getItem("loggedUser")
		};

		var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost/api/savedListings', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
				createNewListings(response);
            s}
		}

		xhr.send(JSON.stringify(sub));
	}

	getLatestListings();

    
    
function createNewListings(data) {
	var xhr = new XMLHttpRequest();
	    xhr.open("GET", "http://localhost/api/getIDproduct", true);
	    xhr.onreadystatechange = function() {
		    if (xhr.readyState == 4 && xhr.status == 200) {
			    var response = JSON.parse(xhr.responseText);
			    idlistings(response);
                console.log(xhr.response);
			}
    }

    xhr.send();

	function idlistings(info) {
		for (var i = 0; i < data.length && info.length; i++) {
			var objectListing = $('<tr><td data-th="Produs"><div class="row"><div class="col-sm-2 hidden-xs"><img src="'+data[i].photo+'" alt="..." class="img-responsive"/></div><div class="col-sm-10"><h4 class="nomargin">'+data[i].nume+'</h4><p>'+data[i].ingrediente+'</p></div></div></td><td data-th="Pret">'+data[i].pret+' lei</td><td data-th="Subtotal" class="text-center subPrice" price-id="'+data[i].pret+'">'+data[i].pret+' lei</td><td class="actions" data-th=""><button class="btn btn-info btn-sm refreshB" ><i class="fa fa-refresh" ></i></button><button class="btn btn-danger btn-sm deleteB"  id = "deleteOne" data-id="'+data[i].id+'" idpro="'+info[i].id+'" ><i  class="fa fa-trash-o"></i></button></td></tr>');
			$('.cosP').append(objectListing);
		}

        $(".deleteB").click(function () {
    	    var idpro = this.getAttribute("data-id");
    	    var idcos = this.getAttribute("idpro");
            var delID = {
     		    "idU" : window.localStorage.getItem("loggedUser"),
     		    "idP" : idpro,
                "idC" : idcos
     	    } 


     	    var xhr = new XMLHttpRequest();
     	    xhr.open("POST", "http://localhost/api/deleteProduct", true);
     	    xhr.onreadystatechange = function() {
     	    	if(xhr.readyState == 4 && xhr.status == 200) {
     			    alert("Produsul a fost sters din lista. Apasati butonul de refresh pentru a reimprospata pagina.");
                }
     	    }

     	    xhr.send(JSON.stringify(delID));
        }) 


		$(".refreshB").click(function() {
     	    window.location.href = "cos.html";
        })
        
        function total() {
            var totalsume = 0;
            var elements = $(".subPrice");

            for (var i = 0; i < elements.length; i++) {
                var pret =  elements[i].getAttribute("price-id");
                var newPrice = +pret;
                totalsume += newPrice;
            }

            $(".totalPrice").append("Total: "+totalsume+" lei");
            console.log(totalsume);
		} 

		total();

    }

}
    


//Home
    $(".btn-warning").click(function() {
        window.location.href = 'main.html';
    })

// Make comande
    $(".comand").click(function() {
        alert("Comanda dumneavoastra a fost preluata. Va multumim pentru ca ati ales produsele noastre!");
    })


     


})();