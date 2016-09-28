//Do Not Modify the getMusic function
function getMusic(event) {
    event.preventDefault();
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList) {
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
                    <div class="col-xs-2 art-well">
                        <div class="row">
                            <div class="col-xs-4 container">
                                <p class="ordinal">${index}.</p>
                            </div>
                            <div class="col-xs-8">
                                <img src="${song.albumArt}" class="album-art">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-5">
                        <h4>${song.title}</h4>
                        <p class="artist-well">${song.artist} &mdash; ${song.collection}</p>
                    </div>
                    <div class="col-xs-3">
                        <audio controls preload:"metadata"><source src="${song.preview}" type="audio/mp4"></audio>
                    </div>
                    <div class="col-xs-2 price">
                        <p>album price: ${song.price}</p>
                        <a href="${song.purchaseUrl}" target="_blank"><button class="btn btn-purchase">Buy Album on iTunes</button></a>
                    </div>
                </div>
            </div>`
        ;
    };
};

/**This is my attempt to get the search to run when "enter" is pressed.  
It's calling the function so I have no idea why it stops mid-operation.*/
// var runGetMusic = document.getElementById('artist');
// runGetMusic.addEventListener("keypress", function (key) {
//     if (key.keyCode === 13) {
//         // debugger;
//         getMusic();
//     };
// });


// Only play one song at a time.  Credit: stackoverflow
// Edit: doesn't work.
$("audio").on("play", function(){
    var _this = $(this);
    $("audio").each(function(i,el){
        if(!$(el).is(_this))
            $(el).get(0).pause();
    });
});