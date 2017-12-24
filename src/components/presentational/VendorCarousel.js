import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Button from './Button'

export default class VendorCarousel extends Component {
  state = {
    current: 0, vendorArray: [{}]
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  handleRotate = direction => {
    let { current, vendorArray } = this.state

    if (direction == 'right') {
      current = (current + 1) % vendorArray.length
    } else {
      current--
      current = current < 0 ? vendorArray.length - 1 : current % vendorArray.length
    }

    this.setState({ current })
  }

  render = () => {
    const { current, vendorArray } = this.state

    return (
      <div className='vendor-carousel'>
        <div className='carousel-container'>
          <Button label={ <i className="fas fa-chevron-left"></i> } onClick={ () => this.handleRotate('left') } />
          <div className='carousel'>
          {
            vendorArray.map((vendor, i) => 
              <div className={ `carousel-item ${i == current - 1 ? 'left' : i == current ? 'current' : i == current + 1 ? 'right' : 'hidden'}` } key={ i }>
              <img
                className='vendor-logo'
                src={ vendor.logo } key={ i }/>
              </div>
            )
          }
          </div>
          <Button label={ <i className="fas fa-chevron-right"></i> } onClick={ () => this.handleRotate('right') } />
        </div>
        <div className='vendor-name'>{ vendorArray[current].name }</div>
      </div>
    )    
  }
}