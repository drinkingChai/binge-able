import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Root from './components/Root'
import Test from './test/Test'
import store from './store'

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <Route exact path='/' component={ Root } />
        <Route exact path='/test' component={ Test } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
