(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['superagent'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('superagent'));
    } else {
        root.downloadTrack = factory(root.superagent);
    }
}(this, function (http) {
    var songs = [
        'http://freedownloads.last.fm/download/550191337/Alive.mp3',
        'http://freedownloads.last.fm/download/582135818/Together.mp3',
        'http://freedownloads.last.fm/download/508242732/Gu.mp3',
        'http://freedownloads.last.fm/download/653755146/Zonnestraal.mp3'
    ];

    function tryNext(cb) {
        songs.shift();

        if (songs.length){
            downloadTrack(cb);
        }
        else{
            cb(new Error('No more remaining tracks'));
        }
    }

    var downloadTrack = function(cb) {
        if (typeof cb !== 'function'){
            throw new TypeError('cb must be a function');
        }
        else{
            var data = [];

            console.log('Attempting to download ' + songs[0]);

            http.get(songs[0])
                .end(function(err, res){
                    if (err) { tryNext(cb); }
                    else{
                        res.on('data', function (chunk) {
                            data.push(chunk);
                        }).on('end', function () {
                            cb(null, Buffer.concat(data));
                        });
                    }
                });
        }
    };

    return downloadTrack;
}));