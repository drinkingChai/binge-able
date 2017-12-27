import React, { Component } from 'react'

import EpSelect from './EpSelect'
import Counter from './Counter'
import Button from './Button'

export default class AddSeason extends Component {
  state = {
    vendor: {},
    showData: { episodes: [] }
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  selectAll = bool => {
    const { showData } = this.state
    let toggled = showData.episodes.map(season => {
      season.episodes = season.episodes.map(ep => {
        ep.available = bool || false
        return ep
      })
      return season
    })
    showData.episodes = toggled
    this.setState({ showData })
  }

  render = () => {
    const { showData, vendor } = this.state

    return (
      <div className='survey add-season panel'>
        <div className='survey-title'>
          <h3>Survey</h3>
          <img className='vendor-logo' src={ vendor.logo }/>
          <h3>{ showData.title }</h3>
        </div>

        <div className='survey-body'>
          <p>select availability by clicking the circles</p>
          <div className='btn-container'>
            <Button label='ALL' onClick={ () => this.selectAll(true) } />
            <Button label='NONE' onClick={ () => this.selectAll(false) } />
          </div>
          {
            showData.episodes.map((season, i) =>
              <EpSelect seasonData={ season } key={ i } />
            )
          }
        </div>

        <div className='survey-footer'>
          <Button label='FINISHED' />
        </div>
        
        <Button label={ <i className="fas fa-chevron-left"></i> } className='ba-btn default round prev-page' /> 
        <Button label={ <i className="fas fa-chevron-right"></i> } className='ba-btn default round next-page' /> 
      </div>
    )
  }
}
