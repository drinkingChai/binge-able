import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// components
import MovieTest from './MovieTest'
import SourcesTest from './SourcesTest'

class Test extends Component {
  componentDidMount = () => {
  }
  
  render = () => {
    return (
      <div>
        {
          <MovieTest />
          // <SourcesTest />
        }
      </div>
    )
  }
}

export default Test 
