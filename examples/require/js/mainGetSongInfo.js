require.config({
    paths: {
        'bops': '../../common/node_modules/echo-best/node_modules/bops/dist/bops',
        'lodash': '../../common/node_modules/echo-best/node_modules/lodash/index',
        'superagent': '../../common/node_modules/echo-best/node_modules/superagent/superagent',
        'jquery': '../../common/node_modules/jquery/dist/jquery',
        'echo-best': '../../common/node_modules/echo-best/lib/echoBest',
        'objectToDOM': '../../common/objectToDOM',
        'getSongInfo': '../../common/getSongInfo'
    }
});

require(['requireGetSongInfo']);