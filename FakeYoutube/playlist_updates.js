// Define some variables used to remember state.
var playlistId, channelId;

// After the API loads, call a function to enable the playlist creation form.
function handleAPILoadedPlaylist() {
  enableForm();
}

// Enable the form for creating a playlist.
function enableForm() {
  $('#playlist-button').attr('disabled', false);
  fetchPlaylist();
}

// Create a private playlist.
function createPlaylist() {
  var request = gapi.client.youtube.playlists.insert({
    part: 'snippet,status',
    resource: {
      snippet: {
        title: document.getElementById('playlistName').value,
        description: document.getElementById('playlistDescription').value
      },
      status: {
        privacyStatus: document.getElementById('playlistPrivacy').value
      }
    }
  });
  request.execute(function(response) {
    var result = response.result;
    if (result) {
      playlistId = result.id;

      location.reload();
    } else {
      alert('Could not create playlist '+response);
      alert('Could not create playlist '+response);
    }
  });
}

function fetchPlaylist() {
  var request = gapi.client.youtube.playlists.list({
    'mine': 'true',
    'part': 'snippet,contentDetails'
  });
  request.execute(function(response) {
    console.log(response.items);

    $('#playlist-container').empty();
    for(var i = 0 ; i < response.items.length ; i++) {
      var object = $('<div class="onePlaylist" data-id="'+response.items[i].id +' "><p class="title">' +response.items[i].snippet.title + '</p><h3 class="description">'+response.items[i].snippet.description +'</h3><div class="onePlaylistVideos"></div></div>');
      $('#playlist-container').append(object);
      fetchItems(response.items[i].id, i);
    }
    $('.onePlaylist .title').on('click', function() {
        $('.onePlaylist').removeClass('activePlaylist');
        $(this.parentElement).addClass('activePlaylist');
    });

    $('.title').on('click', function() {
      $(this.parentElement).find('.onePlaylistVideos').toggle(1000);
    })
  });

  
}

function fetchItems(id, playlistPos) {
  var request = gapi.client.youtube.playlistItems.list({
    'part': 'snippet,contentDetails',
    'maxResults': 10,
    'playlistId': id
  });
  request.execute(function(response) {
    console.log(response.items);
    for (var i = 0 ; i < response.items.length ; i++) {
      var objectlist = $('<iframe class="playere" type="text/html" width="220" height="140" src="http://www.youtube.com/embed/' + response.items[i].contentDetails.videoId + '?enablejsapi=1&origin=http://example.com" frameborder="0"></iframe>');
      var buttonRemove = $('<div id="itemlist_'+ i +'"><button onclick="removeVideoFromPlayList(\''+response.items[i].id+'\')" >Remove</button></div>');     
      $('.onePlaylistVideos')[playlistPos].append(objectlist[0]);
       $('.onePlaylistVideos')[playlistPos].append(buttonRemove[0]);
    }
    
  });
  

}


function removeVideoFromPlayList(videoId){
    var request = gapi.client.youtube.playlistItems.delete({
            id: videoId
        });

    request.execute(function(response) {
    location.reload();
  });
}

// Add a video ID specified in the form to the playlist.
function addVideoToPlaylist() {
  addToPlaylist($('#video-id').val());
}


// Add a video to a playlist. The "startPos" and "endPos" values let you
// start and stop the video at specific times when the video is played as
// part of the playlist. However, these values are not set in this example.
function addToPlaylist(id, startPos, endPos) {
  var details = {
    videoId: id,
    kind: 'youtube#video'
  }
  if (startPos != undefined) {
    details['startAt'] = startPos;
  }
  if (endPos != undefined) {
    details['endAt'] = endPos;
  }
  var request = gapi.client.youtube.playlistItems.insert({
    part: 'snippet',
    resource: {
      snippet: {
        playlistId: document.getElementsByClassName('activePlaylist')[0].getAttribute('data-id'),
        resourceId: details
        
      }
    }
  });
    

  
  request.execute(function(response) {
    $('#status').html('<pre>' + JSON.stringify(response.result) + '</pre>');
    location.reload();
  });
}
