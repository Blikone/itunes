function MyTunes() {

    /////TO-DO LIST/////
    /**DONE Add tracks when button is clicked
     * DONE Change song's class to a light green hue whenever it's on the favorites list
     *      Create functionality of remove, promote, demote methods (incl. writing HTML for that list)
     * DONE Hook button up to showing favorites list
     *      Use local storage to save/retrieve favorites list
     * 
     */
    var _myTracks = [];
    var myTracks = loadTracks();

    this.getTracks = function () {
        return _myTracks;
    }

    this.addTrack = function (id) {
        for (var i = 0; i < searchResults.length; i++) {
            var song = searchResults[i];
            if (song.id == id) {
                _myTracks.push(song);
                // console.log(_myTracks);
                return;
            };
        };
    };

    this.removeTrack = function (id) {
        for (var i = 0; i < this.getTracks().length; i++) {
            var song = this.getTracks()[i];
            if (song.id == id) {
                _myTracks.splice(i, 1);
                return;
            }
        }
    }
    this.promoteTrack = function (id) {
        // console.log(id)
        for (var i = 1; i < _myTracks.length; i++) {
            // console.log(_myTracks[i].id);
            if (_myTracks[i].id == id) {
                var temp = _myTracks[i-1];
                _myTracks[i-1] = _myTracks[i];
                _myTracks[i] = temp;
                return;
            }
        }
    }
    this.demoteTrack = function (id) {
        for (var i = 0; i < _myTracks.length-1; i++) {
            if (_myTracks[i].id == id) {
                var temp = _myTracks[i+1];
                _myTracks[i+1] = _myTracks[i];
                _myTracks[i] = temp;
                return;
            }
        }
    }


    function saveTracks() {

    }
    function loadTracks() {
        // return trackList;
    }
}