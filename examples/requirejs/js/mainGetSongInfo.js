require.config({
    paths: {
        'bops': '../../shared/node_modules/echo-best/node_modules/bops/dist/bops',
        'lodash': '../../shared/node_modules/echo-best/node_modules/lodash/index',
        'superagent': '../../shared/node_modules/echo-best/node_modules/superagent/superagent',
        'jquery': '../../shared/node_modules/jquery/dist/jquery',
        'echo-best': '../../shared/node_modules/echo-best/lib/echoBest',
        'objectToDOM': '../../shared/objectToDOM',
        'getSongInfo': '../../shared/getSongInfo'
    }
});

require(['requireGetSongInfo']);