import React from 'react'

export default function (props) {
  return (
    <a href={ `http://www.imdb.com/title/${props.imdbID}` } className='imdb' target='_blank'>
      <img src='/public/assets/IMDb.png' />
    </a>
  )
}
