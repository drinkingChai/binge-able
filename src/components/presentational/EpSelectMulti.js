import React, { Component } from 'react'

import EpSelect from './EpSelect'
import Button from './Button'

class EpSelectMulti extends Component {
  state = {
    seasonData: { season: 0, episodes: [] }
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  componentWillReceiveProps = nextProps => {
    this.setState(nextProps)
  }

  selectAll = bool => {
    const { seasonData } = this.state
    if (bool) {
      seasonData.episodes = seasonData.episodes.map(e => { e.available = true; return e; })
    } else {
      seasonData.episodes = seasonData.episodes.map(e => { e.available = false; return e; })
    }
    this.setState(seasonData)
  }

  render = () => {
    return (
      <div>
        <EpSelect { ...this.state } />

        <div className='ep-select-multi-footer'>
          <p className='vendor-name'>select availability by clicking circles or</p>
          <div className='btn-container'>
            <Button label='ALL' onClick={ () => this.selectAll(true) } />
            <Button label='NONE' onClick={ () => this.selectAll(false) } />
          </div>
        </div>
      </div>
    )
  }
}

export default EpSelectMulti
