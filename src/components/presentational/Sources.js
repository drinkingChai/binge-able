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

    // flatten season data
    const episodes = seasons && seasons.reduce((arr, season) => {
      let toConcat = [ { type: 'season', seasonNum: season.season } ] // season num
      season.episodes.forEach(episode => toConcat.push({ type: 'episode', episodeNum: episode.ep, available: episode.available })) // ep num
      arr = arr.concat(toConcat)
      return arr
    }, [])

    console.log(episodes)

    return (
      <div className={ `sources${ hidden ? ' hidden' : ''}` }>
        <div className='seasons'>
          <SourcesCarousel sources={ sources } />
          <EpSelect episodes={ episodes } clickDisabled />
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
