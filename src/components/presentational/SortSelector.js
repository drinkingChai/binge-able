import React, { Component } from 'react'

import Button from './Button'

export default class SortSelector extends Component {
  state = { ddActive: false, options: [], current: 0, order: 'ASC' } // or DSC

  componentDidMount = () => {
    this.setState({ options: this.props.options })
  }

  handleSelect = i => {
    document.removeEventListener('click', this.handleEvent)
    this.setState({ ddActive: false, current: i }, () => {
      this.props.onChange && this.props.onChange(this.state)
    })
  }

  toggleOrder = () => {
    this.setState({ order: this.state.order == 'ASC' ? 'DSC' : 'ASC' }, () => {
      this.props.onChange && this.props.onChange(this.state)
    })
  }

  toggleDropdown = () => {
    let { ddActive } = this.state
    ddActive = !ddActive
    this.setState({ ddActive })

    if (ddActive) {
      document.addEventListener('click', this.handleEvent)
    } else {
      document.removeEventListener('click', this.handleEvent)
    }
  }

  handleEvent = e => {
    let inDD = this.node.contains(e.target)
    if (!inDD) {
      document.removeEventListener('click', this.handleEvent)
      this.setState({ ddActive: false })
    }
  } 

  render = () => {
    let { options, current, ddActive } = this.state

    return (
      <div ref={ node => this.node = node } className='order-selector'>
        <Button label={ options[current] } className={ `ba-btn dd-label ${ddActive && 'place-above'}` } onClick={ this.toggleDropdown } />
        <span onClick={ this.toggleOrder } className={ `toggle-order toggle-dd ${ddActive && 'place-above'}` }><i className="fas fa-arrows-alt-v"></i></span>
        <div className={ `order-dd year-dd ${ddActive && 'dd-active place-above' || ''}` }>
        {
          options.map((opt, i) => <div onClick={ () => this.handleSelect(i) } key={ i }>{ opt }</div>)
        }
        </div>
      </div>
    )
  }
}
