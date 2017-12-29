import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Splash from '../presentational/Splash'

const SplashWrapper = ({ splash, location, history, onSearch, onDiscover }) => {
  if (!splash) return <span style={{ height: 0, width: 0 }}></span>

  return (
    <div
      className={ `splash-wrapper${ location.pathname == '/search' && history.action == 'PUSH' ? ' close' : '' }` }>
      <Splash onSearch={ onSearch } onDiscover={ onDiscover } />
    </div>
  )
}

const mapState = ({ splash }) => ({ splash })
export default withRouter(connect(mapState)(SplashWrapper))
