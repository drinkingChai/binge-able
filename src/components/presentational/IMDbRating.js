import React from 'react'

export default function (props) {
  return (
    <div className='imdb-rating'>
      <div className='inner'>
        <img src='/public/assets/star.png' />
        <span>{ props.rating }/10</span>
      </div>
    </div>
  )
}
