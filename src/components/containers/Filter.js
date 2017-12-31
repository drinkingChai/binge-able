import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'

import SearchInput from '../presentational/SearchInput'
import GenresSelector from '../presentational/GenresSelector'
import SortSelector from '../presentational/SortSelector'
import YearsSelector from '../presentational/YearsSelector'

// ****** remove ****** //
const genres = [ 'action', 'thriller', 'drama', 'sci-fi', 'fantasy', 'documentary' ]
const sort = [ 'release', 'rating' ]
// ****** remove ****** //

class Filter extends Component {
  state = {}

  componentDidMount = () => {

  }

  render = () => {
    const { location, history } = this.props

    return (
      <div className='filter'>
        <SearchInput input={ qs.parse(location.search).title || '' } onClick={ input => history.push(`/search?title=${input}`) } />
        <GenresSelector genres={ genres } />

        <div className='years-sort'>
          <YearsSelector />
          <SortSelector options={ sort } />
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Filter))
