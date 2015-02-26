(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['echo-best'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('echo-best'));
    } else {
        root.getSongInfo = factory(root.echoBest);
    }
}(this, function(echoBest) {
    return function(cb){
        if (typeof cb !== 'function'){
            throw new TypeError('cb must be a function');
        }

        echoBest('BLR1XMTZN2ZWCCATJ')(
            'song/profile',
            {
                track_id: 'spotify:track:6Hqd8S0yliJnFKjJH0Qyed',
                bucket: 'audio_summary'
            },
            cb
        );
    }
}));