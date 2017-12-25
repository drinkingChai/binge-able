import React, { Component } from 'react'

const genres = [ 'action', 'thriller', 'drama', 'sci-fi', 'fantasy', 'documentary' ]
const sort = [ 'genres', 'rating', 'release' ]
const years = { min: '1995', max: '2017' }

import GenresSelector from '../components/presentational/GenresSelector'
import YearsSelector from '../components/presentational/YearsSelector'
import SortSelector from '../components/presentational/SortSelector'

class SearchFilterTest extends Component {
  render = () => {
    return (
      <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
        <div style={{ backgroundColor: '#211B39', padding: '30px' }}>
          <GenresSelector genres={ genres } />
          <br/>
          <YearsSelector />
          <br/>
          <SortSelector options={ sort } />
        </div>
      </div>
    )
  }
}

export default SearchFilterTest 
