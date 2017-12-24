import React, { Component } from 'react'

// components
import EpSelect from '../components/presentational/EpSelect'

const MovieTest = () => {
  let sourcesData = {
    title: 'Stranger Things',
    vendors: [
    {
      name: 'Netflix',
      seasons: [
        {
          season: 1,
          episodes: [
            { ep: 1, available: true },
            { ep: 2, available: true },
            { ep: 3, available: true },
            { ep: 4, available: true },
            { ep: 5, available: true },
            { ep: 6, available: false }
          ]
        },
        {
          season: 2,
          episodes: [
            { ep: 1, available: true },
            { ep: 2, available: true },
            { ep: 3, available: false },
            { ep: 4, available: true },
            { ep: 5, available: true },
            { ep: 6, available: false },
            { ep: 6, available: false }
          ]
        } ]
      }
    ]
  }

  return (
    <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
      <div className='ep-container'>
        <EpSelect vendorData={ sourcesData.vendors[0].seasons[0] } clickDisabled />
        <EpSelect vendorData={ sourcesData.vendors[0].seasons[1] } />
      </div>
      
    </div>
  )
}

export default MovieTest 
