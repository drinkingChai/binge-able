import React from 'react'
import ReactMarkdown from 'react-markdown'

import about from '../../../json/about'

export default function () {
  return (
    <div className='about'>
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
