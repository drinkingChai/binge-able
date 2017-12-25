import React, { Component } from 'react'

const genres = [ 'action', 'thriller', 'drama', 'sci-fi', 'fantasy', 'documentary' ]
const filters = [ 'genres', 'rating', 'release' ]
const years = { min: '1995', max: '2017' }

import GenresSelector from '../components/presentational/GenresSelector'

class SearchFilterTest extends Component {
  render = () => {
    return (
      <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
        <div style={{ backgroundColor: '#211B39', padding: '30px' }}>
          <GenresSelector genres={ genres } />
        </div>
      </div>
    )
  }
}

export default SearchFilterTest 
