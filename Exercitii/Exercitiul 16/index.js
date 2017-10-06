function myFunction() {
    var message, x;
    message = document.getElementById("result-label");

    x = document.getElementById("age").value;
    if(x < 18){
        message.innerHTML = 'Is not legal';
    }else {
        message.innerHTML = 'Is legal';
    }

}
