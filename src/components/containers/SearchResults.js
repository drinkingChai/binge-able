import React, { Component } from 'react'
import { connect } from 'react-redux'

// ****** remove ****** //
import movietest from '../../../json/movietest'
// ****** remove ****** //

import { toggleModal } from '../../actions'
import Show from '../presentational/Show'

class SearchResults extends Component {
  state = { shows: [] }

  componentDidMount = () => {
    this.setState(this.props)
    window.scrollTo(0, 0)
    console.log(this.props)
  }

  componentWillReceiveProps = nextProps => {
  }

  showSources = imdbID => {
    this.props.toggleModal()
    this.props.history.push(`/show/${imdbID}`)
  }

  render = () => {
    return (
      <div className='search-results'>
      { this.state.shows.map((show, i) => <Show data={ show } key={ i } onSourcesClick={ () => this.showSources(show.imdbID) } />) }
      </div>
    )
  }
}

const mapState = ({ shows }) => ({ shows: movietest })
export default connect(mapState, { toggleModal })(SearchResults)
