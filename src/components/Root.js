import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import SplashWrapper from './containers/SplashWrapper'
import SearchBar from './containers/SearchBar'
import SearchResults from './containers/SearchResults'
import Filter from './containers/Filter'
import About from './presentational/About'

import { toggleSplash } from '../actions'

class Root extends Component {
  componentDidMount = () => {
    if (this.props.location.pathname !== '/' && this.props.splash) this.props.toggleSplash()
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.location.pathname == '/' && !nextProps.splash) nextProps.toggleSplash()
  }

  handleSearch = input => {
    this.props.history.push(`/search?title=${input}`)
    setTimeout(() => { this.props.toggleSplash() }, 1200)
  }

  // add a scroll to top button on About.js
  // graphs for surveys and clicks
  
  render = () => {
    return (
      <div>
        <div>
          <Route exact path='/' render={ () => <SplashWrapper onSearch={ this.handleSearch } onDiscover={ () => this.handleSearch('') } /> } />
          <Route exact path='/search' render={ () => <SplashWrapper onSearch={ this.handleSearch } onDiscover={ () => this.handleSearch('') } /> } />
          <Route path='/search' component={ SearchBar } /> { /* remove / rename to topbar */ }
          <Route path='/show' component={ SearchBar } />
        </div>

        <div>
          <Route exact path='/' component={ About } />
          <Route path='/search' component={ Filter } />
          <Route path='/search' component={ SearchResults } />
        </div>
      </div>
    )
  }
}

const mapState = ({ splash }) => ({ splash })
export default withRouter(connect(mapState, { toggleSplash })(Root))
