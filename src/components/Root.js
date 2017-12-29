import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import SplashWrapper from './containers/SplashWrapper'
import SearchBar from './containers/SearchBar'
import SearchResults from './containers/SearchResults'
import Filter from './containers/Filter'
import SourcesWrapper from './containers/SourcesWrapper'
import About from './presentational/About'

class Root extends Component {
  componentDidMount = () => {
  }

  handleSearch = input => {
    this.props.history.push(`/search?title=${input}`)
  }

  // add a scroll to top button on About.js
  // graphs for surveys and clicks
  
  render = () => {
    return (
      <div>
        <div>
          <Route path='/' render={ () => <SplashWrapper onSearch={ this.handleSearch } onDiscover={ () => this.handleSearch('') } /> } />
          <Route path='/search' component={ SearchBar } />
        </div>

        <div>
          <Route exact path='/' component={ About } />
          <Route path='/search' component={ Filter } />
          <Route path='/search' component={ SearchResults } />
          <Route path='/show/:imdbID' component={ SourcesWrapper } />
        </div>
      </div>
    )
  }
}

export default withRouter(Root)
