function MyTunes() {
    
    /////TO-DO LIST/////
    /**Add tracks when button is clicked
     * Change song's class to a light green hue whenever it's on the favorites list
     * Create functionality of remove, promote, demote methods (incl. writing HTML for that list)
     * Hook button up to showing favorites list
     * Use local storage to save/retrieve favorites list
     * 
     */
    var _myTracks = [];
    var myTracks = loadTracks();

    this.getTracks = function () {
        return _myTracks;
    }
    
    this.addTrack = function(id) {
        for (var i = 0; i<searchResults.length; i++) {
            var song = searchResults[i];
            if (song.id == id) {
                _myTracks.push(song);
                console.log(_myTracks);
                return;
            };
        };
    };

    this.removeTrack = function() {

    }
    this.promoteTrack = function() {

    }
    this.demoteTrack = function () {

    }


    function saveTracks() {

    }
    function loadTracks() {
        // return trackList;
    }
}