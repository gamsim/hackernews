import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'
import Home from './screens/Home/Home'
import Comments from './screens/Comments/Comments'

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/comments'>
            <Comments />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
