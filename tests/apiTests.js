const chai = require('chai'),
      should = chai.should(),
      expect = chai.expect

const omdbjs = require('omdb-js')(require('../env').OMDB_API_KEY)

/**********************************************

  API routes:
  // NOTES:
    - calculate binge-ability based on sources
    - crowd source data
      // how to aggregate and verify...? not a concern?
    - binge-score:
      // need current survey data -> combination of episodes available / total episodes across all services
      // aggregate only most recent data (last 10 surveys?)
    - user can request verification
    - provide binge-guide
      - guide: DIY - episode matrix
        - highlights % of episode being in source
        - 
    - surveys -> updates binge-score and binge-guide

  TODO:
    ==== series ====
    GET /api/series/search?=series%20title
    GET /api/series/:imdbID
    POST /api/series
    DELETE /api/series/:id
    PUT /api/series/:id/requestUpdate
    PUT /api/series/:id/streamSource
      { type: 'Amazon', episodes: [] } // provide a matrix interface / survey
      { type: 'Hulu', episodes: [] }

    ==== Reviews ====
    POST /api/reviews
    DELETE /api/reviews/:id
    PUT /api/reviews/:id

    ==== PassportJS ====
    POST /api/users/login
    DELETE /api/users/logout

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

xdescribe("Calculate binge-ability", function() {
  it('search for the show and add it to db', function() {
    // expect result to be 1
    // expect type: series
    // add to database
    // expect it to exist in database
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
