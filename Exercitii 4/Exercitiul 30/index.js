(function() {

    var number = 12;
    //<div>
        // <span class="number"></span>
    // </div>
    function generateMultiTable() {
        var divItem = $('<div></div>');
        divItem.append($('<span class="number"> </span>'));
        for(var i = 0 ; i <= number; i++) {
            var numberItem = $('<span class="number">' + i + '</span>');
            divItem.append(numberItem);
        }
        $('.col-md-12').append(divItem);

        for(var i = 0 ; i <= number; i++) {
            var divItem = $('<div></div>');
            divItem.append($('<span class="number">'+ i +'</span>'));
            for( var j = 0 ; j <= number ; j++) {
                var numberItem = $('<span class="number">' + (i*j) + '</span>');
                divItem.append(numberItem);
            }
            $('.col-md-12').append(divItem);
        }

    }

    generateMultiTable();
})();