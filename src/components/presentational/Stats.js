import React from 'react'

export default function (props) {
  return (
    <div className='stats'>
      <span className='stats-label'>{ props.label }</span>
      <span className={ `stats-value ${props.valueClass || ''}` }>{ props.value }</span>
    </div>
  )
}
