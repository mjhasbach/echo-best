(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['echo-best', './downloadTrack'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('echo-best'), require('./downloadTrack'));
    } else {
        root.analyzeBuffer = factory(root.echoBest, root.downloadTrack);
    }
}(this, function (echoBest, downloadTrack) {
    return function(cb){
        if (typeof cb !== 'function'){
            throw new TypeError('cb must be a function');
        }
        downloadTrack(function (err, track) {
            if (err){ throw err; }

            echoBest('BLR1XMTZN2ZWCCATJ')(
                'track/upload',
                {
                    filetype: 'mp3',
                    audio: track.toString('hex')
                },
                cb
            );
        });
    }
}));