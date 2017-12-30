import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

// ****** remove ****** //
import sourcestest from '../../../json/sourcestest'
import movietest from '../../../json/movietest'
// ****** remove ****** //

import { toggleModal } from '../../actions'
import Sources from '../presentational/Sources'

class SourcesWrapper extends Component {
  state = {
    sourcesData: {
      vendors: [{ seasons: [] }]
    }
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  componentWillReceiveProps = nextProps => {
    this.setState(nextProps)
  }

  componentWillUnmount = () => {
  }

  render = () => {
    return (
      <div className='sources-wrapper'>
        <Sources sourcesData={ this.state.sourcesData } />
      </div>
    )
  }
}

const mapState = ({ shows, modal }) => ({
  sourcesData: sourcestest,
  modal
})
export default connect(mapState, { toggleModal })(SourcesWrapper)
