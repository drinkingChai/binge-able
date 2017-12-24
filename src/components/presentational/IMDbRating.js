import React from 'react'

export default function (props) {
  return (
    <div className='stats'>
      <div className='stats-label'>RATING</div>
      <div className='imdb-rating'>
        <img src='/public/assets/star.png' />
        <span>{ props.rating }</span>
      </div>
    </div>
  )
}
