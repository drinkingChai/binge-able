import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sources from '../presentational/Sources'

class SourcesWrapper extends Component {
  state = {}

  render = () => {
    return (
      <div>
        <Sources />
      </div>
    )
  }
}

export default connect()(SourcesWrapper)
