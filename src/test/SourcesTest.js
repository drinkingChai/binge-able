import React, { Component } from 'react'

// components
import EpSelect from '../components/presentational/EpSelect'
import VendorCarousel from '../components/presentational/VendorCarousel'

const MovieTest = () => {
  let sourcesData = {
    title: 'Stranger Things',
    vendors: [
      {
        name: 'Netflix',
        logo: '/public/assets/vendor/netflix.png',
        seasons: [
          {
            season: 1,
            episodes: [
              { ep: 1, available: true },
              { ep: 2, available: true },
              { ep: 3, available: true },
              { ep: 4, available: true },
              { ep: 5, available: true },
              { ep: 6, available: false } ]
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
          }
        ]
      },
      {
        name: 'Amazon Prime Video',
        logo: '/public/assets/vendor/amazon.png',
        seasons: [
          {
            season: 1,
            episodes: [
              { ep: 1, available: true },
              { ep: 2, available: true },
              { ep: 3, available: true },
              { ep: 4, available: true },
              { ep: 5, available: true },
              { ep: 6, available: false } ]
          }
        ] 
      },
      {
        name: 'Hulu',
        logo: '/public/assets/vendor/hulu.png',
        seasons: [
          {
            season: 3,
            episodes: [
              { ep: 1, available: false },
              { ep: 2, available: false },
              { ep: 3, available: true },
              { ep: 4, available: true },
              { ep: 5, available: true },
              { ep: 6, available: true } ]
          }
        ] 
      }
    ]
  }

  return (
    <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
      <div className='ep-container'>
        <EpSelect vendorData={ sourcesData.vendors[0].seasons[0] } clickDisabled />
        <EpSelect vendorData={ sourcesData.vendors[0].seasons[1] } />
      </div>

      <VendorCarousel vendorArray={ [ sourcesData.vendors[0], sourcesData.vendors[1], sourcesData.vendors[2] ] } />
      
    </div>
  )
}

export default MovieTest 
