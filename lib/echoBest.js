(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['lodash', 'superagent', 'bops'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('lodash'), require('superagent'), require('bops'));
    } else {
        root.echoBest = factory(root._, root.superagent, root.bops);
    }
}(this, function (_, http, bops) {
    var apiURL = 'http://developer.echonest.com/api/v4/',
        handleResponse = function(err, res, cb) {
            if (res.statusCode !== 200 && res.body.response.status.code !== 0) {
                err = new Error(res.body.response.status.message);
            }

            cb(err, res.body.response);
        },
        echoBest = function(key) {
            if (!_.isString(key)){
                throw new TypeError('The API key must be a string');
            }
            return function(path, opt, cb) {
                if (!_.isFunction(cb)){
                    throw new TypeError('Third argument: Callback must be a function');
                }
                else if (!_.isString(path)){
                    cb(new TypeError('First argument: Path must be a string'));
                }
                else if (!_.isObject(opt) || _.isArray(opt)){
                    cb(new TypeError('Second argument: Options must be an object'));
                }
                else{
                    if (_.contains(path, 'upload')){
                        var audioKey = 'audio',
                            audioData = opt[audioKey],
                            isHexAudioData = /^[0-9a-fA-F]+$/.test(audioData);

                        if (bops.is(audioData) || isHexAudioData){
                            if (isHexAudioData){
                                audioData = bops.from(audioData, 'hex');
                            }

                            http.post(apiURL + path)
                                .type('application/octet-stream')
                                .set('Transfer-Encoding', 'chunked')
                                .query(_.extend(_.omit(opt, audioKey), {api_key: key}))
                                .send(audioData)
                                .end(function(err, res){
                                    handleResponse(err, res, cb);
                                });
                        }
                        else{
                            cb(new Error('The ' + audioKey + ' key of the options object must be a buffer or hex string'));
                        }
                    }
                    else{
                        http.get(apiURL + path)
                            .query(_.extend(opt, {api_key: key}))
                            .end(function(err, res){
                                handleResponse(err, res, cb);
                            });
                    }
                }
            }
        };

    return echoBest;
}));