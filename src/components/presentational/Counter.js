import React, { Component } from 'react'

import Button from './Button'

export default class Counter extends Component {
  state = { count: 0 }

  handleChange = e => {
    let newValue = this.state.count
    if (typeof e == 'string') {
      if (e == 'increment') newValue++
      else if (e == 'decrement') newValue--
    }
    else {
      newValue = +e.target.value
    }

    if (newValue >= 0) {
      this.props.onChange && this.props.onChange(newValue)
      this.setState({ count: newValue })
    } else {
      this.setState({ count: 0 })
    }
  }

  render = () => {
    return (
      <div className='counter'>
        <Button label={ <i className="fas fa-minus"></i> } className='ba-btn round teal' onClick={ () => this.handleChange('decrement') } />
        <input type='number' value={ this.state.count } onChange={ this.handleChange } />
        <Button label={ <i className="fas fa-plus"></i> } className='ba-btn round teal' onClick={ () => this.handleChange('increment') } />
      </div>
    )
  }
}
