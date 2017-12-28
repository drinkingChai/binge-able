import React, { Component } from 'react'

import Button from './Button'

export default class Search extends Component {
  state = {
    input: ''
  }

  componentDidMount = () => this.setState(this.props)
  componentWillReceiveProps = nextProps => this.setState(nextProps)

  handleChange = ev => {
    this.setState({ input: ev.target.value }, () => { 
      // this.props.onChange && this.props.onChange(this.state.input)
    })
  }

  handleClick = ev => {
    ev.preventDefault()
    if (!this.state.input.length) return
    this.props.onClick && this.props.onClick(this.state.input)
  }

  render = () => {
    return (
      <form className='search' onSubmit={ this.handleClick }>
        <input value={ this.state.input } onChange={ this.handleChange } placeholder='SEARCH' />
        <Button
          label={ <i className="fas fa-arrow-right"></i> }
          className={ `ba-btn round ${ this.state.input.length && 'active'}` }
          onClick={ this.handleClick } />
      </form>
    )
  }
}
