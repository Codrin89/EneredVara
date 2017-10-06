(function() {

     var database = [
         {
         	"username": "Beniamin",
         	"password" : "beniamin321"
         },
         {
         	"username": "Marian",
         	"password" : "fdhgh"
         },
         {
         	"username": "Eva",
         	"password" : "zdfh"
         },
         {
         	"username": "Andreea",
         	"password" : "adddfvjo"
         }
     ];

        document.getElementById('login-button').addEventListener('click',function() {

        var user = 'Beniamin';
        var pass = 'beniamin321';


        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;


       // if(user == username) {
       // 	if(pas == password) {
       //        alert('Welcome' + username);
       //        document.getElementById('error-label').innerHTML = 'Welcome';
       // 	}else {
        		// write "I don't know you!"
        //		document.getElementById('error-label').innerHTML = 'Username ok , but password not ok!';
        	
       // } else {
        	// write "Idon't know you!"
       // 	document.getElementById('error-label').innerHTML = 'Username not ok!';
       // }


       for(var i = 0 ; i < database.length ; i ++ ) {
       
			if(database[i].username == username && database[i].password == password) {
				document.getElementById('error-label2').innerHTML = username + " is corect";
				break;
			} else {
			// write "I don't know you!"
				document.getElementById('error-label2').innerHTML = 'Username or password not ok!';
			}

		}
     
     });

     document.getElementById('register-button').addEventListener('click',function() {
         //REGISTER
         var userRegister = document.getElementById('registerUsername').value;
         var passwordRegister = document.getElementById('registerPassword').value;

         for(var i = 0 ; i < database.length ; i ++) {
         	if(userRegister == database[i].username) {
         		document.getElementById('error-label-register').innerHTML = 'User exist';
         		return;
         	}
         }
         //checck password length more than & chars
         if(passwordRegister.length < 8)  {
         	document.getElementById('error-label-register').innerHTML = 'Password too short!!!';
         	return;
         }
         //uppercase && lowercase on password
         var passwordRegister2 = document.getElementById('registerPassword').value;
         if(passwordRegister == passwordRegister2.toLowerCase()) {
         	document.getElementById('error-label-register').innerHTML = 'Password doesn t have uppercase';
         	return;
         }
         if(passwordRegister == passwordRegister2.toUpperCase()) {
         	document.getElementById('error-label-register').innerHTML = 'Password doesn t have lowercase';
         	return;
         }
         document.getElementById('error-label-register').innerHTML = 'User successfully!!! ';

     });   



})();