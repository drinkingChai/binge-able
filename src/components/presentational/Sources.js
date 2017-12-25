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
      <div className='sources'>
        <div className='sources-title'>
          <h4>Sources</h4>
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
          <Button label='SURVEY NEW INFO' />
          <Button label='CONFIRM CURRENT INFO' />
        </div>
      </div>
    )
  }
}

export default Sources
