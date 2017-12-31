import React, { Component } from 'react'

class GenresSelector extends Component {
  state = { genres: [], ddActive: false }

  componentDidMount = () => {
    let genres = this.props.genres.map(genre => ({ label: genre, selected: false }))
    this.setState({ genres })
  }

  toggleGenre = idx => {
    let { genres } = this.state
    genres[idx].selected = !genres[idx].selected 
    this.setState({ genres })
  }

  toggleDropdown = () => {
    let { ddActive } = this.state
    ddActive = !ddActive
    this.setState({ ddActive })

    if (ddActive) {
      document.addEventListener('click', this.handleEvent)
    } else {
      document.removeEventListener('click', this.handleEvent)
    }
  }

  handleEvent = e => {
    let inDD = this.node.contains(e.target)
    if (!inDD) {
      document.removeEventListener('click', this.handleEvent)
      this.setState({ ddActive: false })
    }
  }

  render = () => {
    let { genres, ddActive } = this.state
    let allSelected = true 
    for (let i = 0; i < genres.length; i++) {
      if (!genres[i].selected) {
        allSelected = false
        break
      }
    } 
    if (allSelected) {
      ddActive = false
      document.removeEventListener('click', this.handleEvent)
    }

    return (
      <div className='genres-selector'>
        <div className='selected'>
        {
          genres.map((genre, i) =>
            <div className={ `genre-label ${genre.selected ? 'picked' : 'hidden'}` } key={ i } onClick={ () => this.toggleGenre(i) } >
              <span>{ genre.label } <span className='x'>{genre.selected && 'x'}</span></span> 
            </div>)
        }
          <span className='toggle-dd' onClick={ this.toggleDropdown }><i className="fas fa-chevron-down"></i></span>
        </div>

        <div className={ `selector ${ddActive && 'dd-active' || 'dd-hidden'}` } ref={ node => this.node = node }>
        {
          genres.map((genre, i) =>
            <div className={ `genre-label ${genre.selected ? 'hidden' : 'available'}` } key={ i } onClick={ () => this.toggleGenre(i) } >
            { genre.label }
            </div>)
        }
          { /*<span className='toggle-dd' onClick={ this.toggleDropdown }><span className='x'>x</span></span>*/}
        </div>
      </div>
    )
  }
}

export default GenresSelector
