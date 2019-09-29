import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bulma/css/bulma.css'
import './styles.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { CarReducer } from './reducers'

const store = createStore(CarReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
