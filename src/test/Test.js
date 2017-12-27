import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// components
import MovieTest from './MovieTest'
import SourcesTest from './SourcesTest'
import SurveyTest from './SurveyTest'
import SearchFilterTest from './SearchFilterTest'
import SplashTest from './SplashTest'

class Test extends Component {
  componentDidMount = () => {
  }
  
  render = () => {
    return (
      <div>
        {
          // <SplashTest />
        }
        {
          // <MovieTest />
        }
        {
          // <SourcesTest />
        }
        {
          <SurveyTest />
        }
        {
          // <SearchFilterTest />
        }
      </div>
    )
  }
}

export default Test 
