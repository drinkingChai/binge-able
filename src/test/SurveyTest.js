import React, { Component } from 'react'

import SurveyOpening from '../components/presentational/SurveyOpening'
import AddSeason from '../components/presentational/AddSeason'
import Survey from '../components/presentational/Survey'

const vendors = [
  {
    name: 'Netflix',
    logo: '/public/assets/vendor/netflix.png'
  },
  {
    name: 'Amazon Prime Video',
    logo: '/public/assets/vendor/amazon.png'
  },
  {
    name: 'Hulu',
    logo: '/public/assets/vendor/hulu.png'
  }
]

const showData = {
  title: 'Stranger Things',
  episodes: [
    {
      season: 1,
      episodes: [
        { ep: 1, available: false },
        { ep: 2, available: false },
        { ep: 3, available: false },
        { ep: 4, available: false },
        { ep: 5, available: false },
        { ep: 6, available: false } ]
    },
    {
      season: 2,
      episodes: [
        { ep: 1, available: false },
        { ep: 2, available: false },
        { ep: 3, available: false },
        { ep: 4, available: false },
        { ep: 5, available: false },
        { ep: 6, available: false },
        { ep: 6, available: false }
      ]
    }
  ]
}

class SurveyTest extends Component {
  render = () => {
    return (
      <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
          {
            <SurveyOpening vendors={ vendors } title='Stranger Things' onNext='stuff' />
            // <br/>
            // <AddSeason title='Stranger Things' vendor={ vendors[0] } season='1' onNext='stuff' onPrev='stuff' />
          }
          <br/>
          {
            <Survey vendor={ vendors[0] } showData={ showData } />
          }
      </div>
    )
  }
}

export default SurveyTest
