import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

// ****** remove ****** //
import sourcestest from '../../../json/sourcestest'
// ****** remove ****** //

import { toggleModal } from '../../actions'
import Sources from '../presentational/Sources'

class SourcesWrapper extends Component {
  state = {
    sourcesData: {
      vendors: [{ seasons: [] }]
    }
  }

  preventScroll = ev => {
    // window.scrollTo(0, 0)
    return
  }

  componentDidMount = () => {
    document.body.classList.add('modal-open')
    this.setState(this.props)
  }
  componentWillReceiveProps = nextProps => {
    document.body.classList.add('modal-open')
    this.setState(nextProps)
  }

  componentWillUnmount = () => {
    document.body.classList.remove('modal-open')
  }

  closeModal = () => {
    this.props.history.goBack()
    this.props.toggleModal()
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
