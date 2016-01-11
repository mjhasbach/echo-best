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
        'https://freemusicarchive.org/music/download/8c3e4d8834f7a61b053ca5c6ab7efcbb432c3a07',
        'https://freemusicarchive.org/music/download/a0b703e30eee1568c5b6821577f5a1d258d8fbd6',
        'https://freemusicarchive.org/music/download/feea7ff585601c574c9949f5cb2d461cf4181d19',
        'https://freemusicarchive.org/music/download/c01e832fe56475ed4ce83af975cfce05755b3943'
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
                    var cd = res.header['content-disposition'];

                    if (err || cd.substr(cd.length - 3, cd.length) !== 'mp3') {
                        tryNext(cb);
                    }
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