import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Button from './Button'

export default class SourcesCarousel extends Component {
  state = { current: 0, sourcesArr: [{}] }

  componentDidMount = () => { this.setState({ sourcesArr: this.props.sources }) }
  componentWillReceiveProps = nextProps => { this.setState({ sourcesArr: nextProps.sources }) }

  handleRotate = direction => {
    let { current, sourcesArr } = this.state

    if (direction == 'right') current = (current + 1) % sourcesArr.length
    else current = current - 1 < 0 ? sourcesArr.length - 1 : (current - 1) % sourcesArr.length

    this.setState({ current })
    this.props.onChange && this.props.onChange(current)
  }

  render = () => {
    const { current, sourcesArr } = this.state

    return (
      <div className='source-carousel'>
        <div className='carousel-container'>
          <Button
            label={ <i className="fas fa-chevron-left"></i> }
            onClick={ () => this.handleRotate('left') }
            className='' />
          <div className='carousel'>
          { sourcesArr.map((source, i) => 
            <div className={ `carousel-item ${i == current - 1 ? 'left' : i == current ? 'current' : i == current + 1 ? 'right' : 'hidden'}` } key={ i }>
            <img
              className='source-logo'
              src={ source.logo } key={ i }/>
            </div>
          )}
          </div>
          <Button
            label={ <i className="fas fa-chevron-right"></i> }
            onClick={ () => this.handleRotate('right') }
            className='' />
        </div>
        <div className='source-name'>{ sourcesArr[current].name }</div>
      </div>
    )    
  }
}