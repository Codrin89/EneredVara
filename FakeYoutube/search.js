// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    $('#search-container').html('');
    var youtubeSearchResponse = response.result;
    var arrayYoutubeSearchResponse = youtubeSearchResponse.items;
    for(var i = 0 ; i < arrayYoutubeSearchResponse.length ; i++) {
      var player = $('<iframe class="playere" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + arrayYoutubeSearchResponse[i].id.videoId + '?enablejsapi=1&origin=http://example.com" frameborder="0"></iframe>');
      $('#search-container').append(player);
    }
  });
}

$('#search-button').on('click', function() {
  search();


});

$('#query').on('keyup', function(e) {
  console.log(e);
  if(e.keyCode == 13) {
    search();
  }
});