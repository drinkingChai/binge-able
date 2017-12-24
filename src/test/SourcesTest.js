import React, { Component } from 'react'

// components
import EpSelect from '../components/presentational/EpSelect'

const MovieTest = () => {
  let sourcesData = {
    title: 'Stranger Things',
    episodes: {
      netflix: {
        1: {
          available: [1, 2, 3, 4, 5],
          total: 6
        },
        2: {
          available: [1, 2, 3, 4, 5, 6, 7],
          total: 7
        },
        3: {
          available: [5, 6, 7],
          total: 7
        }
      }
    }
  }

  return (
    <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
      <EpSelect vendorData={ sourcesData.episodes.netflix[1] } />
      
    </div>
  )
}

export default MovieTest 
