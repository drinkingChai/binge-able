import React, { Component } from 'react'

import Button from './Button'

export default class Counter extends Component {
  state = { count: 0 }

  handleChange = e => {
    let { count } = this.state
    if (typeof e == 'string') {
      if (e == 'increment') count++
      else if (e == 'decrement') count--
    }
    else {
      count = +e.target.value
    }

    if (count >= 0) {
      this.setState({ count: count }, () => {
        this.props.onChange && this.props.onChange(this.state.count)
      })
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
