import React from 'react'

import Button from './Button'
import IMDbRating from './IMDbRating'

export default function (props) {
  const { info, onDetails, hidden } = props

  return (
    <div className={ `show${ hidden ? ' hidden' : ''}` }>
      <img src={ info.poster } />
      <div className='overlay'>
        <div className='show-info'>
          <h3>{ info.title }</h3>
          <span className='genre'>{ info.genre }</span>
          <p>{ info.plot.slice(0, 100) }{ info.plot.length > 100 ? '...' : ''}</p>
          <IMDbRating rating={ info.imdbRating } />
        </div>

        <div className='panel-bottom'>
          <span>BINGE-ABLE { info.bingeable }</span>
          <div className='divider'></div>
          <Button label='DETAILS' onClick={ onDetails } className='' />
        </div>
      </div>
    </div>
  )
}
