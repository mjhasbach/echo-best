console.log('Getting song info from the Echo Nest...');

require('../shared/getSongInfo')(function(err, res){
    if (err){ throw err; }
    console.log(res);
});