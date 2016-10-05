var myTunes = new MyTunes();
var searchResults = [];

//Do Not Modify the getMusic function
function getMusic(event) {
    event.preventDefault();
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList) {
    debugger;
    var mySongs = myTunes.getTracks();
    if (mySongs != songList) {
        searchResults = songList;
    };
    console.log(songList[0]);
    document.getElementById('songs').innerHTML = ""
    var template = "";
    var whichButton = ""
    var songsDisplay = document.getElementById('songs');
    for (var i = 0; i < songList.length; i++) {
        var index = i+1;
        var parity = index % 2 === 1 ? "list-odd" : "list-even";
        var song = songList[i];
        whichButton = songList == mySongs ? 
            `
                <button class="promote-song" id="${song.id}">Promote</button>
                <button class="demote-song" id="${song.id}">Demote</button>
                <button class="remove-song" id="${song.id}">Remove</button>
            ` : `
                <button class="save-track" id="${song.id}">Save to MyTunes</button>
            `
        for (var j=0; j<mySongs.length; j++) {
            if (songList[i] == mySongs[j]) {
                parity += " selected"
            }
        }
        template += 
            `<div class="song-well ${parity}">
                <div class="row">
                    <div class="col-xs-3 art-well">
                        <div class="row">
                            <div class="col-xs-3">
                                <div class="number-well">
                                    <p class="ordinal">${index}.</p>
                                </div>
                            </div>
                            <div class="col-xs-5">
                                ${whichButton}
                            </div>
                            <div class="col-xs-4">
                                <img src="${song.albumArt}" class="album-art">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-4">
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
        songsDisplay.innerHTML = template;
    };
};


$('.load-mysongs-button').on('click', function showMyTunes() {
    drawSongs(myTunes.getTracks());
    $('.load-mysongs-button').addClass('hidden');
    $('.load-search-button').removeClass('hidden');
})
$('.load-search-button').on('click', function showSearch() {
    drawSongs(searchResults);
    $('.load-search-button').addClass('hidden');
    $('.load-mysongs-button').removeClass('hidden');
})

$('#songs').on('click', 'button.save-track', function () {
    debugger;
    myTunes.addTrack(this.id);
    var id = this.id;
    $('#id').parents('.song-well').addClass('selected');
    drawSongs(searchResults);
})

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