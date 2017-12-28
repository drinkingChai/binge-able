import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Test from './test/Test'

ReactDOM.render(
  <Router>
    <Test />
  </Router>,
  document.getElementById('root')
)
