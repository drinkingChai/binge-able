import React from 'react'

import Stats from './Stats'
import Button from './Button'
import IMDb from './IMDb'
import IMDbRating from './IMDbRating'
import Poster from './Poster'

export default function (props) {
  const { data } = props

  return (
    <div className='movie'>
      <div className='movie-info'>
        <Poster url={ data.poster } />
        <div className='movie-text-stats'>
          <div className='movie-text'>
            <h3>{ data.title }</h3>
            <span className='year'>{ data.year }</span>
            <p>{ data.plot }</p>
          </div>

          <div className='movie-stats'>
            <Stats label='HOURS' value={ data.hours } />
            <Stats label='BINGE-ABILITY' value={ data.bingeability || '%' } valueClass={ !data.bingeability ? 'red' : '' } />
          </div>
        </div>
      </div>

      <div className='movie-links'>
        <IMDb imdbID={ data.imdbID }/>
        <IMDbRating rating={ data.imdbRating } />
        <Button label='SOURCES' />
      </div>
    </div>
  )
}
