import React from 'react'

import Poster from './Poster'
import Button from './Button'
import IMDbRating from './IMDbRating'

export default function (props) {
  const { info, hidden, onBack, onSources } = props

  return (
    <div className={ `show details${ hidden ? ' hidden' : ''}` }>
      <div className='detail-stats'>
        <Poster url={ info.poster } />
        <div className='stats'>
          <h3>{ info.title }</h3>
          <div><span>Released</span><span>{ info.released }</span></div>
          <div><span>Binge-Able</span><span>{ info.bingeable }</span></div>
          <div><span>Hours</span><span>{ info.hours }</span></div>
          <div><span>IMDB rating</span><span>{ info.imdbRating }/<span className='small'>10</span></span></div>
        </div>
      </div>

      <div>
        <h4>Summary</h4>
        <p>{ info.plot }</p>
      </div>

      <div className='panel-bottom'>
        <Button label='BACK' onClick={ onBack } className='' />
        <div className='divider'></div>
        <Button label='VIEW SOURCES' onClick={ onSources } className='' />
      </div>
    </div>
  )
}
