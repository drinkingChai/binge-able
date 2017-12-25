import React, { Component } from 'react'

class GenresSelector extends Component {
  state = { genres: [], filterActive: false, ddActive: false }

  componentDidMount = () => {
    let genres = this.props.genres.map(genre => ({ label: genre, selected: false }))
    this.setState({ genres })
  }

  toggleGenre = idx => {
    let { genres, filterActive } = this.state
    genres[idx].selected = !genres[idx].selected 
    if (genres[idx].selected) filterActive = true
    else {
      for (let i = 0; i < genres.length; i++) {
        if (genres[i].selected) {
          filterActive = true
          break
        } else filterActive = false
      }
    }
    this.setState({ genres, filterActive })
  }

  toggleDropdown = () => {
    let { ddActive } = this.state
    ddActive = !ddActive
    this.setState({ ddActive })
  }

  render = () => {
    let { genres, filterActive, ddActive } = this.state
    let allSelected = true 
    for (let i = 0; i < genres.length; i++) {
      if (!genres[i].selected) {
        allSelected = false
        break
      }
    } 
    if (allSelected) ddActive = false

    return (
      <div className='genres-selector'>
        { /*<div className={ `selected ${filterActive && 'filter-active'}` }>*/}
        <div className={ 'selected filter-active' }>
        {
          genres.map((genre, i) =>
            <div className={ `genre-label ${genre.selected ? 'selected' : 'hidden'}` } key={ i } onClick={ () => this.toggleGenre(i) } >
              <span>{ genre.label } <span className='x'>{genre.selected && 'x'}</span></span> 
            </div>)
        }
          <span className='toggle-dd' onClick={ this.toggleDropdown }><i className="fas fa-chevron-down"></i></span>
        </div>

        <div className={ `selector ${ddActive && 'dd-active' || 'dd-hidden'}` }>
        {
          genres.map((genre, i) =>
            <div className={ `genre-label ${genre.selected ? 'hidden' : 'available'}` } key={ i } onClick={ () => this.toggleGenre(i) } >
            { genre.label }
            </div>)
        }
          <span className='toggle-dd' onClick={ this.toggleDropdown }><span className='x'>x</span></span>
        </div>
      </div>
    )
  }
}

export default GenresSelector
