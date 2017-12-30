import React, { Component } from 'react'
import { connect } from 'react-redux'

// ****** remove ****** //
import showdata from '../../../json/showdata'
// ****** remove ****** //

import ShowComposite from '../presentational/ShowComposite'

class SearchResults extends Component {
  state = { shows: [] }

  render = () => {
    return (
      <div className='search-results'>
        <ShowComposite data={ showdata[0] } />
      </div>
    )
  }
}

const mapState = ({ shows }) => ({ shows: showdata })
export default connect(mapState)(SearchResults)
