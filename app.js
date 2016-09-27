//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList) {
    console.log(songList);
    document.getElementById('songs').innerHTML = ""
    var template = "";
    var songsDisplay = document.getElementById('songs');
    for (var i = 0; i < songList.length; i++) {
        var index = i+1;
        var parity = index % 2 === 1 ? "list-odd" : "list-even";
        var song = songList[i];
        songsDisplay.innerHTML += 
            `<div class="song-well ${parity}">
                <div class="row">
                    <div class="col-xs-2">
                        <p class="ordinal">${index}.</p>
                        <img src="${song.albumArt}"
                            class="album-art" />
                    </div>
                    <div class="col-xs-4">
                        <h4>${song.title}</h4>
                        <p>${song.artist} &mdash; ${song.collection}</p>
                    </div>
                    <div class="col-xs-4">
                        <audio controls preload:"metadata"><source src="${song.preview}" type="audio/mp4"></audio>
                    </div>
                    <div class="col-xs-2 price">
                        <p>${song.price}</p>
                    </div>
                </div>
            </div>`
        ;
    };
};

// Only play one song at a time.  Credit: stackoverflow
$("audio").on("play", function() {
    $("audio").not(this).each(function(index, audio) {
        audio.pause();
    });
});