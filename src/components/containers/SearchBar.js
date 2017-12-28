import React from 'react'
import { Link } from 'react-router-dom'
import qs from 'query-string'

import SearchInput from '../presentational/SearchInput'

export default function ({ location }) {
  return (
    <div className='search-bar'>
      <Link to='/'><h4>BINGE-ABLE</h4></Link>
      <SearchInput input={ qs.parse(location.search).title } />
    </div>
  )
}
