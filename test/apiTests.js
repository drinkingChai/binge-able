const chai = require('chai'),
      should = chai.should(),
      expect = chai.expect

const omdbjs = require('omdb-js')(require('../env').OMDB_API_KEY)

/**********************************************

  API routes:

  TODO:
    GET /api/series/search?=series%20title
    GET /api/series/:imdbID
    POST /api/series
    DELETE /api/series/:id
    PUT /api/series/:id/requestUpdate
    PUT /api/series/:id/streamAt
      { type: 'Amazon', rating: +1 or -1 }
      { type: 'Hulu', rating: +1 or -1 }

***********************************************/

xdescribe("Search for a shows", function() {
  it('can search for a shows', function() {
    // expect all results to be of type: series
    // expect none to be of type: movie
  })

  it('can search for a specific show with imdbID', function() {
    // expect result to be 1
    // expect type: series
  })
})

xdescribe("Add a show to db", function() {
  it('search for the show and add it to db', function() {
    // expect result to be 1
    // expect type: series
    // add to database
    // expect it to exist in database
  })
})
