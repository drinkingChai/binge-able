import React, { Component } from 'react'

// components
import Stats from '../components/presentational/Stats'
import Button from '../components/presentational/Button'
import IMDb from '../components/presentational/IMDb'
import IMDbRating from '../components/presentational/IMDbRating'
import Poster from '../components/presentational/Poster'
import Movie from '../components/presentational/Movie'

const MovieTest = () => {
  let url = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjUwMDgzOTg3Nl5BMl5BanBnXkFtZTgwNTI4MDk5MzI@._V1_SX300.jpg'
  let movieData = {
    title: 'Stranger Things',
    year: '2016',
    hours: '140',
    bingeability: '100%',
    plot: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjUwMDgzOTg3Nl5BMl5BanBnXkFtZTgwNTI4MDk5MzI@._V1_SX300.jpg',
    imdbRating: '9.0',
    imdbID: 'tt4574334'
  }
  let movieData2 = {
    title: 'Sherlock',
    year: '2010',
    hours: '45',
    bingeability: null,
    plot: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg',
    imdbRating: '9.2',
    imdbID: 'tt1475582'
  }

  return (
    <div style={{ backgroundColor: '#3F395C', padding: '30px' }}>
      <div style={{ display: 'flex' }}>
        <Stats label='BINGE-ABILITY' value='100%'/>
        <Stats label='HOURS' value='140'/>
      </div>
      <Button label='SOURCES' />
      <Button label='SURVEY NEW INFO' />
      <Button label='CONFIRM CURRENT INFO' />
      <IMDb imdbID='tt4574334' />
      <IMDbRating rating='9' />
      <Poster url={ url } />

      <div style={{ backgroundColor: '#211B39', padding: '30px' }}>
        <Movie data={ movieData } />
        <br/>
        <Movie data={ movieData2 } />
      </div>
    </div>
  )
}

export default MovieTest 
