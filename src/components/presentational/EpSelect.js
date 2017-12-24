import React, { Component } from 'react'

export default class EpSelect extends Component {
  state = {
    selected: {},
    total: []
  }

  componentDidMount = () => {
    let total = [], count = 0
    while (count < this.props.vendorData.total) {
      total.push('')
      this.setState({ i: false })
      count++
    }
  }

  onSelect = n => {

  }

  render = () => {

    

    return (
      <div className='ep-select'>
      {
        total.map((b, i) => <span className='bubble' key={ i }></span>)
      }
      </div>
    )
  }
}
