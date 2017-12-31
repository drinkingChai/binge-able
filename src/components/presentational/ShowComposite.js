import React, { Component } from 'react'

/******* remove ********/
import servicesdata from '../../../json/servicesdata'
/******* remove ********/

import Show from './Show'
import ShowDetails from './ShowDetails'
import Sources from './Sources'

export default class ShowComposite extends Component {
  state = {
    page: ['preview', 'details', 'sources', 'survey'],
    current: 0 // default 0
  }

  swipe = direction => {
    if (direction == 'right') this.setState({ current: this.state.current + 1 })
    if (direction == 'left') this.setState({ current: this.state.current - 1 })
  }

  submitSurvey = data => {
    console.log(data)
  }

  // onNext pass ref of node, apply slide-right
  // onBack pass ref, apply slide-left

  render = () => {
    const { page, current } = this.state

    return (
      <div className='show-composite'>
        <Show
          info={ this.props.data }
          hidden={ page[current] != 'preview' }
          onDetails={ () => this.swipe('right') } />
        <ShowDetails
          info={ this.props.data }
          hidden={ page[current] != 'details' }
          onBack={ () => this.swipe('left') }
          onNext={ () => this.swipe('right') } />
        <Sources
          info={ this.props.data } // (unused) may use this for all comps
          sources={ this.props.data.sources } // using this for now
          hidden={ page[current] != 'sources' }
          onBack={ () => this.swipe('left') }
          onNext={ () => this.swipe('right') } />
        <Sources
          info={ this.props.data } // (unused) may use this for all comps
          sources={ this.props.data.sources } // using this for now
          services={ servicesdata }
          hidden={ page[current] != 'survey' }
          onBack={ () => this.swipe('left') }
          backLabel={ 'CANCEL' }
          onNext={ this.submitSurvey }
          nextLabel={ 'SUBMIT' }
          hideDir='right'
          isSurvey={ true } />
      </div>
    )
  }
}
