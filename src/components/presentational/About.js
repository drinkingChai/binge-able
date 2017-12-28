import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import about from '../../../json/about'

export default class About extends React.Component {
  componentDidMount = () => {
    // open new window hack for markdown
    this.node.querySelector('a').addEventListener('click', function (e) {
      e.preventDefault()
      window.open(this.href)
    })
    // remove listener on dismount?
  }

  render = () => {
    return (
      <div className='about' ref={ node => this.node = node }>
      {
        about.map((section, i) =>
          <section key={ i }>
            <h4>{ section.header }</h4>
            { section.content.map((content, j) => <ReactMarkdown key={ j } source={ content } />) }
          </section>
        )
      }
      </div>
    )
  }
}
