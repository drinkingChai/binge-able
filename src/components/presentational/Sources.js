import React, { Component } from 'react'

import EpSelect from './EpSelect'
import VendorCarousel from './VendorCarousel'
import Button from './Button'

class Sources extends Component {
  state = {
    sourcesData: {
      vendors: [{ seasons: [] }]
    },
    current: 0
  }

  componentDidMount = () => {
    this.setState(this.props)
  }

  handleCarouselChange = i => {
    this.setState({ current: i })
  }

  render = () => {
    const { sourcesData, current } = this.state
    const currentVendor = sourcesData.vendors[+current]

    return (
      <div className='sources panel'>
        <div className='sources-title'>
          <h3>Sources</h3>
          <h3>{ sourcesData.title }</h3>
        </div>

        <div className='ep-container' style={{ height: `${ currentVendor.seasons.length * 80 }px` }}>
        {
          currentVendor.seasons.map((season, i) =>
            <EpSelect seasonData={ season } key={ i } clickDisabled />
          )
        }
        </div>

        <VendorCarousel vendorArray={ sourcesData.vendors } onChange={ this.handleCarouselChange } />

        <div className='btn-container'>
          <Button label='SURVEY NEW INFO' onClick={ this.props.onSurvey } />
          <Button label='CONFIRM CURRENT INFO' onClick={ this.props.onVerify } />
        </div>
      </div>
    )
  }
}

export default Sources
