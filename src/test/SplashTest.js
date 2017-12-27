import React, { Component } from 'react'

import Splash from '../components/presentational/Splash'

class SearchFilterTest extends Component {
  componentDidMount = () => {
    document.body.style.backgroundColor='#000000'
  }
  render = () => {
    return (
      <div>
        <Splash />
      </div>
    )
  }
}

export default SearchFilterTest 
