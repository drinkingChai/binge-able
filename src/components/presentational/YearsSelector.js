import React, { Component } from 'react'

import Button from './Button'

class YearDD extends Component {
  state = { years: [], current: 1951, ddActive: false }

  componentDidMount = () => {
    let yearNow = new Date().getFullYear(),
        yearFrom = +this.props.yearFrom || 1951,
        current = +this.props.current || 1951,
        years = []

    while (yearFrom <= yearNow) {
      years.push(yearFrom)
      yearFrom++
    }

    this.setState({ years, current })
  }

  componentWillReceiveProps = nextProps => {
    this.setState({ current: +nextProps.current })
  }

  selectYear = i => {
    document.removeEventListener('click', this.handleEvent)
    this.setState({ ddActive: false, current: this.state.years[i] }, () => {
      this.props.onChange && this.props.onChange(this.state.current)
    })
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
    let { years, current, ddActive } = this.state

    return (
      <div className='year'>
        <Button label={ current } className={ `ba-btn default genre-label ${ddActive && 'place-above'}` } onClick={ this.toggleDropdown } />
        <div className={ `year-dd ${ddActive && 'dd-active' || ''}` } ref={ node => this.node = node }>
        {
          years.map((y, i) => <div onClick={ () => this.selectYear(i) } key={ i }>{ y }</div>)
        }
        </div>
      </div>
    )
  }
}

class YearsSelector extends Component {
  state = {
    start: 1950,
    end: new Date().getFullYear()
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  setEnd = end => {
    if (end < this.state.start) {
      this.setState({ start: end, end })
    } else this.setState({ end })
  } 

  setStart = start => {
    if (start > this.state.end) {
      this.setState({ end: start, start })
    } else this.setState({ start })
  }

  render = () => {
    let { start, end } = this.state

    return (
      <div className='years-selector'>
        <YearDD current={ start } onChange={ this.setStart } />
        <span className='minus'>-</span>
        <YearDD current={ end } onChange={ this.setEnd } />
      </div>
    )
  }
}

export default YearsSelector
