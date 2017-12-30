import React, { Component } from 'react'

import EpSelect from './EpSelect'
import SourcesCarousel from './SourcesCarousel'
import Button from './Button'

class Sources extends Component {
  state = {
    sources: [{}],
    current: 0
  }

  componentDidMount = () => { this.setState({ sources: this.props.sources || [] }) }
  componentWillReceiveProps = nextProps => { this.setState({ sources: nextProps.sources || [] }) }
  handleCarouselChange = i => { this.setState({ current: i }) }

  render = () => {
    const { sources, current } = this.state
    const { hidden, onBack, onSurvey } = this.props
    let source = sources[+current], seasons = source.seasons || []

    console.log(seasons)

    return (
      <div className={ `sources${ hidden ? ' hidden' : ''}` }>
        <div className='seasons'>
          <SourcesCarousel sources={ sources } />
          <div className='episodes-container'>
          { seasons.map((season, i) => <EpSelect seasonNum={ season.seasonNum } episodes={ season.episodes } clickDisabled key={ i } />) }
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
          <Button label='BACK' onClick={ onBack } className='' />
          <div className='divider'></div>
          <Button label='ADD SOURCE INFO' onClick={ onSurvey } className='' />
        </div>
      </div>
    )
  }
}

export default Sources
