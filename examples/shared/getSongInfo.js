(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'lodash', 'echo-best', 'varToDOM'], factory);
    } else if (typeof exports === 'object') {
        var _$ = require('detect-node') ? null : require('jquery');

        module.exports = factory(_$, require('lodash'), require('echo-best'), _$ ? require('jquery-vartodom') : null);
    } else {
        root.getSongInfo = factory(root.$, root._, root.echoBest);
    }
}(this, function($, _, echoBest) {
    var $body = {},
        getSongInfo = function() {
            echoBest('BLR1XMTZN2ZWCCATJ')(
                'song/profile',
                {
                    track_id: 'spotify:track:6Hqd8S0yliJnFKjJH0Qyed',
                    bucket: 'audio_summary'
                },
                function(err, res) {
                    var songs = res.songs,
                        song = _.isArray(songs) && _.isObject(songs[0]) ? songs[0] : null,
                        invalidResponse = 'Error - Invalid response received';

                    if (err) {
                        console.error(err);
                    }

                    if ($) {
                        $body.empty();

                        if (song) {
                            $body.varToDOM({var: songs[0]});
                        }
                        else {
                            $body.append($('<div>').text(invalidResponse));
                        }
                    }
                    else{
                        if (song) {
                            console.log(song);
                        }
                        else {
                            console.error(invalidResponse);
                        }
                    }
                }
            );
        };

    if ($) {
        $(function() {
            $body = $('body');

            $body.append(
                $('<div>').text('Getting song info from the Echo Nest...')
            );

            getSongInfo();
        });
    }
    else {
        getSongInfo();
    }
}));