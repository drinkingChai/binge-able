const chai = require('chai'),
      should = chai.should(),
      expect = chai.expect

const env = require('../env'),
      tmdb = require('tmdbv3').init(env.TMDB_API_KEY),
      Tmdb = require('tmdb-v3'),
      tmdbv3 = new Tmdb({ apiKey: env.TMDB_API_KEY }),
      omdb = require('omdb'),
      omdbjs = require('omdb-js')(env.OMDB_API_KEY)

xdescribe("TMDB - Search", function() {
  it("can get configuration info", function(done) {
    tmdb.configuration(function(err,res) {
      should.exist(res)
      done()
    })
  })

  it("can search for movies", function(done) {
    tmdb.search.movie('stranger things', function(err,res) {
      res.page.should.equal(1);
      done()
    })
  })
})

describe("OMDB - Search", function() {
  xit("can search for movies", function(done) {
    omdbjs.searchForMovie('Stranger Things')
      .then(results => {
        // results is an array of movie objects
        expect(results).to.be.an('object')
        expect(results.Search).to.be.an('array')
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  xit("can get details for a movie using imdbID", function(done) {
    omdbjs.getSpecificMovie('', 'tt4574334', { type: 'series' })
      .then(result => {
        // result is a single OMDB API json object json matching the year and title, with "short" plot summary
        expect(result).to.be.an('object')
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  xit('can get seasons for a specific movie', function(done) {
    omdbjs.getSpecificMovie('', 'tt4574334', { type: 'series' })
      .then(result => {
        expect(result).to.have.property('totalSeasons')
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  xit('can get runtime for a specific movie', function(done) {
    omdbjs.getSpecificMovie('', 'tt4574334', { type: 'series' })
      .then(result => {
        expect(result).to.have.property('Runtime')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
