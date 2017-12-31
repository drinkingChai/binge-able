import React from 'react'
import { Link } from 'react-router-dom'
import qs from 'query-string'

import SearchInput from '../presentational/SearchInput'

export default function ({ location, history }) {
  return (
    <div className='search-bar'>
      <Link to='/' className='large'><h4>BINGE-ABLE</h4></Link>
      { /* <Link to='/' className='small'><h4>B</h4></Link> */ }
      <SearchInput input={ qs.parse(location.search).title || '' } onClick={ input => history.push(`/search?title=${input}`) } />
    </div>
  )
}
