import React from 'react'
import { Link } from 'react-router-dom'


export default function ({ location, history }) {
  return (
    <div className='search-bar' style={{ height: '50px' }}> { /* temp: remove */ }
      <Link to='/' className='large'><h4>BINGE-ABLE</h4></Link>
      { /* <Link to='/' className='small'><h4>B</h4></Link> */ }
    </div>
  )
}
