import React, { Component } from 'react'

export default class EpSelect extends Component {
  state = {
    seasonData: { season: 0, episodes: [] }
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  componentWillReceiveProps = nextProps => {
    this.setState(nextProps)
  }

  toggle = i => {
    let { episodes } = this.state.seasonData
    episodes[i].available = !episodes[i].available
    this.setState(episodes)
  }

  render = () => {
    let { season, episodes } = this.state.seasonData

    return (
      <div className='ep-select'>
        <span className='season-title'>SEASON { season }</span>
        {
          episodes.map((d, i) =>
            <span
              className={ `bubble ${ d.available ? 'filled' : '' }` }
              key={ i }
              onClick={ () => !this.props.clickDisabled && this.toggle(i) }>
              { 
                // d.available ?
                // <i className="fas fa-check"></i> :
                // <i className="fas fa-times"></i>
              }
            </span>)
        }
      </div>
    )
  }
}
