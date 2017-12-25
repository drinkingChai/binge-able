import React, { Component } from 'react'

import VendorCarousel from './VendorCarousel'
import Button from './Button'

export default class SurveyOpening extends Component {
  state = {
    currentVendor: 0
  }

  handleRotate = vendorIdx => {
    this.setState({ currentVendor: vendorIdx })
  }

  render = () => {
    return (
      <div className='survey opening'>
        <div className='survey-title'>
          <h3>Survey</h3>
          <h3>{ this.props.title }</h3>
        </div>

        <div className='survey-body'>
          <p className='vendor-name'>select source</p>
          <VendorCarousel vendorArray={ this.props.vendors } onChange={ this.handleRotate } />

          <Button label='NEXT' onClick={ () => this.props.onNext(this.state.currentVendor) } />
        </div>
      </div>
    )
  }
}
