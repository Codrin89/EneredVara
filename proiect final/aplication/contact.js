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



        
$('#searchBar').on('keyup', function(e) {
    if(e.which == 13) {
        console.log("The search is")
        window.location.href = 'search.html?query=' + $('#searchBar').val();
    }

}) 

        

//Logo
    $("#logo").click(function() {
        window.location.href = "main.html";
    })  
	
//Home
    $("#home").click(function() {
        window.location.href = 'main.html';
    })

//Preparate
    $("#Prep").click(function() {
        window.location.href = 'preparate.html';
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
        window.location.href = 'contact.html';
    })

//Cart
     $("#CART").click(function() {
        window.location.href = 'cos.html';
    })





	
			

			
	

	

       


})();