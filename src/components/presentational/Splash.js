import React from 'react'

import posters from '../../../json/posters'
import Button from './Button'
import Search from './Search'

export default function () {
  return (
    <div className='splash'>
      <div className='images'>
      { 
        posters.map((url, i) =>
          <div className={ `img-wrapper img-delay-${Math.floor(Math.random() * 3) + 2}` } key={ i }>
            <img
              src={ url }
              className={ `img-size-${Math.round(Math.random())}` }
              ref={ imgNode => {
              }} />
          </div>
        )
      }
      </div>

      <div className='overlay'>
        <div className='headlines'>
          <h1>Binge-able</h1>
          <h2>Find your next show</h2>
        </div>

        <div className='search-discover'>
          <Search />
          <div>OR</div>
          <Button label='DISCOVER' />
        </div>
      </div>
    </div>
    )
}
