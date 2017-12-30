import React from 'react'

export default function (props) {
  return (
    <div className='imdb-rating'>
      <img src='/public/assets/star.png' />
      <span>{ props.rating }<span className='10'>/10</span></span>
    </div>
  )
}
