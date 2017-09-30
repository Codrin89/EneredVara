(function() {

    $('.btn-primary').on('click', function() {
        var principal = $('#principalNo').val();
        var interest = $('#rateNo').val();
        var years = $('#yearsNo').val();
 
        var total = principal * (1 + years * interest );

        $('#principalNo2').html(principal);
        $('#rateNo2').html(interest);
        $('#rateNo3').html(interest);
        $('#yearsNo2').html(years);
        $('#yearsNo3').html(years);
        $('#resultNo').html(total);


    });


})();