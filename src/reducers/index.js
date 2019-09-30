import { combineReducers } from 'redux'

import additionalPrice from './additionalPrice'
import car from './car'
import store from './store'

export default combineReducers({
  additionalPrice,
  car,
  store
})
