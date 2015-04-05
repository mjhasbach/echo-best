define(['jquery', 'getSongInfo', 'varToDOM'], function($, getSongInfo){
    $(function() {
        var $body = $('body');

        $body.append(
            $('<div>').text('Getting song info from the Echo Nest...')
        );

        getSongInfo(function(err, res){
            var songs = res.songs;

            if (err){ throw err; }

            $body.empty();

            if (_.isArray(songs) && _.isObject(songs[0])){
                $body.varToDOM({var: songs[0]});
            }
            else{
                $body.append($('<div>').text('Error - Invalid response received'));
            }
        });
    });

    return 'test';
});