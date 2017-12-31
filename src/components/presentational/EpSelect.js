import React, { Component } from 'react'

export default class EpSelect extends Component {
  state = { episodes: [], seasonNum: 0 }

  componentDidMount = () => { this.setState({ ...this.props }) }
  componentWillReceiveProps = nextProps => { this.setState({ ...nextProps }) }

  toggle = i => {
    let { episodes } = this.state
    episodes[i].available = !episodes[i].available
    this.setState({ episodes })
  }

  selectAll = all => {
    if (all) this.setState({ episodes: this.state.episodes.map(ep => { ep.available = true; return ep }) })
    else this.setState({ episodes: this.state.episodes.map(ep => { ep.available = false; return ep }) })
  }

  render = () => {
    let { episodes, seasonNum } = this.state

    return (
      <div className='ep-select-container'>
        <div className='season-title'>
          <span>SEASON { seasonNum }</span>
          { !this.props.clickDisabled ? <span onClick={ () => this.selectAll(true) }>ALL</span> : null }
          { !this.props.clickDisabled ? <span onClick={ () => this.selectAll(false) }>NONE</span> : null }
        </div>
        <div className='ep-select'>
        { episodes.map((d, i) =>
          <span
            className={ `bubble ${ d.available ? 'filled' : '' } ${ !this.props.clickDisabled ? 'clickable': '' }` }
            key={ i }
            onClick={ () => !this.props.clickDisabled && this.toggle(i) }>{ d.ep }</span>) }
        </div>
      </div>
    )
  }
}
