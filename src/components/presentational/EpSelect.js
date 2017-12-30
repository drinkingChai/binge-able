import React, { Component } from 'react'

export default class EpSelect extends Component {
  state = { episodes: [] }

  componentDidMount = () => { this.setState(this.props) }
  componentWillReceiveProps = nextProps => { this.setState(nextProps) }

  toggle = i => {
    let { episodes } = this.state.seasonData
    episodes[i].available = !episodes[i].available
    this.setState(episodes)
  }

  render = () => {
    let { episodes } = this.state

    return (
      <div className='ep-select'>
        { episodes.map((d, i) =>
          d.type == 'season' ?
          <span
            className='season-title'
            key={ i }><span>SEASON { d.seasonNum }</span></span> :
          <span
            className={ `bubble ${ d.available ? 'filled' : '' }` }
            key={ i }
            onClick={ () => !this.props.clickDisabled && this.toggle(i) }>{ d.episodeNum }</span>) }
      </div>
    )
  }
}
