import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// components
import MovieTest from './MovieTest'
import SourcesTest from './SourcesTest'
import SurveyTest from './SurveyTest'

class Test extends Component {
  componentDidMount = () => {
  }
  
  render = () => {
    return (
      <div>
        {
          // <MovieTest />
          // <SourcesTest />
          <SurveyTest />
        }
      </div>
    )
  }
}

export default Test 
