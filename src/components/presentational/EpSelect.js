import React, { Component } from 'react'

export default class EpSelect extends Component {
  state = {
    vendorData: { season: '', episodes: [] }
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  onSelect = i => {
    let { episodes } = this.state.vendorData
    episodes[i].available = !episodes[i].available
    this.setState(episodes)
  }

  render = () => {
    let { season, episodes } = this.state.vendorData

    return (
      <div className='ep-select'>
        <span className='season-title'>SEASON { season }</span>
        {
          episodes.map((d, i) =>
            <span
              className={ `bubble ${ d.available ? 'filled' : '' }` }
              key={ i }
              onClick={ () => !this.props.clickDisabled && this.onSelect(i) }></span>)
        }
      </div>
    )
  }
}
