import React from 'react'
import { withRouter } from 'react-router-dom'

import Splash from '../presentational/Splash'

const SplashWrapper = ({ location, history, onSearch, onDiscover }) => {
  return (
    <div className={ `splash-wrapper${ location.pathname != '/' ? history.action == 'POP' ? ' close-no-anim' : ' close' : '' }` }>
      <Splash onSearch={ onSearch } onDiscover={ onDiscover } />
    </div>
  )
}

export default withRouter(SplashWrapper)
