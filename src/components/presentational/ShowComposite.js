import React, { Component } from 'react'

import Show from './Show'
import ShowDetails from './ShowDetails'

export default class ShowComposite extends Component {
  state = {
    page: ['preview', 'details', 'sources', 'survey'],
    current: 0 // default 0
  }

  swipe = direction => {
    if (direction == 'right') this.setState({ current: this.state.current + 1 })
    if (direction == 'left') this.setState({ current: this.state.current - 1 })
  }

  render = () => {
    const { page, current } = this.state

    return (
      <div className='show-composite'>
        <Show info={ this.props.data } hidden={ page[current] != 'preview' } onDetailsClick={ () => this.swipe('right') } />
        <ShowDetails info={ this.props.data } hidden={ page[current] != 'details' } onBack={ () => this.swipe('left') } />
      </div>
    )
  }
}
