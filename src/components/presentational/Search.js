import React, { Component } from 'react'

import Button from './Button'

export default class Search extends Component {
  state = {
    input: ''
  }

  handleChange = ev => {
    this.setState({ input: ev.target.value }, () => { 
      // this.props.onChange && this.props.onChange(this.state.input)
    })
  }

  handleClick = ev => {

  }

  render = () => {
    return (
      <form className='search'>
        <input value={ this.state.input } onChange={ this.handleChange } placeholder='SEARCH' />
        <Button label={ <i className="fas fa-arrow-right"></i> } className={ `ba-btn round ${ this.state.input.length && 'active'}` } />
      </form>
    )
  }
}
