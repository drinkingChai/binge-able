import React, { Component } from 'react'

import SurveyOpening from '../components/presentational/SurveyOpening'
import AddSeason from '../components/presentational/AddSeason'

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

class SurveyTest extends Component {
  render = () => {
    return (
      <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
        <div style={{ backgroundColor: '#211B39', padding: '30px' }}>

            <SurveyOpening vendors={ vendors } title='Stranger Things' onNext='stuff' />
            <br/>
            <AddSeason title='Stranger Things' vendor={ vendors[0] } season='1' onNext='stuff' onPrev='stuff' />

        </div>
      </div>
    )
  }
}

export default SurveyTest
