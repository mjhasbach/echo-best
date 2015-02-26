console.log('Uploading track to the Echo Nest for analysis...');

require('../shared/analyzeBuffer')(function(err, res){
    if (err){ throw err; }
    console.log(res);
});