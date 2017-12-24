import React from 'react'

export default function (props) {
  return <a className='ba-btn default' { ...props }>{ props.label }</a>
}
