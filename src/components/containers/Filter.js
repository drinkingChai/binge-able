import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    return (
      <div className='filter'>
        <GenresSelector genres={ genres } />

        <div className='years-sort'>
          <YearsSelector />
          <SortSelector options={ sort } />
        </div>
      </div>
    )
  }
}

export default connect()(Filter)
