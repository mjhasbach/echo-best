console.log('Uploading track to the Echo Nest for analysis...');

require('../shared/analyzeHex')(function(err, res){
    if (err){ throw err; }
    console.log(res);
});