var should = require('chai').should(),
    echoBest = require('../lib/echoBest')('BLR1XMTZN2ZWCCATJ');

describe('echo-best', function() {
    it('should get a list of artist biographies', function(done) {
        echoBest(
            'artist/biographies',
            {
                name: 'Crywolf',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('biographies');
                res.biographies.should.be.a('array');
                res.biographies.should.have.length(1);
                res.biographies[0].should.have.property('text');
                res.biographies[0].text.should.be.a('string');
                done();
            }
        );
    });
    it('should get a list of blog articles related to an artist', function(done) {
        echoBest(
            'artist/blogs',
            {
                name: 'Sidney Samson',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('blogs');
                res.blogs.should.be.a('array');
                res.blogs.should.have.length(1);
                res.blogs[0].should.have.property('summary');
                res.blogs[0].summary.should.be.a('string');
                done();
            }
        );
    });
    it('should get a numerical estimation of how familiar an artist currently is to the world', function(done) {
        echoBest(
            'artist/familiarity',
            {name: 'Avicii'},
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artist');
                res.artist.should.be.a('object');
                res.artist.should.have.property('familiarity');
                res.artist.familiarity.should.be.a('number');
                done();
            }
        );
    });
    it('should return a numerical description of how hottt an artist currently is', function(done) {
        echoBest(
            'artist/hotttnesss',
            {name: 'Galantis'},
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artist');
                res.artist.should.be.a('object');
                res.artist.should.have.property('hotttnesss');
                res.artist.hotttnesss.should.be.a('number');
                done();
            }
        );
    });
    it('should get a list of artist images', function(done) {
        echoBest(
            'artist/images',
            {
                name: 'Armin van Buuren',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('images');
                res.images.should.be.a('array');
                res.images.should.have.length(1);
                res.images[0].should.have.property('url');
                res.images[0].url.should.be.a('string');
                done();
            }
        );
    });
    it('should get a list of the best typed descriptive terms for use with search', function(done) {
        echoBest(
            'artist/list_terms', {}, function(err, res) {
                should.not.exist(err);
                res.should.have.property('terms');
                res.terms.should.be.a('array');
                res.terms[0].should.have.property('name');
                res.terms[0].name.should.be.a('string');
                done();
            }
        );
    });
    it('should get a list of news articles found on the web related to an artist', function(done) {
        echoBest(
            'artist/news',
            {
                name: 'David Guetta',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('news');
                res.news.should.be.a('array');
                res.news.should.have.length(1);
                res.news[0].should.have.property('summary');
                res.news[0].summary.should.be.a('string');
                done();
            }
        );
    });
    it('should get basic information about an artist', function(done) {
        echoBest(
            'artist/profile',
            {
                name: 'Netsky',
                bucket: 'artist_location'
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artist');
                res.artist.should.be.a('object');
                res.artist.should.have.property('artist_location');
                res.artist.artist_location.should.be.a('object');
                res.artist.artist_location.should.have.property('country');
                res.artist.artist_location.country.should.be.a('string');
                done();
            }
        );
    });
    it('should search artists', function(done) {
        echoBest(
            'artist/search',
            {
                bucket: 'years_active',
                artist_location: 'California',
                mood: 'complex',
                genre: 'electronic',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artists');
                res.artists.should.be.an('array');
                res.artists.should.have.length(1);
                res.artists[0].should.be.an('object');
                res.artists[0].should.have.property('years_active');
                res.artists[0].years_active.should.be.an('array');
                res.artists[0].years_active.length.should.be.above(0);
                res.artists[0].years_active[0].should.be.an('object');
                res.artists[0].years_active[0].should.have.property('start');
                res.artists[0].years_active[0].start.should.be.a('number');
                done();
            }
        );
    });
    it('should extract artist names from text', function(done) {
        var artistName = 'Mt Eden';

        echoBest(
            'artist/extract',
            {
                text: 'More ' + artistName + ' please!',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artists');
                res.artists.should.be.an('array');
                res.artists.should.have.length(1);
                res.artists[0].should.be.an('object');
                res.artists[0].should.have.property('name');
                res.artists[0].name.should.eql(artistName);
                done();
            }
        );
    });
    it('should return similar artists given one or more artists for comparison', function(done) {
        echoBest(
            'artist/similar',
            {
                name: 'Jakwob',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artists');
                res.artists.should.be.an('array');
                res.artists.should.have.length(1);
                res.artists[0].should.be.an('object');
                res.artists[0].should.have.property('name');
                res.artists[0].name.should.be.a('string');
                done();
            }
        );
    });
    it('should get a list of most descriptive terms for an artist', function(done) {
        echoBest(
            'artist/terms',
            {name: 'Krewella'},
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('terms');
                res.terms.should.be.an('array');
                res.terms.length.should.be.above(0);
                res.terms[0].should.be.an('object');
                res.terms[0].should.have.property('name');
                res.terms[0].name.should.be.a('string');
                done();
            }
        );
    });
    it('should return a list of the top hottt artists', function(done) {
        echoBest(
            'artist/top_hottt',
            {results: 1},
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artists');
                res.artists.should.be.an('array');
                res.artists.should.have.length(1);
                res.artists[0].should.be.an('object');
                res.artists[0].should.have.property('name');
                res.artists[0].name.should.be.a('string');
                done();
            }
        );
    });
    it('should return a list of the overall top terms', function(done) {
        echoBest(
            'artist/top_terms',
            {results: 1},
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('terms');
                res.terms.should.be.an('array');
                res.terms.should.have.length(1);
                res.terms[0].should.be.an('object');
                res.terms[0].should.have.property('name');
                res.terms[0].name.should.be.a('string');
                done();
            }
        );
    });
    it('should get the twitter handle for an artist', function(done) {
        echoBest(
            'artist/twitter',
            {name: 'Hardwell'},
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('artist');
                res.artist.should.be.an('object');
                res.artist.should.have.property('twitter');
                res.artist.twitter.should.be.a('string');
                done();
            }
        );
    });
    it("should get the link to an artist's official site", function(done) {
        echoBest(
            'artist/urls',
            {name: 'Kaskade'},
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('urls');
                res.urls.should.be.an('object');
                res.urls.should.have.property('official_url');
                res.urls.official_url.should.be.a('string');
                done();
            }
        );
    });
    it('should get a list of video documents found on the web related to an artist', function(done) {
        echoBest(
            'artist/video',
            {
                name: 'Gemini',
                results: 1
            },
            function(err, res) {
                should.not.exist(err);
                res.should.have.property('video');
                res.video.should.be.an('array');
                res.video.should.have.length(1);
                res.video[0].should.be.an('object');
                res.video[0].should.have.property('url');
                res.video[0].url.should.be.a('string');
                done();
            }
        );
    });
});