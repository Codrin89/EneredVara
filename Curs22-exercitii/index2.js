(function() {

document.getElementById(`verify-button`).addEventListener(`click`,function() {
		 var age = document.getElementById(`age`).value;
		 if (age < 18) {
          	document.getElementById(`result-label`).innerHTML = `You are not old enough to legally drive`;
          	 return;
          }else {
          	
          	if (age = 35) {
          	document.getElementById(`result-label`).innerHTML = `You are old enough to legally drive`;
          	 return;
         
          }
      }


});
})();