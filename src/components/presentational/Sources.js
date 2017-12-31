import React, { Component } from 'react'

import EpSelect from './EpSelect'
import SourcesCarousel from './SourcesCarousel'
import Button from './Button'

// helper
// add all services and all episodes
const createEmptySources = (seasons, services) => {
  return services.map(service => {
    return {
      name: service.name,
      logo: service.logo,
      seasons: seasons.map((season, i) => {
        let epArray = []
        for (let i = 0; i < season.episodes; i++) epArray.push({ ep: i, available: false })
        return {
          seasonNum: season.seasonNum,
          episodes: epArray
        }
      })
    }
  })
}

class Sources extends Component {
  state = {
    sources: [{}],
    current: 0
  }

  componentDidMount = () => {
    if (this.props.isSurvey) this.setState({ sources: createEmptySources(this.props.info.seasons, this.props.services) })
    else this.setState({ sources: this.props.sources || [] })
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.isSurvey) this.setState({ sources: createEmptySources(nextProps.info.seasons, nextProps.services) })
    else this.setState({ sources: nextProps.sources || [] })
  }
  handleCarouselChange = i => {
    this.setState({
      current: i,
      sources: this.props.isSurvey ? createEmptySources(this.props.info.seasons, this.props.services) : this.state.sources }) // heavy
  }
  getSurveyData = () => this.props.onNext(this.state.sources[this.state.current])

  render = () => {
    const { sources, current } = this.state
    const { hidden, onBack, onNext, backLabel, nextLabel, hideDir, clickDisabled, isSurvey } = this.props
    let source = sources[+current], seasons = source.seasons || []

    return (
      <div className={ `sources${ hidden ? ` hidden${hideDir && `-${hideDir}` || ''}` : ''}` }>
        <div className='seasons'>
          <SourcesCarousel sources={ sources } onChange={ this.handleCarouselChange } />
          <div className='episodes-container'>
          { seasons.map((season, i) =>
            <EpSelect
              seasonNum={ season.seasonNum }
              episodes={ season.episodes }
              clickDisabled={ isSurvey ? false : true }
              key={ i } />) }
          </div>
        </div>

        <div className='legend'>
          <div>
            <span className='bubble filled'></span>
            Available
          </div>
          <div>
            <span className='bubble'></span>
            Unavailable
          </div>
        </div>

        <div className='panel-bottom'>
          <Button label={ backLabel || 'BACK' } onClick={ onBack } className='' />
          <div className='divider'></div>
          <Button label={ nextLabel || 'ADD SOURCE INFO' } onClick={ isSurvey ? this.getSurveyData : onNext } className='' />
        </div>
      </div>
    )
  }
}

export default Sources
