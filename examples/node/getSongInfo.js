console.log('Getting song info from the Echo Nest...');

require('../common/getSongInfo')(function(err, res){
    if (err){ throw err; }
    console.log(res);
});