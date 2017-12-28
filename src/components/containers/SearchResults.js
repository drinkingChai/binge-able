import React, { Component } from 'react'
import { connect } from 'react-redux'

// temp
import movietest from '../../../json/movietest'
import Movie from '../presentational/Movie'

class SearchResults extends Component {
  componentDidMount = () => {
    console.log(this.props)
  }

  componentWillReceiveProps = nextProps => {

  }

  render = () => {
    return (
      <div className='search-results'>
      { movietest.map((movie, i) => <Movie data={ movie } key={ i } />) }
      </div>
    )
  }
}

export default connect()(SearchResults)
