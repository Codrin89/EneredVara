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
    var result = response.result;
    console.log(result.items);
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
        playlistId: playlistId,
        resourceId: details
      }
    }
  });
  request.execute(function(response) {
    $('#status').html('<pre>' + JSON.stringify(response.result) + '</pre>');
  });
}
