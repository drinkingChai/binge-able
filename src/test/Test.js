import React, { Component } from 'react'

// components
import Stats from '../components/presentational/Stats'
import Button from '../components/presentational/Button'
import IMDb from '../components/presentational/IMDb'
import IMDbRating from '../components/presentational/IMDbRating'
import Poster from '../components/presentational/Poster'

class Test extends Component {
  componentDidMount = () => {
  }
  
  render = () => {
    let url = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjUwMDgzOTg3Nl5BMl5BanBnXkFtZTgwNTI4MDk5MzI@._V1_SX300.jpg'

    return (
      <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
        <Stats label='BINGE-ABILITY' value='100%'/>
        <Stats label='HOURS' value='140'/>
        <Button label='SOURCES' />
        <Button label='SURVEY NEW INFO' />
        <Button label='CONFIRM CURRENT INFO' />
        <IMDb imdbID='tt4574334' />
        <IMDbRating rating='9' />
        <Poster url={ url } />
      </div>
    )
  }
}

export default Test 
