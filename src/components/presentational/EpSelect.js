import React, { Component } from 'react'

export default class EpSelect extends Component {
  state = { episodes: [], seasonNum: 0 }

  componentDidMount = () => { this.setState({ ...this.props }) }
  componentWillReceiveProps = nextProps => { this.setState({ ...nextProps }) }

  toggle = i => {
    let { episodes } = this.state.seasonData
    episodes[i].available = !episodes[i].available
    this.setState(episodes)
  }

  render = () => {
    let { episodes, seasonNum } = this.state

    return (
      <div className='ep-select-container'>
        <div className='season-title'><span>SEASON { seasonNum }</span></div>
        <div className='ep-select'>
        { episodes.map((d, i) =>
          <span
            className={ `bubble ${ d.available ? 'filled' : '' }` }
            key={ i }
            onClick={ () => !this.props.clickDisabled && this.toggle(i) }>{ d.ep }</span>) }
        </div>
      </div>
    )
  }
}
