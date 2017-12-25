import React, { Component } from 'react'

import EpSelect from './EpSelect'
import EpSelectMulti from './EpSelectMulti'
import Counter from './Counter'
import Button from './Button'

export default class AddSeason extends Component {
  state = { episodes: [] }

  componentDidMount = () => {
    this.setState({ season: this.props.season })
  }

  updateEpCount = n => {
    const { episodes } = this.state
    if (episodes.length < n) {
      while(episodes.length < n) {
        episodes.push({ available: false })
      }
    } else {
      while(episodes.length > n) {
        episodes.pop()
      }
    }
    this.setState({ episodes })
  }

  render = () => {
    return (
      <div className='survey add-season panel'>
        <div className='survey-title'>
          <h3>Survey</h3>
            <img className='vendor-logo' src={ this.props.vendor.logo }/>
          <h3>{ this.props.title }</h3>
        </div>

        <div className='survey-body'>
          <p className='vendor-name'>ADD EPISODES</p>
          <Counter onChange={ this.updateEpCount } />
        </div>
        <EpSelectMulti seasonData={ this.state } />

        <div className='survey-footer'>
          <Button label='ADD SEASON' onClick={ () => console.log(this.state) }/>
          <Button label='FINISHED' />
        </div>
        
        <Button label={ <i className="fas fa-chevron-left"></i> } className='ba-btn default round prev-page' /> 
        <Button label={ <i className="fas fa-chevron-right"></i> } className='ba-btn default round next-page' /> 
      </div>
    )
  }
}
