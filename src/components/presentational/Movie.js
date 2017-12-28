import React from 'react'

import Stats from './Stats'
import Button from './Button'
import IMDb from './IMDb'
import IMDbRating from './IMDbRating'
import Poster from './Poster'

export default function (props) {
  const { data, onSourcesClick } = props

  return (
    <div className='movie panel'>
      <div className='movie-info'>
        <Poster url={ data.poster } />
        <div className='movie-text'>
          <h3>{ data.title }</h3>
          <span className='year'>{ data.year }</span>
          <p>{ data.plot.slice(0, 110) }{ data.plot.length > 110 ? '...' : ''}</p>
        </div>
      </div>

      <div className='movie-links'>
        <div className='movie-stats'>
          <Stats label='HOURS' value={ data.hours } valueClass='hours' />
          <Stats label='BINGE-ABLE' value={ data.bingeability || '%' } valueClass={ !data.bingeability ? 'x-binge-able' : 'binge-able' } />
          <IMDbRating rating={ data.imdbRating } />
          <IMDb imdbID={ data.imdbID }/>
        </div>
        <div className='btn-container'>
          <Button label='SOURCES' onClick={ onSourcesClick } />
        </div>
      </div>
    </div>
  )
}
