import React from 'react'
import { withRouter } from 'react-router-dom'

import Splash from '../presentational/Splash'

const SplashWrapper = ({ location, onSearch }) => {
  return (
    <div className={ `splash-wrapper${ location.pathname != '/' ? ' close' : '' }` }>
      <Splash onSearch={ onSearch } />
    </div>
  )
}

export default withRouter(SplashWrapper)
